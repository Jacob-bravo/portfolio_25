
import React, { createContext, useState, useContext } from 'react';

export const IndexContext = createContext();


export const IndexProvider = ({ children }) => {
  const [globalIndex, setGlobalIndex] = useState(0);

  const updateIndex = (newIndex) => {
    setGlobalIndex(newIndex);
  };

  const incrementIndex = () => {
    setGlobalIndex(prevIndex => prevIndex + 1);
  };

  const decrementIndex = () => {
    setGlobalIndex(prevIndex => prevIndex - 1);
  };

  return (
    <IndexContext.Provider value={{ globalIndex, updateIndex, incrementIndex, decrementIndex }}>
      {children}
    </IndexContext.Provider>
  );
};

export const useIndex = () => {
  const context = useContext(IndexContext);
  if (context === undefined) {
    throw new Error('useIndex must be used within an IndexProvider');
  }
  return context;
};