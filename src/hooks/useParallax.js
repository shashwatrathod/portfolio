import { useCallback } from 'react';

/**
 * Hook to handle parallax mouse movement effects
 * @param {React.RefObject} ref - Reference to the element to apply the effect to
 * @param {Object} options - Configuration options
 * @param {number} options.sensitivity - Movement multiplier (default: 20)
 * @param {string} options.variableX - CSS variable name for X offset (default: '--parallax-x')
 * @param {string} options.variableY - CSS variable name for Y offset (default: '--parallax-y')
 * @returns {Function} - Mouse move handler
 */
const useParallax = (ref, options = {}) => {
  const {
    sensitivity = 20,
    variableX = '--parallax-x',
    variableY = '--parallax-y',
    method = 'offset', // 'offset' | 'position'
    clamp = null, // { min: number, max: number }
  } = options;

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    if (method === 'offset') {
      // Calculate percentage from center (0.5 is center)
      const xPct = (e.clientX - rect.left) / rect.width - 0.5;
      const yPct = (e.clientY - rect.top) / rect.height - 0.5;

      // Calculate offset
      const x = xPct * sensitivity;
      const y = yPct * sensitivity;

      ref.current.style.setProperty(variableX, `${x}px`);
      ref.current.style.setProperty(variableY, `${y}px`);
    } else if (method === 'position') {
      // Calculate percentage from top-left (0-100)
      let x = ((e.clientX - rect.left) / rect.width) * 100;
      let y = ((e.clientY - rect.top) / rect.height) * 100;

      if (clamp) {
        x = Math.max(clamp.min, Math.min(clamp.max, x));
        y = Math.max(clamp.min, Math.min(clamp.max, y));
      }

      ref.current.style.setProperty(variableX, `${x}%`);
      ref.current.style.setProperty(variableY, `${y}%`);
    }
  }, [ref, sensitivity, variableX, variableY, method, clamp]);

  return handleMouseMove;
};

export default useParallax;
