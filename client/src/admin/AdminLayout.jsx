import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AdminLayout() {
	return (
		<div className="min-h-screen bg-cream flex">
			<Sidebar />

			<main className="flex-1 p-8 md:p-10 overflow-y-auto">
				<Outlet />
			</main>
		</div>
	);
}
