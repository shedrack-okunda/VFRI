import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Login() {
	const navigate = useNavigate();

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		setError("");

		const { error } = await supabase.auth.signInWithPassword({
			email: form.email,
			password: form.password,
		});

		setLoading(false);

		if (error) {
			setError(error.message);
			return;
		}

		navigate("/admin/dashboard");
	};

	return (
		<section className="min-h-screen bg-green-deep flex items-center justify-center px-6">
			<div className="w-full max-w-md bg-white/5 border border-gold/20 rounded-sm p-8">
				<div className="mb-8 text-center">
					<p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">
						VFRI Admin
					</p>

					<h1 className="font-display text-4xl text-white font-light">
						Secure Login
					</h1>
				</div>

				<form onSubmit={handleSubmit} className="flex flex-col gap-5">
					<div>
						<label className="block text-white/50 text-[0.65rem] tracking-widest uppercase mb-2">
							Email Address
						</label>

						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							required
							className="w-full bg-white/6 border border-white/15 rounded-sm px-4 py-3
              text-white text-sm placeholder:text-white/25
              focus:outline-none focus:border-gold"
						/>
					</div>

					<div>
						<label className="block text-white/50 text-[0.65rem] tracking-widest uppercase mb-2">
							Password
						</label>

						<input
							type="password"
							name="password"
							value={form.password}
							onChange={handleChange}
							required
							className="w-full bg-white/6 border border-white/15 rounded-sm px-4 py-3
              text-white text-sm placeholder:text-white/25
              focus:outline-none focus:border-gold"
						/>
					</div>

					{error && (
						<div className="bg-rust/20 border border-rust text-white text-sm px-4 py-3 rounded-sm">
							{error}
						</div>
					)}

					<button
						type="submit"
						disabled={loading}
						className="btn-primary w-full">
						{loading ? "Signing In..." : "Login"}
					</button>
				</form>
			</div>
		</section>
	);
}
