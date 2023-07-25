import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./utils/i18next.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
