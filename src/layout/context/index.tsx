import React, { createContext, useEffect, useState } from "react";

interface IMenuContextProps {
  isMobile: boolean;
  isCollapsed: boolean;
  setIsCollapsed(status: boolean): void;
}

interface IMenuProviderProps {
  children?: React.ReactNode;
}

export const MenuContext = createContext({} as IMenuContextProps);

export const MenuProvider: React.FC<IMenuProviderProps> = ({
  children,
}: IMenuProviderProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 1024);
    });
  }, []);

  return (
    <MenuContext.Provider value={{ isMobile, isCollapsed, setIsCollapsed }}>
      {children}
    </MenuContext.Provider>
  );
};
