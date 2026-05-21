import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function FocusManager() {
	const [items, setItems] = useState([]);
	const [form, setForm] = useState({
		num: "",
		title: "",
		desc: "",
		image: "",
	});

	const fetchItems = async () => {
		const { data } = await supabase.from("focus").select("*");
		setItems(data || []);
	};

	useEffect(() => {
		fetchItems();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await supabase.from("focus").insert(form);
		setForm({ num: "", title: "", desc: "", image: "" });
		fetchItems();
	};

	return (
		<section>
			<div className="flex items-center justify-between mb-10">
				<div>
					<p className="section-label mb-3">CMS</p>
					<h1 className="section-title text-4xl">Focus Areas</h1>
				</div>
			</div>

			<div className="grid lg:grid-cols-[420px_1fr] gap-8">
				<form
					onSubmit={handleSubmit}
					className="bg-white p-6 flex flex-col gap-4">
					<input
						placeholder="01"
						value={form.num}
						onChange={(e) =>
							setForm({ ...form, num: e.target.value })
						}
						className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              focus:outline-none focus:border-gold"
					/>
					<input
						placeholder="Title"
						value={form.title}
						onChange={(e) =>
							setForm({ ...form, title: e.target.value })
						}
						className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              focus:outline-none focus:border-gold"
					/>
					<textarea
						placeholder="Description"
						value={form.desc}
						onChange={(e) =>
							setForm({ ...form, desc: e.target.value })
						}
						className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              resize-none focus:outline-none focus:border-gold"
						rows={4}
					/>
					<input
						placeholder="Image URL"
						value={form.image}
						onChange={(e) =>
							setForm({ ...form, image: e.target.value })
						}
						className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              focus:outline-none focus:border-gold"
					/>
					<button className="btn-primary">Add Focus Area</button>
				</form>

				<div className="grid gap-5">
					{items.map((f) => (
						<div key={f.id} className="card p-6 bg-white">
							<h3>
								{f.num}. {f.title}
							</h3>
							<p className="text-sm">{f.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
