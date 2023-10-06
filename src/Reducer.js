import React, { createContext, useReducer, useContext } from 'react';

const GlobalStateContext = createContext();

const initialState = {
    cart: [],
    products: [],
    product: null,
    selectedCategory: "",
};

const globalReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.payload] };
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter(product => product.id !== action.payload) };
        case 'SET_SELECTED_CATEGORY':
            return { ...state, selectedCategory: action.payload };
        case 'SET_PRODUCTS': 
            return { ...state, products: action.payload };
        case 'SET_PRODUCT': 
            return { ...state, product: action.payload };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
        {children}
    </GlobalStateContext.Provider>
    );
};

const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (context === undefined) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};

export { GlobalStateProvider, useGlobalState };