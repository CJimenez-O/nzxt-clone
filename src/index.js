import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/sidebarContext";
import { MailProvider } from "./context/mailContext";

ReactDOM.render(
	<ProductsProvider>
		<MailProvider>
			<App />
		</MailProvider>
	</ProductsProvider>,
	document.getElementById("root")
);
