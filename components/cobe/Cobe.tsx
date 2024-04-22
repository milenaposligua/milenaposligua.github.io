import createGlobe from "cobe";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useSpring } from 'react-spring';

export const Cobe = () => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));



  useEffect(() => {
    let width = 0;
    let phi = 0;
    const onResize = () => canvasRef.current && (width = (canvasRef.current as HTMLCanvasElement).offsetWidth)
    window.addEventListener('resize', onResize)
    onResize()
    if (canvasRef.current) {
      const color = getComputedStyle(document.documentElement).getPropertyValue('--accent-marker').trim();

      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 3,
        opacity: 0.85,
        // scale: 1.5,
        mapSamples: 16000,
        mapBrightness: 3.2,
        baseColor: [0.1, 0.1, 0.1],
        markerColor: hexToRgb(color),
        glowColor: [0.02, 0.02, 0.02],
        markers: [
          { location: [40.7595, -1.4367], size: 0.05 },
          { location: [-2, -78], size: 0.1 },
        ],
        onRender: (state) => {
          if (!pointerInteracting.current) {
            phi += 0.005
          }
          state.phi = phi + r.get()
          state.width = width * 2
          state.height = width * 2
        }
      })
      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = '1';
        }
      });
      return () => globe.destroy()
    }

  }, [])


  function hexToRgb(hex: string): [number, number, number]{
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!match) {
      console.log('Invalid color')
      return [255, 255, 255];
    }
    return [
      parseInt(match[1], 16) / 255,
      parseInt(match[2], 16) / 255,
      parseInt(match[3], 16) / 255
    ];
  }

return (
  <motion.canvas
    initial={{ opacity: 0, y: 500 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}

    ref={canvasRef}
    onPointerDown={(e) => {
      pointerInteracting.current =
        e.clientX - pointerInteractionMovement.current;
      if (canvasRef.current) {
        canvasRef.current.style.cursor = 'grabbing';
      }
    }}
    onPointerUp={() => {
      pointerInteracting.current = null;
      if (canvasRef.current) {
        canvasRef.current.style.cursor = 'grab';

      }
    }}
    onPointerOut={() => {
      pointerInteracting.current = null;
      if (canvasRef.current) {
        canvasRef.current.style.cursor = 'grab';
      }
    }}
    onMouseMove={(e) => {
      if (pointerInteracting.current !== null) {
        const delta = e.clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta;
        api.start({
          r: delta / 200,
        });
      }
    }}
    onTouchMove={(e) => {
      if (pointerInteracting.current !== null && e.touches[0]) {
        const delta = e.touches[0].clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta;
        api.start({
          r: delta / 100,
        });
      }
    }}
    style={{
      width: '1000px',
      height: '1000px',
      zIndex: -1,
      position: 'absolute',
      bottom: '-300px',
      cursor: 'grab',
      contain: 'layout paint size',
      opacity: 0,
      transition: 'opacity 1s ease',
    }}
  />
)
}