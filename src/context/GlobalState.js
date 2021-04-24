import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    transactions: [
        { amount: 100, desc: 'Cash' },
        { amount: +40, desc: 'Book' },
        { amount: -200, desc: 'Camera' }
    ]
}

//global context
export const GlobalContext = createContext(initialState);

//provider for global context
export const GlobalProvider = ({ items }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={
            {
            transactions: StaticRange.transactions
        }
    }>
        {items}
    </GlobalContext.Provider>
    );
}
