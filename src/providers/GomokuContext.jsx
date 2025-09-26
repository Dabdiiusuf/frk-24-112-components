import { createContext, useState } from "react";

const GomokuContext = createContext(null);

const GomokuContextProvider = ({ children }) => {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  return (
    <GomokuContext.Provider
      value={{
        playerOne,
        playerTwo,
        setPlayerOne,
        setPlayerTwo,
      }}
    >
      {children}
    </GomokuContext.Provider>
  );
};

export { GomokuContext, GomokuContextProvider };
