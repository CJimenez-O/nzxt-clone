import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/CartReducer";
import {
	CART_OPEN,
	CART_CLOSE,
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	TOGGLE_CART_ITEM_AMOUNT,
	CLEAR_CART,
	COUNT_CART_TOTALS,
	COLOR_WHITE,
	COLOR_BLACK,
} from "../actions";

const getLocalStorage = () => {
	let cart = localStorage.getItem("cart");
	if (cart) {
		return JSON.parse(localStorage.getItem("cart"));
	} else {
		return [];
	}
};

// Makes actions global

const initialState = {
	isCartOpen: false,
	cart: getLocalStorage(),
	total_items: 0,
	total_amount: 0,
	shipping_fee: 534,
	whiteColor: false,
	blackColor: false,
	colorChosen: "",
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const whiteChosen = () => {
		dispatch({ type: COLOR_WHITE });
	};
	const blackChosen = () => {
		dispatch({ type: COLOR_BLACK });
	};

	const openCart = () => {
		dispatch({ type: CART_OPEN });
	};
	const closeCart = () => {
		dispatch({ type: CART_CLOSE });
	};

	// add to cart
	const addToCart = (cartImage, name, price, color, id, amount, stock) => {
		dispatch({
			type: ADD_TO_CART,
			payload: {
				cartImage,
				name,
				id,
				price,
				color,
				amount,
				stock,
			},
		});
		dispatch({ type: CART_OPEN });
	};
	// remove item
	const removeItem = (id) => {
		dispatch({ type: REMOVE_CART_ITEM, payload: id });
	};
	// toggle amount
	const toggleAmount = (id, value) => {
		console.log(id, value);
		dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
	};
	// clear cart
	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
	};

	useEffect(() => {
		dispatch({ type: COUNT_CART_TOTALS });
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}, [state.cart]);

	return (
		<CartContext.Provider
			value={{
				...state,
				openCart,
				closeCart,
				addToCart,
				removeItem,
				toggleAmount,
				clearCart,
				whiteChosen,
				blackChosen,
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
