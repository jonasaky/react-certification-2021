import React, { useContext, useReducer } from 'react';
import { globalReducer, initialState } from './globalReducer';

const GlobalContext = React.createContext(null);

function useGlobal() {
    const context = useContext(GlobalContext);
    if(!context)
        throw new Error(`Can't use "useGlobal" without GlobalProvider.`);
    return context;
}

function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { useGlobal };
export default GlobalProvider;