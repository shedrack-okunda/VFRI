import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function ProtectedRoute() {
	const [loading, setLoading] = useState(true);
	const [authorized, setAuthorized] = useState(false);

	useEffect(() => {
		checkAdmin();
	}, []);

	const checkAdmin = async () => {
		const {
			data: { user },
		} = await supabase.auth.getUser();

		// not logged in
		if (!user) {
			setAuthorized(false);
			setLoading(false);
			return;
		}

		// ONLY YOUR ADMIN EMAIL
		const allowedAdmin = "okundashedrack@gmail.com";

		if (user.email === allowedAdmin) {
			setAuthorized(true);
		} else {
			await supabase.auth.signOut();
			setAuthorized(false);
		}

		setLoading(false);
	};

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				Loading...
			</div>
		);
	}

	return authorized ? <Outlet /> : <Navigate to="/admin/login" />;
}
