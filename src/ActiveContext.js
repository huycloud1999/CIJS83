import React, { createContext, useState } from 'react';

const ActiveContext = createContext();

const ActiveProvider = ({ children }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <ActiveContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </ActiveContext.Provider>
  );
};

export { ActiveContext, ActiveProvider };
