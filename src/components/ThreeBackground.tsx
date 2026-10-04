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

    // 2. Refined, Minimalist Google Antigravity Chromatic Palette
    const chromaticPalette = [
      new THREE.Color("#4f46e5"), // Indigo
      new THREE.Color("#3b82f6"), // Blue
      new THREE.Color("#8b5cf6"), // Violet
      new THREE.Color("#ec4899"), // Pink / Magenta
      new THREE.Color("#e91100"), // Brand Crimson Red
      new THREE.Color("#f97316"), // Warm Orange
      new THREE.Color("#f59e0b"), // Amber Gold
      new THREE.Color("#06b6d4"), // Cyan
    ];

    const getMutedColor = (dark: boolean) =>
      dark ? new THREE.Color("#64748b") : new THREE.Color("#94a3b8");

    // 3. Simple & Elegant Particle Stream Field (~420 particles total)
    // Clean, airy, framing the hero without cluttering text
    const particleCount = 420;
    const dashGeometry = new THREE.PlaneGeometry(0.065, 0.34);
    dashGeometry.center();

    const dashMaterial = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: isDark() ? 0.78 : 0.6,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const instancedMesh = new THREE.InstancedMesh(
      dashGeometry,
      dashMaterial,
      particleCount
    );

    interface StreamParticle {
      streamIndex: number;
      progress: number;
      speed: number;
      lateralOffset: number;
      z: number;
      phase: number;
      color: THREE.Color;
      scale: number;
    }

    const particles: StreamParticle[] = [];

    // Streamline path parameters: sweeping arc framing the upper-left and outer perimeter
    const streamArcs = [
      { radius: 11, startAngle: -2.4, endAngle: 0.8, yOffset: 1.0, xOffset: -4.5 },
      { radius: 15, startAngle: -2.2, endAngle: 1.1, yOffset: 1.2, xOffset: -4.0 },
      { radius: 19, startAngle: -2.0, endAngle: 1.3, yOffset: 1.5, xOffset: -3.5 },
      { radius: 24, startAngle: -1.8, endAngle: 1.5, yOffset: 1.8, xOffset: -3.0 },
    ];

    for (let i = 0; i < particleCount; i++) {
      const streamIndex = i % streamArcs.length;
      const progress = Math.random();
      const speed = 0.025 + Math.random() * 0.035;
      const lateralOffset = (Math.random() - 0.5) * 1.8;
      const z = (Math.random() - 0.5) * 4.0;
      const phase = Math.random() * Math.PI * 2;

      // Color mapping: chromatic flow along stream progress
      let color: THREE.Color;
      if (Math.random() > 0.2) {
        const colorIdx = Math.floor(progress * chromaticPalette.length);
        const nextColorIdx = (colorIdx + 1) % chromaticPalette.length;
        const blend = (progress * chromaticPalette.length) % 1;
        color = chromaticPalette[colorIdx].clone().lerp(chromaticPalette[nextColorIdx], blend);
      } else {
        color = getMutedColor(isDark());
      }

      const scale = 0.7 + Math.random() * 0.45;

      particles.push({
        streamIndex,
        progress,
        speed,
        lateralOffset,
        z,
        phase,
        color,
        scale,
      });

      instancedMesh.setColorAt(i, color);
    }

    if (instancedMesh.instanceColor) {
      instancedMesh.instanceColor.needsUpdate = true;
    }

    scene.add(instancedMesh);

    // 4. Mouse / Interactive Anti-Gravity Fluid Wake
    const mouse3D = new THREE.Vector3(9999, 9999, 0);
    const targetMouse3D = new THREE.Vector3(9999, 9999, 0);
    let scrollY = 0;
    let targetScrollY = 0;
    let isVisible = true;

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

    // Performance: Pause loop when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 700;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Theme Switch Observer
    const themeObserver = new MutationObserver(() => {
      const dark = isDark();
      dashMaterial.opacity = dark ? 0.78 : 0.6;
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    // 5. Hypnotic, Tranquil Animation Loop
    const dummy = new THREE.Object3D();
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp with soft inertia
      mouse3D.lerp(targetMouse3D, 0.06);

      // Smooth scroll lerp
      scrollY += (targetScrollY - scrollY) * 0.05;
      const scrollDrift = scrollY * 0.0015;

      // Gentle camera parallax following mouse
      if (mouse3D.x < 1000) {
        camera.position.x += (mouse3D.x * 0.08 - camera.position.x) * 0.03;
        camera.position.y += (mouse3D.y * 0.08 - camera.position.y) * 0.03;
      } else {
        camera.position.x += (0 - camera.position.x) * 0.03;
        camera.position.y += (0 - camera.position.y) * 0.03;
      }
      camera.lookAt(0, 0, 0);

      // Update streamlined particles
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        const stream = streamArcs[p.streamIndex];

        // Advance along streamline (infinite loop with smooth wrap)
        p.progress = (p.progress + delta * p.speed + scrollDrift * 0.02) % 1.0;

        // Angle along arc
        const currentAngle =
          stream.startAngle + p.progress * (stream.endAngle - stream.startAngle);

        // Radius with breathing harmonics and lateral offset
        const r =
          stream.radius +
          p.lateralOffset +
          Math.sin(elapsedTime * 0.6 + p.phase) * 0.35;

        // Base coordinates along arc
        let x = stream.xOffset + Math.cos(currentAngle) * r;
        let y = stream.yOffset + Math.sin(currentAngle) * (r * 0.65);
        let z = p.z + Math.cos(elapsedTime * 0.4 + p.phase) * 0.3;

        // Streamline orientation: dash points tangent to the flowing curve
        let angle = currentAngle + Math.PI / 2 + 0.12;

        // Smooth fade in and out at stream edges
        let edgeAlpha = 1.0;
        if (p.progress < 0.1) {
          edgeAlpha = p.progress / 0.1;
        } else if (p.progress > 0.9) {
          edgeAlpha = (1.0 - p.progress) / 0.1;
        }

        // Interactive Anti-Gravity Mouse Wake (Gentle fluid deflection)
        if (mouse3D.x < 1000) {
          const dx = x - mouse3D.x;
          const dy = y - mouse3D.y;
          const distSq = dx * dx + dy * dy;
          const interactionRadius = 5.2;

          if (distSq < interactionRadius * interactionRadius && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const force = Math.pow(1 - dist / interactionRadius, 1.8) * 1.3;

            const pushAngle = Math.atan2(dy, dx);
            x += Math.cos(pushAngle) * force;
            y += Math.sin(pushAngle) * force;
            z += force * 1.2;

            // Tilt with fluid velocity
            angle += Math.sin(elapsedTime * 2 + dist) * force * 0.6;
          }
        }

        const scale = p.scale * edgeAlpha;

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
