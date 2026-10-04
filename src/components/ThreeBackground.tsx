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

    // 1. Scene setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Detect theme for adaptive color grading
    const isDark = () =>
      document.documentElement.classList.contains("dark") ||
      document.documentElement.getAttribute("data-theme") === "dark";

    const getPrimaryColor = () => {
      // Brand Red (#e91100 in hex is 0xe91100)
      return isDark() ? 0xe91100 : 0xdc2626;
    };

    const getSecondaryColor = () => {
      return isDark() ? 0xff4d36 : 0xef4444;
    };

    // 2. 3D Elements
    // Group container for smooth mouse tilt
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Core Wireframe: Nested 3D Geodesic / Icosahedron
    const coreGeometry = new THREE.IcosahedronGeometry(4.2, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: getPrimaryColor(),
      wireframe: true,
      transparent: true,
      opacity: isDark() ? 0.35 : 0.16,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // Inner Core: Floating Octahedron
    const innerGeometry = new THREE.OctahedronGeometry(2.2, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: getSecondaryColor(),
      wireframe: true,
      transparent: true,
      opacity: isDark() ? 0.45 : 0.22,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // Outer Orbital Ring: Torus Wireframe
    const ringGeometry = new THREE.TorusGeometry(8.2, 0.05, 8, 54);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: getPrimaryColor(),
      transparent: true,
      opacity: isDark() ? 0.35 : 0.14,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh);

    const ring2Geometry = new THREE.TorusGeometry(9.4, 0.04, 8, 54);
    const ring2Mesh = new THREE.Mesh(ring2Geometry, ringMaterial);
    ring2Mesh.rotation.x = -Math.PI / 4;
    ring2Mesh.rotation.y = Math.PI / 6;
    mainGroup.add(ring2Mesh);

    // 3. Particle Constellation & Neural Cloud
    const particleCount = 550;
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    // Generate crisp circular particle texture without dark borders
    const createParticleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, 32, 32);
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.35, "rgba(233, 17, 0, 0.9)");
        gradient.addColorStop(0.7, "rgba(233, 17, 0, 0.3)");
        gradient.addColorStop(1, "rgba(233, 17, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(16, 16, 16, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createParticleTexture();

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 13 + 3.5;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      scales[i] = Math.random() * 0.8 + 0.4;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: isDark() ? 0.38 : 0.28,
      map: particleTexture,
      transparent: true,
      opacity: isDark() ? 0.75 : 0.45,
      blending: isDark() ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    mainGroup.add(particleSystem);

    // Responsive positioning: on desktop, shift group slightly right to frame hero text
    if (width >= 1024) {
      mainGroup.position.x = 4.5;
    } else {
      mainGroup.position.x = 0;
    }

    // 4. Mouse and Scroll Tracking with Smooth Damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = 0;
    let targetScrollY = 0;
    let isVisible = true;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      // Normalized between -1 and 1
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.targetX = nx * 0.6;
      mouse.targetY = ny * 0.4;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Pause rendering when canvas is not visible to optimize GPU/CPU
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || 600;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Theme observer
    const themeObserver = new MutationObserver(() => {
      const dark = isDark();
      const color = dark ? 0xe91100 : 0xdc2626;
      const secColor = dark ? 0xff4d36 : 0xef4444;

      coreMaterial.color.setHex(color);
      coreMaterial.opacity = dark ? 0.35 : 0.16;

      innerMaterial.color.setHex(secColor);
      innerMaterial.opacity = dark ? 0.45 : 0.22;

      ringMaterial.color.setHex(color);
      ringMaterial.opacity = dark ? 0.35 : 0.14;

      particlesMaterial.opacity = dark ? 0.75 : 0.45;
      particlesMaterial.size = dark ? 0.38 : 0.28;
      particlesMaterial.blending = dark ? THREE.AdditiveBlending : THREE.NormalBlending;
      particlesMaterial.needsUpdate = true;
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    // 5. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Smooth scroll lerp
      scrollY += (targetScrollY - scrollY) * 0.05;

      // Group rotation (continuous ambient rotation + mouse tilt)
      mainGroup.rotation.y = elapsedTime * 0.12 + mouse.x * 0.8;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.08) * 0.15 - mouse.y * 0.5;

      // Core rotation (faster, multi-axis)
      coreMesh.rotation.x = elapsedTime * 0.2;
      coreMesh.rotation.y = elapsedTime * 0.25;

      // Inner core counter-rotation
      innerMesh.rotation.x = -elapsedTime * 0.35;
      innerMesh.rotation.z = elapsedTime * 0.3;

      // Rings precession
      ringMesh.rotation.z = elapsedTime * 0.15;
      ring2Mesh.rotation.z = -elapsedTime * 0.18;

      // Scroll effect: subtle parallax zoom and camera pan
      const scrollFactor = Math.min(scrollY / 1000, 1.5);
      camera.position.y = -scrollFactor * 3.5;
      camera.position.z = 24 - scrollFactor * 4;

      // Subtle particle breathing wave
      const positionAttr = particlesGeometry.attributes
        .position as THREE.BufferAttribute;
      const posArray = positionAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i += 3) {
        const ox = originalPositions[i * 3];
        const oy = originalPositions[i * 3 + 1];
        const oz = originalPositions[i * 3 + 2];

        const wave = Math.sin(elapsedTime * 0.8 + ox * 0.3) * 0.2;
        posArray[i * 3] = ox + wave;
        posArray[i * 3 + 1] = oy + wave;
        posArray[i * 3 + 2] = oz + wave;
      }
      positionAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      themeObserver.disconnect();

      // Dispose Three.js resources
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ringGeometry.dispose();
      ring2Geometry.dispose();
      ringMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      particleTexture.dispose();

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
      className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none transition-opacity duration-1000"
    />
  );
}
