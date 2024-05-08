// [DiamondContext.jsx]
import React, { createContext, useState } from 'react';

const DiamondContext = createContext();

export const DiamondProvider = ({ children }) => {
  const [diamondState, setDiamondState] = useState({});

  const takeDiamond = (name) => {
    setDiamondState(prevState => ({
      ...prevState,
      [name]: { ...prevState[name], isTaked: true }
    }));
  };

  const dropDiamond = (name) => {
    setDiamondState(prevState => ({
      ...prevState,
      [name]: { ...prevState[name], isTaked: false }
    }));
  };

  return (
    <DiamondContext.Provider value={{ diamondState, takeDiamond, dropDiamond }}>
      {children}
    </DiamondContext.Provider>
  );
};

export default DiamondContext;
