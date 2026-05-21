import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function TeamManager() {
	const [team, setTeam] = useState([]);
	const [loading, setLoading] = useState(true);

	const [form, setForm] = useState({
		name: "",
		role: "",
		bio: "",
		image: "",
	});

	const fetchTeam = async () => {
		const { data } = await supabase
			.from("team")
			.select("*")
			.order("created_at", { ascending: false });

		setTeam(data || []);
		setLoading(false);
	};

	useEffect(() => {
		fetchTeam();
	}, []);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await supabase.from("team").insert(form);
		setForm({ name: "", role: "", bio: "", image: "" });
		fetchTeam();
	};

	const handleDelete = async (id) => {
		await supabase.from("team").delete().eq("id", id);
		fetchTeam();
	};

	return (
		<section>
			<div className="flex items-center justify-between mb-10">
				<div>
					<p className="section-label mb-3">CMS</p>

					<h1 className="section-title text-4xl">Team</h1>
				</div>
			</div>

			<div className="grid lg:grid-cols-[420px_1fr] gap-8 items-start">
				<form
					onSubmit={handleSubmit}
					className="bg-white p-6 rounded-sm flex flex-col gap-4">
					<input
						name="name"
						value={form.name}
						onChange={handleChange}
						placeholder="Name"
						className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              focus:outline-none focus:border-gold"
						required
					/>
					<input
						name="role"
						value={form.role}
						onChange={handleChange}
						placeholder="Role"
						className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              focus:outline-none focus:border-gold"
						required
					/>
					<input
						name="image"
						value={form.image}
						onChange={handleChange}
						placeholder="Image URL"
						className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              focus:outline-none focus:border-gold"
						required
					/>
					<textarea
						name="bio"
						value={form.bio}
						onChange={handleChange}
						placeholder="Bio"
						className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              resize-none focus:outline-none focus:border-gold"
						rows={5}
						required
					/>
					<button className="btn-primary w-full">Add Member</button>
				</form>

				<div className="grid gap-5">
					{loading ? (
						<p>Loading...</p>
					) : (
						team.map((t) => (
							<div key={t.id} className="card p-6 bg-white">
								<div className="flex justify-between">
									<div>
										<h3 className="font-bold">{t.name}</h3>
										<p className="text-sm">{t.role}</p>
									</div>
									<button
										onClick={() => handleDelete(t.id)}
										className="text-red-600 text-xs">
										Delete
									</button>
								</div>
								<p className="text-sm mt-3">{t.bio}</p>
							</div>
						))
					)}
				</div>
			</div>
		</section>
	);
}
