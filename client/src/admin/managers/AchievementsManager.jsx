import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AchievementsManager() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	const [form, setForm] = useState({
		title: "",
		desc: "",
		image: "",
	});

	const fetchItems = async () => {
		const { data } = await supabase.from("achievements").select("*");
		setItems(data || []);
		setLoading(false);
	};

	useEffect(() => {
		fetchItems();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await supabase.from("achievements").insert(form);
		setForm({ title: "", desc: "", image: "" });
		fetchItems();
	};

	const handleDelete = async (id) => {
		await supabase.from("achievements").delete().eq("id", id);
		fetchItems();
	};

	return (
		<section>
			<div className="flex items-center justify-between mb-10">
				<div>
					<p className="section-label mb-3">CMS</p>
					<h1 className="section-title text-4xl mb-10">
						Achievements
					</h1>
				</div>
			</div>

			<div className="grid lg:grid-cols-[420px_1fr] gap-8">
				<form
					onSubmit={handleSubmit}
					className="bg-white p-6 flex flex-col gap-4">
					<input
						name="title"
						value={form.title}
						onChange={(e) =>
							setForm({ ...form, title: e.target.value })
						}
						placeholder="Title"
						className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              focus:outline-none focus:border-gold"
					/>
					<input
						name="image"
						value={form.image}
						onChange={(e) =>
							setForm({ ...form, image: e.target.value })
						}
						placeholder="Image URL"
						className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              focus:outline-none focus:border-gold"
					/>
					<textarea
						name="desc"
						value={form.desc}
						onChange={(e) =>
							setForm({ ...form, desc: e.target.value })
						}
						placeholder="Description"
						className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              resize-none focus:outline-none focus:border-gold"
						rows={5}
					/>
					<button className="btn-primary">Add</button>
				</form>

				<div className="grid gap-5">
					{items.map((a) => (
						<div key={a.id} className="card p-6 bg-white">
							<div className="flex justify-between">
								<h3>{a.title}</h3>
								<button
									onClick={() => handleDelete(a.id)}
									className="text-red-600 text-xs">
									Delete
								</button>
							</div>
							<p className="text-sm mt-2">{a.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
