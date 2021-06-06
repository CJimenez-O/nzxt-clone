function MailReducer(state, action) {
	if (action.type === "SIDEBAR_OPEN") {
		// console.log(action);
		return { ...state, isSidebarOpen: true };
	}
	if (action.type === "SIDEBAR_CLOSE") {
		return { ...state, isSidebarOpen: false };
	}

	throw new Error(`No Matching "${action.type}" - action type`);
}

export default MailReducer;
