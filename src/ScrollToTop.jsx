// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when location changes
  }, [location]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
