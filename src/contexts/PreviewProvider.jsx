import { createContext, useContext, useState, useEffect } from "react";

const PreviewContext = createContext();

export const usePreview = () => {
  return useContext(PreviewContext);
};

export const PreviewProvider = ({ children }) => {
  const [isPreviewToggled, setIsPreviewToggled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PreviewContext.Provider
      value={{ isPreviewToggled, setIsPreviewToggled, isMobile }}
    >
      {children}
    </PreviewContext.Provider>
  );
};
