import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import News from "./pages/News";
import Team from "./pages/Team";
import Achievements from "./pages/Achievements";

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/programs" element={<Programs />} />
				<Route path="news" element={<News />} />
				<Route path="/team" element={<Team />} />
				<Route path="/achievements" element={<Achievements />} />
			</Route>
		</Routes>
	);
}
