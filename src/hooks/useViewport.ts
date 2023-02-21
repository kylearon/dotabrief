
//https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/

import React from "react";

// function useFetch<T = unknown>(url?: string, options?: RequestInit): State<T> {
export function useViewport() {
    const [viewportWidth, setViewportWidth] = React.useState(window.innerWidth);
  
    React.useEffect(() => {
      const handleWindowResize = () => setViewportWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    // Return the width so we can use it in our components
    return { viewportWidth };
  }