import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/sidebarReducer";
import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	COMPANY_OPEN,
	COMPANY_CLOSE,
} from "../actions";

// Makes actions global

const initialState = {
	isSidebarOpen: false,
	isCompanyLinkOpen: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};
	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};

	const openCompanyLinks = () => {
		dispatch({ type: COMPANY_OPEN });
	};
	const closeCompanyLinks = () => {
		dispatch({ type: COMPANY_CLOSE });
	};

	return (
		<ProductsContext.Provider
			value={{
				...state,
				openSidebar,
				closeSidebar,
				openCompanyLinks,
				closeCompanyLinks,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};
// make sure use
export const useProductsContext = () => {
	return useContext(ProductsContext);
};
