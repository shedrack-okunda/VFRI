import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function ServicesManager() {
	const [items, setItems] = useState([]);
	const [form, setForm] = useState({
		num: "",
		title: "",
		desc: "",
		image: "",
	});

	const fetchItems = async () => {
		const { data } = await supabase.from("services").select("*");
		setItems(data || []);
	};

	useEffect(() => {
		fetchItems();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await supabase.from("services").insert(form);
		setForm({ num: "", title: "", desc: "", image: "" });
		fetchItems();
	};

	return (
		<section>
			<div className="flex items-center justify-between mb-10">
				<div>
					<p className="section-label mb-3">CMS</p>
					<h1 className="section-title text-4xl">Services</h1>
				</div>
			</div>

			<div className="grid lg:grid-cols-[420px_1fr] gap-8">
				<form
					onSubmit={handleSubmit}
					className="bg-white p-6 flex flex-col gap-4">
					<input
						name="num"
						value={form.num}
						onChange={(e) =>
							setForm({ ...form, num: e.target.value })
						}
						placeholder="01"
						className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              focus:outline-none focus:border-gold"
					/>
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
					<textarea
						name="desc"
						value={form.desc}
						onChange={(e) =>
							setForm({ ...form, desc: e.target.value })
						}
						placeholder="Description"
						className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              resize-none focus:outline-none focus:border-gold"
						rows={4}
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
					<button className="btn-primary">Add Service</button>
				</form>

				<div className="grid gap-5">
					{items.map((s) => (
						<div key={s.id} className="card p-6 bg-white">
							<h3>
								{s.num}. {s.title}
							</h3>
							<p className="text-sm">{s.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
