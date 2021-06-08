import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/sidebarContext";
import { MailProvider } from "./context/mailContext";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";

ReactDOM.render(
	<Auth0Provider
		domain="dev-xa2droyq.us.auth0.com"
		clientId="cKsprSReAaTRTZK4Vy2ITYVoVCBnUxNI"
		redirectUri={window.location.origin}
		cacheLocation="localstorage"
	>
		<UserProvider>
			<ProductsProvider>
				<MailProvider>
					<App />
				</MailProvider>
			</ProductsProvider>
		</UserProvider>
	</Auth0Provider>,
	document.getElementById("root")
);
