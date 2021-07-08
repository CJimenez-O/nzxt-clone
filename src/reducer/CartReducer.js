function cartReducer(state, action) {
	if (action.type === "COLOR_WHITE") {
		// console.log(action);
		return { ...state, color: "White" };
	}
	if (action.type === "COLOR_BLACK") {
		return { ...state, color: "Black" };
	}

	if (action.type === "CART_OPEN") {
		// console.log(action);
		return { ...state, isCartOpen: true };
	}
	if (action.type === "CART_CLOSE") {
		return { ...state, isCartOpen: false };
	}

	if (action.type === "ADD_TO_CART") {
		const { cartImage, name, price, color, id, amount, stock } = action.payload;

		console.log("name:" + name);
		console.log("id:" + id);
		console.log("amount:" + amount);
		console.log("image:" + cartImage);
		console.log("price:" + price);

		const tempItem = state.cart.find((i) => i.id === id);
		if (tempItem) {
			const tempCart = state.cart.map((cartItem) => {
				if (cartItem.id === id) {
					let newAmount = cartItem.amount + amount;
					if (newAmount > cartItem.max) {
						newAmount = cartItem.max;
					}
					return { ...cartItem, amount: newAmount };
				} else {
					return cartItem;
				}
			});

			return { ...state, cart: tempCart };
		} else {
			const newItem = {
				id: id,
				name: name,
				color: "white",
				amount: 1,
				image: cartImage,
				price: price,
				max: stock,
			};
			return { ...state, cart: [...state.cart, newItem] };
		}
	}

	if (action.type === "REMOVE_CART_ITEM") {
		const tempCart = state.cart.filter((item) => item.id !== action.payload);

		return { ...state, cart: tempCart };
	}

	if (action.type === "CLEAR_CART") {
		return { ...state, cart: [] };
	}

	if (action.type === "TOGGLE_CART_ITEM_AMOUNT") {
		const { id, value } = action.payload;
		const tempCart = state.cart.map((item) => {
			if (item.id === id) {
				if (value === "inc") {
					let newAmount = item.amount + 1;
					if (newAmount > item.max) {
						newAmount = item.max;
					}
					return { ...item, amount: newAmount };
				}
				if (value === "dec") {
					let newAmount = item.amount - 1;
					if (newAmount < 1) {
						newAmount = 1;
					}
					return { ...item, amount: newAmount };
				}
			}
			return item;
		});

		return { ...state, cart: tempCart };
	}

	if (action.type === "COUNT_CART_TOTALS") {
		const { total_items, total_amount } = state.cart.reduce(
			(total, cartItem) => {
				const { amount, price } = cartItem;

				total.total_items += amount;
				total.total_amount += price * amount;
				return total;
			},
			{
				total_items: 0,
				total_amount: 0,
			}
		);
		return { ...state, total_items, total_amount };
	}

	throw new Error(`No Matching "${action.type}" - action type`);
}

export default cartReducer;
