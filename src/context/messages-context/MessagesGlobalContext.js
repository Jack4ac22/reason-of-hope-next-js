"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const MessagesGlobalContext = createContext();

// create a provider
export function MessagesGlobalProvider({ children }) {
  const [unreadMessages, setUnreadMessages] = useState(0);

  return (
    <MessagesGlobalContext.Provider
      value={{ unreadMessages, setUnreadMessages }}
    >
      {children}
    </MessagesGlobalContext.Provider>
  );
}

// create a cutome hook to access the context
export function useMessagesGlobal() {
  return useContext(MessagesGlobalContext);
}
