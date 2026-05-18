import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/Home";

export default function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Layout>
						<Home />
					</Layout>
				}
			/>
		</Routes>
	);
}
