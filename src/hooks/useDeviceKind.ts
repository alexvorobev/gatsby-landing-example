import { useState, useEffect } from "react";

import useHasMounted from "./useHasMounted";

type DeviceKind = "desktop" | "tablet" | "mobile";

const queries: {
  [key in DeviceKind]: { minWidth: number; maxWidth?: number; query?: string };
} = {
  desktop: { minWidth: 993 },
  tablet: { minWidth: 641, maxWidth: 992 },
  mobile: { minWidth: 0, maxWidth: 640 },
};

const checkDeviceKind = (kind: DeviceKind, width?: number) => {
  if (!width) {
    return kind === "desktop";
  }

  const { maxWidth } = queries[kind];
  const { minWidth } = queries[kind];

  if (typeof maxWidth === "undefined") {
    return width >= minWidth;
  }

  return width >= minWidth && width <= maxWidth;
};

/**
 * Returns the boolean value for the provided device if it matches to breakpoint
 * If a component is not mounted (for example, SSR) we will return false, exception 'desktop' device.
 * So if you have the condition for mobile/desktop on SSR will be returned desktop
 */
const useDeviceKind = (kind: DeviceKind) => {
  const initialValue = checkDeviceKind(kind, window?.innerWidth);
  const [isTruth, setIsTruth] = useState(initialValue);
  const hasMounted = useHasMounted();

  useEffect(() => {
    // initial check
    if (hasMounted) {
      setIsTruth(checkDeviceKind(kind, window?.innerWidth));
    }

    const handleResize = () => {
      setIsTruth(checkDeviceKind(kind, window?.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [hasMounted, kind, initialValue]);

  return isTruth && hasMounted;
};

export default useDeviceKind;
