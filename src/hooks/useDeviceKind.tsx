/**
 * Hook to get the device kind and observe changes
 * by resize observer
 */

import { useState, useEffect } from 'react';

const getDeviceKind = () => {
  if (typeof window === 'undefined') return 'desktop';
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1280) return 'tablet';
  return 'desktop';
};

type DeviceKind = 'mobile' | 'tablet' | 'desktop';

const useDeviceKind = (kind: DeviceKind) => {
  const [deviceKind, setDeviceKind] = useState(getDeviceKind());
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      setDeviceKind(getDeviceKind());
    });
    observer.observe(window.document.body);
    return () => observer.disconnect();
  }, []);

  return deviceKind === kind;
};

export default useDeviceKind;
