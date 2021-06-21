import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/sidebarReducer";
import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	PREBUILT_OPEN,
	PREBUILT_CLOSE,
	BUILTMENU_OPEN,
	BUILTMENU_CLOSE,
	PERIFMENU_OPEN,
	PERIFMENU_CLOSE,
	COMPANY_OPEN,
	COMPANY_CLOSE,
	ABOUT_OPEN,
	ABOUT_CLOSE,
	COMMUNITY_OPEN,
	COMMUNITY_CLOSE,
	SOFTWARE_OPEN,
	SOFTWARE_CLOSE,
	ACCOUNT_OPEN,
	ACCOUNT_CLOSE,
	STORE_OPEN,
	STORE_CLOSE,
} from "../actions";

// Makes actions global

const initialState = {
	isSidebarOpen: false,
	isPrebuiltOpen: false,
	isBuiltMenuOpen: false,
	isPerifMenuOpen: false,
	isCompanyLinkOpen: false,
	isAboutOpen: false,
	isCommunityOpen: false,
	isSoftwareOpen: false,
	isAccountOpen: false,
	isStoreOpen: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const resetNav = () => {
		dispatch({ type: BUILTMENU_CLOSE });
		dispatch({ type: PERIFMENU_CLOSE });
		dispatch({ type: PREBUILT_CLOSE });
	};

	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};
	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};

	const openPrebuilt = () => {
		dispatch({ type: PREBUILT_OPEN });
		dispatch({ type: BUILTMENU_CLOSE });
		dispatch({ type: PERIFMENU_CLOSE });
	};
	const closePrebuilt = () => {
		dispatch({ type: PREBUILT_CLOSE });
	};

	const openBuiltMenu = () => {
		dispatch({ type: BUILTMENU_OPEN });
		dispatch({ type: PREBUILT_CLOSE });
		dispatch({ type: PERIFMENU_CLOSE });
	};
	const closeBuiltMenu = () => {
		dispatch({ type: BUILTMENU_CLOSE });
	};

	const openPerifMenu = () => {
		dispatch({ type: PERIFMENU_OPEN });
		dispatch({ type: PREBUILT_CLOSE });
		dispatch({ type: BUILTMENU_CLOSE });
	};
	const closePerifMenu = () => {
		dispatch({ type: PERIFMENU_CLOSE });
	};

	const openCompanyLinks = () => {
		dispatch({ type: COMPANY_OPEN });
	};
	const closeCompanyLinks = () => {
		dispatch({ type: COMPANY_CLOSE });
	};

	const openAboutLinks = () => {
		dispatch({ type: ABOUT_OPEN });
	};
	const closeAboutLinks = () => {
		dispatch({ type: ABOUT_CLOSE });
	};

	const openCommunityLinks = () => {
		dispatch({ type: COMMUNITY_OPEN });
	};
	const closeCommunityLinks = () => {
		dispatch({ type: COMMUNITY_CLOSE });
	};

	const openSoftwareLinks = () => {
		dispatch({ type: SOFTWARE_OPEN });
	};
	const closeSoftwareLinks = () => {
		dispatch({ type: SOFTWARE_CLOSE });
	};

	const openAccountLinks = () => {
		dispatch({ type: ACCOUNT_OPEN });
	};
	const closeAccountLinks = () => {
		dispatch({ type: ACCOUNT_CLOSE });
	};

	const openStoreLinks = () => {
		dispatch({ type: STORE_OPEN });
	};
	const closeStoreLinks = () => {
		dispatch({ type: STORE_CLOSE });
	};

	return (
		<ProductsContext.Provider
			value={{
				...state,
				resetNav,
				openSidebar,
				closeSidebar,
				openPrebuilt,
				closePrebuilt,
				openBuiltMenu,
				closeBuiltMenu,
				openPerifMenu,
				closePerifMenu,
				openCompanyLinks,
				closeCompanyLinks,
				openAboutLinks,
				closeAboutLinks,
				openCommunityLinks,
				closeCommunityLinks,
				openSoftwareLinks,
				closeSoftwareLinks,
				openAccountLinks,
				closeAccountLinks,
				openStoreLinks,
				closeStoreLinks,
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
