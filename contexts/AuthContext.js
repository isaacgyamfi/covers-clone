import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [newUser, setNewUser] = useState({
    phoneNumber: '',
    pin: '',
  });

  return (
    <AuthContext.Provider value={{ newUser, setNewUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
