import { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalProvider(props) {
  const [isActive, setIsActive] = useState(false);

  const exportContext = {
    isActive,
    setIsActive,
  };

  return (
    <GlobalContext.Provider value={exportContext}>
      {props.children}
    </GlobalContext.Provider>
  );
}
