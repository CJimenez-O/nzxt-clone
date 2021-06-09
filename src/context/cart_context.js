import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/CartReducer";
import { CART_OPEN, CART_CLOSE } from "../actions";

// Makes actions global

const initialState = {
	isCartOpen: false,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const openCart = () => {
		dispatch({ type: CART_OPEN });
	};
	const closeCart = () => {
		dispatch({ type: CART_CLOSE });
	};

	return (
		<CartContext.Provider
			value={{
				...state,
				openCart,
				closeCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
// make sure use
export const useCartContext = () => {
	return useContext(CartContext);
};
