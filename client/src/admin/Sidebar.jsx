import { NavLink } from "react-router-dom";
import {
	FiFileText,
	FiLogOut,
	FiUsers,
	FiAward,
	FiGlobe,
	FiCompass,
	FiGrid,
} from "react-icons/fi";
import { supabase } from "../lib/supabase";

export default function Sidebar() {
	const logout = async () => {
		await supabase.auth.signOut();
		window.location.href = "/admin/login";
	};

	const linkClass = ({ isActive }) => `
    flex items-center gap-3 px-4 py-3 rounded-sm text-sm
    ${
		isActive
			? "bg-gold text-green-deep"
			: "text-white/70 hover:bg-white/5 hover:text-gold"
	}
  `;

	return (
		<aside className="w-[260px] bg-crimson-deep p-6 hidden lg:flex flex-col">
			<div className="mb-10">
				<h2 className="text-white text-2xl">Admin</h2>
			</div>

			<nav className="flex flex-col gap-2 flex-1">
				<NavLink to="/admin/dashboard" className={linkClass}>
					<FiGrid /> Dashboard
				</NavLink>

				<NavLink to="/admin/programs" className={linkClass}>
					<FiFileText /> Programs
				</NavLink>

				<NavLink to="/admin/news" className={linkClass}>
					<FiFileText /> News
				</NavLink>

				<NavLink to="/admin/team" className={linkClass}>
					<FiUsers /> Team
				</NavLink>

				<NavLink to="/admin/achievements" className={linkClass}>
					<FiAward /> Achievements
				</NavLink>

				<NavLink to="/admin/services" className={linkClass}>
					<FiGlobe /> Services
				</NavLink>

				<NavLink to="/admin/focus" className={linkClass}>
					<FiCompass /> Focus Areas
				</NavLink>
			</nav>

			<button onClick={logout} className="text-white/60 hover:text-gold">
				<FiLogOut /> Logout
			</button>
		</aside>
	);
}
