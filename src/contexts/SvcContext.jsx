import React, { createContext, useContext, useState } from 'react';

const SvcContext = createContext();

function SvcProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState();
  return (
    <SvcContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </SvcContext.Provider>
  );
}

function useSvcContext() {
  const context = useContext(SvcContext);
  if (context === undefined) {
    throw new Error('useSvcContext must be used within a SvcProvider');
  }
  return context;
}

export { SvcProvider, useSvcContext };
