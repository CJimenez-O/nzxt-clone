import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// passes in user and logout state to app
const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
	const { loginWithRedirect, logout, user } = useAuth0();

	const [myUser, setMyUser] = useState(null);

	useEffect(() => {
		setMyUser(user);
	}, [user]);

	return (
		<UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
			{children}
		</UserContext.Provider>
	);
};
// make sure use
export const useUserContext = () => {
	return useContext(UserContext);
};
