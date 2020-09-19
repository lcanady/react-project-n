import React, { createContext, useState } from "react";

export const Context = createContext();
export default ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialState = {
    loggedIn,
    setLoggedIn,
    loading,
    setLoading,
  };

  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
