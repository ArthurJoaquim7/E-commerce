import { useState } from "react";
import AppContext from "./AppContext";
import propTypes from 'prop-types';

export const Provider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const value = {
    cartItems,
    setCartItems,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;