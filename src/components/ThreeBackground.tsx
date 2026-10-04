"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ThreeBackgroundProps {
  interactive?: boolean;
}

export default function ThreeBackground({ interactive = true }: ThreeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const testCanvas = document.createElement("canvas");
      const gl =
        testCanvas.getContext("webgl") ||
        testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 700;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 26);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const isDark = () =>
      document.documentElement.classList.contains("dark") ||
      document.documentElement.getAttribute("data-theme") === "dark";

    // 2. Google Antigravity Chromatic Color Palette
    const palette = [
      new THREE.Color("#4338ca"), // Deep Indigo
      new THREE.Color("#3b82f6"), // Blue
      new THREE.Color("#6366f1"), // Indigo Violet
      new THREE.Color("#8b5cf6"), // Purple
      new THREE.Color("#ec4899"), // Pink / Magenta
      new THREE.Color("#e91100"), // Crimson Red (Brand accent)
      new THREE.Color("#f97316"), // Vibrant Orange
      new THREE.Color("#f59e0b"), // Amber Gold
      new THREE.Color("#06b6d4"), // Cyan / Teal
    ];

    const getNeutralColor = (dark: boolean) => {
      // In light mode: soft slate ink; In dark mode: glowing soft stardust
      return dark ? new THREE.Color("#94a3b8") : new THREE.Color("#64748b");
    };

    // 3. Antigravity Particle Stream Field
    // Each particle is an oriented dash / capsule tick mark
    const particleCount = 2200;
    const dashGeometry = new THREE.PlaneGeometry(0.08, 0.44);
    // Center alignment
    dashGeometry.center();

    const dashMaterial = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: isDark() ? 0.88 : 0.72,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const instancedMesh = new THREE.InstancedMesh(
      dashGeometry,
      dashMaterial,
      particleCount
    );

    // Particle state arrays
    const basePositions: Array<{
      r: number;
      theta: number;
      z: number;
      speed: number;
      phase: number;
      isLeftVortex: boolean;
      color: THREE.Color;
    }> = [];

    // Vortex center: left-shifted on desktop like Antigravity layout
    const getVortexCenter = () => {
      const isMobile = window.innerWidth < 768;
      return {
        x: isMobile ? 0 : -6.5,
        y: isMobile ? 2.5 : 1.2,
      };
    };

    let vortexCenter = getVortexCenter();

    const goldenAngle = 2.39996323; // ~137.5 degrees in radians

    for (let i = 0; i < particleCount; i++) {
      // 65% in the main chromatic vortex, 35% in outer disperse drift
      const isLeftVortex = i < particleCount * 0.7;

      let r: number;
      let theta: number;
      let z: number;
      let particleColor: THREE.Color;

      if (isLeftVortex) {
        // Spiral phyllotaxis disk radiating outwards
        const progress = i / (particleCount * 0.7);
        r = Math.pow(progress, 0.55) * 16.5 + 1.2;
        theta = i * goldenAngle;
        z = (Math.random() - 0.5) * 3.5;

        // Chromatic palette based on spiral angle & radius
        const normalizedAngle = (theta % (Math.PI * 2)) / (Math.PI * 2);
        const paletteIdx = Math.floor(normalizedAngle * palette.length);
        const nextIdx = (paletteIdx + 1) % palette.length;
        const blend = (normalizedAngle * palette.length) % 1;

        particleColor = palette[paletteIdx].clone().lerp(palette[nextIdx], blend);

        // Mix in subtle random variation
        if (Math.random() > 0.8) {
          particleColor.lerp(new THREE.Color("#e91100"), 0.3);
        }
      } else {
        // Disperse drift across the right side and outer space
        const j = i - particleCount * 0.7;
        const totalRight = particleCount * 0.3;
        r = Math.sqrt(j / totalRight) * 26 + 6;
        theta = j * goldenAngle * 1.5;
        z = (Math.random() - 0.5) * 6;

        // Mostly neutral slate with occasional colorful sparks
        if (Math.random() > 0.35) {
          particleColor = getNeutralColor(isDark());
        } else {
          const randColor = palette[Math.floor(Math.random() * palette.length)];
          particleColor = randColor.clone();
        }
      }

      basePositions.push({
        r,
        theta,
        z,
        speed: 0.12 + Math.random() * 0.18,
        phase: Math.random() * Math.PI * 2,
        isLeftVortex,
        color: particleColor,
      });

      instancedMesh.setColorAt(i, particleColor);
    }

    if (instancedMesh.instanceColor) {
      instancedMesh.instanceColor.needsUpdate = true;
    }

    scene.add(instancedMesh);

    // 4. Mouse / Anti-Gravity Force Field & Scroll State
    const mouse3D = new THREE.Vector3(9999, 9999, 0);
    const targetMouse3D = new THREE.Vector3(9999, 9999, 0);
    let scrollY = 0;
    let targetScrollY = 0;
    let isVisible = true;

    // Raycaster to project mouse onto 3D plane z = 0
    const raycaster = new THREE.Raycaster();
    const mouseCoord = new THREE.Vector2(-9999, -9999);
    const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || !container) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      mouseCoord.set(x, y);
      raycaster.setFromCamera(mouseCoord, camera);
      raycaster.ray.intersectPlane(planeZ, targetMouse3D);
    };

    const handleMouseLeave = () => {
      targetMouse3D.set(9999, 9999, 0);
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Performance: Pause animation when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 700;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      vortexCenter = getVortexCenter();
    };

    window.addEventListener("resize", handleResize);

    // Theme Switch Observer
    const themeObserver = new MutationObserver(() => {
      const dark = isDark();
      dashMaterial.opacity = dark ? 0.88 : 0.72;

      // Update neutral colors
      for (let i = 0; i < particleCount; i++) {
        const p = basePositions[i];
        if (!p.isLeftVortex) {
          instancedMesh.setColorAt(i, p.color);
        }
      }
      if (instancedMesh.instanceColor) {
        instancedMesh.instanceColor.needsUpdate = true;
      }
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    // 5. Animation Loop: Fluid Vortex & Anti-Gravity Physics
    const dummy = new THREE.Object3D();
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse3D.lerp(targetMouse3D, 0.08);

      // Smooth scroll lerp
      scrollY += (targetScrollY - scrollY) * 0.06;
      const scrollOffset = scrollY * 0.003;

      // Subtle parallax camera motion
      if (mouse3D.x < 1000) {
        camera.position.x += (mouse3D.x * 0.12 - camera.position.x) * 0.04;
        camera.position.y += (mouse3D.y * 0.12 - camera.position.y) * 0.04;
      } else {
        camera.position.x += (0 - camera.position.x) * 0.04;
        camera.position.y += (0 - camera.position.y) * 0.04;
      }
      camera.lookAt(0, 0, 0);

      // Update particle positions
      for (let i = 0; i < particleCount; i++) {
        const p = basePositions[i];

        // 1. Base vortex orbit
        const currentTheta =
          p.theta +
          elapsedTime * p.speed * 0.15 +
          scrollOffset * 0.5 +
          (p.isLeftVortex ? 0 : Math.sin(elapsedTime * 0.2 + p.phase) * 0.1);

        // Breathing radius pulsation
        const breathing = Math.sin(elapsedTime * 0.8 + p.phase) * 0.35;
        const currentR = p.r + breathing;

        // Position relative to vortex center
        let x = vortexCenter.x + Math.cos(currentTheta) * currentR;
        let y = vortexCenter.y + Math.sin(currentTheta) * currentR;
        let z = p.z + Math.cos(elapsedTime * 0.5 + p.phase) * 0.4;

        // Tangent streamline flow angle
        // Dash points along the outward curved spiral
        let angle = currentTheta + Math.PI / 2 + 0.18;

        // 2. Interactive "Anti-Gravity" Force Field
        if (mouse3D.x < 1000) {
          const dx = x - mouse3D.x;
          const dy = y - mouse3D.y;
          const distSq = dx * dx + dy * dy;
          const interactionRadius = 5.8;

          if (distSq < interactionRadius * interactionRadius && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / interactionRadius) * 1.6;

            // Repulsion push + swirl vortex around cursor
            const pushAngle = Math.atan2(dy, dx);
            const swirlAngle = pushAngle + Math.PI / 2;

            x += Math.cos(pushAngle) * force * 1.1 + Math.cos(swirlAngle) * force * 0.7;
            y += Math.sin(pushAngle) * force * 1.1 + Math.sin(swirlAngle) * force * 0.7;
            z += force * 1.5;

            // Align dash with the magnetic swirl flow
            angle = swirlAngle + Math.sin(elapsedTime * 3 + dist) * 0.4;
          }
        }

        // Apply scale: larger near the vibrant vortex center, tapering smoothly outwards
        const scale = p.isLeftVortex
          ? THREE.MathUtils.clamp(1.1 - p.r / 22, 0.45, 1.25)
          : THREE.MathUtils.clamp(0.8 - p.r / 35, 0.35, 0.85);

        dummy.position.set(x, y, z);
        dummy.rotation.z = angle;
        dummy.scale.set(scale, scale, 1);
        dummy.updateMatrix();

        instancedMesh.setMatrixAt(i, dummy.matrix);
      }

      instancedMesh.instanceMatrix.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      themeObserver.disconnect();

      dashGeometry.dispose();
      dashMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  if (!webglSupported) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    />
  );
}
