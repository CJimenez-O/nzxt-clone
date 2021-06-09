function cartReducer(state, action) {
	if (action.type === "CART_OPEN") {
		// console.log(action);
		return { ...state, isCartOpen: true };
	}
	if (action.type === "CART_CLOSE") {
		return { ...state, isCartOpen: false };
	}

	throw new Error(`No Matching "${action.type}" - action type`);
}

export default cartReducer;
