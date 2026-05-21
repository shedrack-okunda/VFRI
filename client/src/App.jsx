import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import News from "./pages/News";
import Team from "./pages/Team";
import Achievements from "./pages/Achievements";
import Login from "./admin/Login";
import ProtectedRoute from "./admin/ProtectedRoute";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import ProgramsManager from "./admin/managers/ProgramManager";
import NewsManager from "./admin/managers/NewsManager";
import TeamManager from "./admin/managers/TeamManager";
import AchievementsManager from "./admin/managers/AchievementsManager";
import ServicesManager from "./admin/managers/ServicesManager";
import FocusManager from "./admin/managers/FocusManager";

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

			{/* Admin */}
			<Route path="/admin/login" element={<Login />} />

			{/* Protected Admin Routes */}
			<Route element={<ProtectedRoute />}>
				<Route element={<AdminLayout />}>
					<Route path="/admin/dashboard" element={<Dashboard />} />
					<Route
						path="/admin/programs"
						element={<ProgramsManager />}
					/>
					<Route path="/admin/news" element={<NewsManager />} />
					<Route path="/admin/team" element={<TeamManager />} />
					<Route
						path="/admin/achievements"
						element={<AchievementsManager />}
					/>
					<Route
						path="/admin/services"
						element={<ServicesManager />}
					/>
					<Route path="/admin/focus" element={<FocusManager />} />
				</Route>
			</Route>
		</Routes>
	);
}
