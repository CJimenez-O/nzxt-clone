import React, { useContext, useReducer } from "react";
import reducer from "../reducer/sidebarReducer";
import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	PREBUILT_OPEN,
	PREBUILT_CLOSE,
	PREBUILT_SIDEBAR_OPEN,
	PREBUILT_SIDEBAR_CLOSE,
	BUILTMENU_OPEN,
	BUILTMENU_CLOSE,
	BUILTMENU_SIDEBAR_OPEN,
	BUILTMENU_SIDEBAR_CLOSE,
	CASE_SIDEBAR_OPEN,
	CASE_SIDEBAR_CLOSE,
	COOLING_SIDEBAR_OPEN,
	COOLING_SIDEBAR_CLOSE,
	COMP_SIDEBAR_OPEN,
	COMP_SIDEBAR_CLOSE,
	PERIFMENU_OPEN,
	PERIFMENU_CLOSE,
	PERIF_SIDEBAR_OPEN,
	PERIF_SIDEBAR_CLOSE,
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
	isPrebuiltSideBarMenuOpen: false,
	isBuiltMenuOpen: false,
	isBuiltSideBarMenuOpen: false,
	isCaseMenuOpen: false,
	isCoolingMenuOpen: false,
	isCompMenuOpen: false,
	isPerifMenuOpen: false,
	isPerifSidebarMenuOpen: false,
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
		dispatch({ type: SIDEBAR_CLOSE });
		dispatch({ type: PREBUILT_SIDEBAR_CLOSE });
		dispatch({ type: PERIF_SIDEBAR_CLOSE });
		dispatch({ type: BUILTMENU_SIDEBAR_CLOSE });
		dispatch({ type: CASE_SIDEBAR_CLOSE });
		dispatch({ type: COOLING_SIDEBAR_CLOSE });
		dispatch({ type: COMP_SIDEBAR_CLOSE });
	};

	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
		dispatch({ type: PREBUILT_SIDEBAR_CLOSE });
		dispatch({ type: PERIF_SIDEBAR_CLOSE });
		dispatch({ type: BUILTMENU_SIDEBAR_CLOSE });
		dispatch({ type: CASE_SIDEBAR_CLOSE });
		dispatch({ type: COOLING_SIDEBAR_CLOSE });
		dispatch({ type: COMP_SIDEBAR_CLOSE });
	};
	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
		dispatch({ type: PREBUILT_SIDEBAR_CLOSE });
		dispatch({ type: PERIF_SIDEBAR_CLOSE });
		dispatch({ type: BUILTMENU_SIDEBAR_CLOSE });
		dispatch({ type: CASE_SIDEBAR_CLOSE });
		dispatch({ type: COOLING_SIDEBAR_CLOSE });
		dispatch({ type: COMP_SIDEBAR_CLOSE });
	};

	const openPrebuilt = () => {
		dispatch({ type: PREBUILT_OPEN });
		dispatch({ type: BUILTMENU_CLOSE });
		dispatch({ type: PERIFMENU_CLOSE });
	};
	const closePrebuilt = () => {
		dispatch({ type: PREBUILT_CLOSE });
	};

	const openPrebuiltSidebar = () => {
		dispatch({ type: PREBUILT_SIDEBAR_OPEN });
	};
	const closePrebuiltSidebar = () => {
		dispatch({ type: PREBUILT_SIDEBAR_CLOSE });
	};

	const openBuiltMenu = () => {
		dispatch({ type: BUILTMENU_OPEN });
		dispatch({ type: PREBUILT_CLOSE });
		dispatch({ type: PERIFMENU_CLOSE });
	};
	const closeBuiltMenu = () => {
		dispatch({ type: BUILTMENU_CLOSE });
	};

	const openBuiltSidebar = () => {
		dispatch({ type: BUILTMENU_SIDEBAR_OPEN });
	};
	const closeBuiltSidebar = () => {
		dispatch({ type: BUILTMENU_SIDEBAR_CLOSE });
	};

	// pc builing sidebar menu fcuntions
	const openCaseMenu = () => {
		dispatch({ type: CASE_SIDEBAR_OPEN });
		dispatch({ type: COOLING_SIDEBAR_CLOSE });
		dispatch({ type: COMP_SIDEBAR_CLOSE });
	};
	const closeCaseMenu = () => {
		dispatch({ type: CASE_SIDEBAR_CLOSE });
	};

	const openCoolingMenu = () => {
		dispatch({ type: COOLING_SIDEBAR_OPEN });
		dispatch({ type: CASE_SIDEBAR_CLOSE });
		dispatch({ type: COMP_SIDEBAR_CLOSE });
	};
	const closeCoolingMenu = () => {
		dispatch({ type: COOLING_SIDEBAR_CLOSE });
	};

	const openCompMenu = () => {
		dispatch({ type: COMP_SIDEBAR_OPEN });
		dispatch({ type: COOLING_SIDEBAR_CLOSE });
		dispatch({ type: CASE_SIDEBAR_CLOSE });
	};
	const closeCompMenu = () => {
		dispatch({ type: COMP_SIDEBAR_CLOSE });
	};

	//

	const openPerifMenu = () => {
		dispatch({ type: PERIFMENU_OPEN });
		dispatch({ type: PREBUILT_CLOSE });
		dispatch({ type: BUILTMENU_CLOSE });
	};
	const closePerifMenu = () => {
		dispatch({ type: PERIFMENU_CLOSE });
	};

	const openPerifSidebarMenu = () => {
		dispatch({ type: PERIF_SIDEBAR_OPEN });
	};
	const closePerifSidebarMenu = () => {
		dispatch({ type: PERIF_SIDEBAR_CLOSE });
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
				openPrebuiltSidebar,
				closePrebuiltSidebar,
				openBuiltMenu,
				closeBuiltMenu,
				openBuiltSidebar,
				closeBuiltSidebar,
				openCaseMenu,
				closeCaseMenu,
				openCoolingMenu,
				closeCoolingMenu,
				openCompMenu,
				closeCompMenu,
				openPerifMenu,
				closePerifMenu,
				openPerifSidebarMenu,
				closePerifSidebarMenu,
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
