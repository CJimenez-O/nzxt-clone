import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/sidebarReducer";
import { MAIL_OPEN, MAIL_CLOSE } from "../actions";

// Makes actions global

const initialState = {
	isMailOpen: false,
};

const MailContext = React.createContext();

export const MailProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const openMail = () => {
		dispatch({ type: MAIL_OPEN });
	};
	const closeMail = () => {
		dispatch({ type: MAIL_CLOSE });
	};

	return (
		<MailContext.Provider
			value={{
				...state,
				openMail,
				closeMail,
			}}
		>
			{children}
		</MailContext.Provider>
	);
};
// make sure use
export const useMailContext = () => {
	return useContext(MailContext);
};
