import { useEffect, useState } from "react";

export function useSmallScreen(breakpoint: number = 640): boolean {
  const [isSmall, setIsSmall] = useState(() => window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isSmall;
}
