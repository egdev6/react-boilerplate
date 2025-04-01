import { AppContextProvider } from "@hooks/use-app-context";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

const App = () => (
	<AppContextProvider>
		<RouterProvider router={routes} />
	</AppContextProvider>
);

export default App;
