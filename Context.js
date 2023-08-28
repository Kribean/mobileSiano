import React, { createContext, useState } from 'react';

// Créez un contexte utilisateur
export const UserContext = createContext();

// Créez un composant fournisseur de contexte pour envelopper votre application
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Ajoutez les fonctions et les états liés au contexte ici

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
