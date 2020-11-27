/** @format */

import React, { createContext, useContext, useReducer } from "react";

//prepares the data layer(creating)
export const StateContext = createContext();

//wraping our app with data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information from data layer(using data layer)
export const useStateValue = () => useContext(StateContext);
