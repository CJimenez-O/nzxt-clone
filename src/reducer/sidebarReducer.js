import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";

function sidebarReducer(state, action) {
	if (action.type === "SIDEBAR_OPEN") {
		// console.log(action);
		return { ...state, isSidebarOpen: true };
	}
	if (action.type === "SIDEBAR_CLOSE") {
		return { ...state, isSidebarOpen: false };
	}

	if (action.type === "PREBUILT_OPEN") {
		return { ...state, isPrebuiltOpen: true };
	}
	if (action.type === "PREBUILT_CLOSE") {
		return { ...state, isPrebuiltOpen: false };
	}

	if (action.type === "BUILTMENU_OPEN") {
		return { ...state, isBuiltMenuOpen: true };
	}
	if (action.type === "BUILTMENU_CLOSE") {
		return { ...state, isBuiltMenuOpen: false };
	}

	if (action.type === "COMPANY_OPEN") {
		// console.log(action);
		return { ...state, isCompanyLinkOpen: true };
	}
	if (action.type === "COMPANY_CLOSE") {
		return { ...state, isCompanyLinkOpen: false };
	}

	if (action.type === "ABOUT_OPEN") {
		return { ...state, isAboutOpen: true };
	}
	if (action.type === "ABOUT_CLOSE") {
		return { ...state, isAboutOpen: false };
	}

	if (action.type === "COMMUNITY_OPEN") {
		return { ...state, isCommunityOpen: true };
	}
	if (action.type === "COMMUNITY_CLOSE") {
		return { ...state, isCommunityOpen: false };
	}

	if (action.type === "SOFTWARE_OPEN") {
		return { ...state, isSoftwareOpen: true };
	}
	if (action.type === "SOFTWARE_CLOSE") {
		return { ...state, isSoftwareOpen: false };
	}

	if (action.type === "ACCOUNT_OPEN") {
		return { ...state, isAccountOpen: true };
	}
	if (action.type === "ACCOUNT_CLOSE") {
		return { ...state, isAccountOpen: false };
	}

	if (action.type === "STORE_OPEN") {
		return { ...state, isStoreOpen: true };
	}
	if (action.type === "STORE_CLOSE") {
		return { ...state, isStoreOpen: false };
	}

	throw new Error(`No Matching "${action.type}" - action type`);
}

export default sidebarReducer;
