"use client";
import { createContext, useContext, useState } from "react";

// Create the context
const LayoverGlobalContext = createContext();

// create a provider
export function LayoverGlobalProvider({ children }) {
  const [layoverObject, setLayoverObject] = useState(null);

  return (
    <LayoverGlobalContext.Provider
      value={{ layoverObject, setLayoverObject }}
    >
      {children}
    </LayoverGlobalContext.Provider>
  );
}

// create a cutome hook to access the context
export function useLayoverGlobal() {
  return useContext(LayoverGlobalContext);
}
