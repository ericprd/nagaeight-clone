import { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalProvider(props) {
  const [isActive, setIsActive] = useState(false);
  const [isOnTop, setIsOnTop] = useState(true);

  const exportContext = {
    isActive,
    setIsActive,
    isOnTop,
    setIsOnTop,
  };

  return (
    <GlobalContext.Provider value={exportContext}>
      {props.children}
    </GlobalContext.Provider>
  );
}
