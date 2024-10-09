// src/components/3d/PCModel.tsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const PCModel = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load(
      '/pc-case.glb',
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1);
        model.position.set(0, 0, 0);
        scene.add(model);

        const animate = () => {
          requestAnimationFrame(animate);
          model.rotation.y += 0.005;
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => {
        console.error('An error occurred loading the 3D model:', error);
      }
    );

    camera.position.z = 5;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-1/2 z-10" />;
};

export default PCModel;