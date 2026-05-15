import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function NewsManager() {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);

	const [form, setForm] = useState({
		title: "",
		tag: "",
		summary: "",
		date: "",
	});

	const fetchNews = async () => {
		const { data } = await supabase
			.from("news")
			.select("*")
			.order("created_at", { ascending: false });

		setNews(data || []);
		setLoading(false);
	};

	useEffect(() => {
		fetchNews();
	}, []);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		await supabase.from("news").insert(form);

		setForm({
			title: "",
			tag: "",
			summary: "",
			date: "",
		});

		fetchNews();
	};

	const handleDelete = async (id) => {
		await supabase.from("news").delete().eq("id", id);

		fetchNews();
	};

	return (
		<section>
			{/* Header */}
			<div className="flex items-center justify-between mb-10">
				<div>
					<p className="section-label mb-3">CMS</p>

					<h1 className="section-title text-4xl">
						News & Publications
					</h1>
				</div>
			</div>

			<div className="grid lg:grid-cols-[420px_1fr] gap-8 items-start">
				{/* Form */}
				<form
					onSubmit={handleSubmit}
					className="bg-white border border-black/[0.06] rounded-sm p-6 flex flex-col gap-4 sticky top-6">
					{/* Title */}
					<div>
						<label className="block text-[0.65rem] tracking-widest uppercase text-ink-light mb-2">
							News Title
						</label>

						<input
							type="text"
							name="title"
							value={form.title}
							onChange={handleChange}
							required
							className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              focus:outline-none focus:border-gold"
						/>
					</div>

					{/* Tag */}
					<div>
						<label className="block text-[0.65rem] tracking-widest uppercase text-ink-light mb-2">
							Tag
						</label>

						<input
							type="text"
							name="tag"
							value={form.tag}
							onChange={handleChange}
							placeholder="Publication, Event, Announcement..."
							required
							className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              focus:outline-none focus:border-gold"
						/>
					</div>

					{/* Date */}
					<div>
						<label className="block text-[0.65rem] tracking-widest uppercase text-ink-light mb-2">
							Date
						</label>

						<input
							type="text"
							name="date"
							value={form.date}
							onChange={handleChange}
							placeholder="March 2026"
							required
							className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              focus:outline-none focus:border-gold"
						/>
					</div>

					{/* Summary */}
					<div>
						<label className="block text-[0.65rem] tracking-widest uppercase text-ink-light mb-2">
							Summary
						</label>

						<textarea
							rows={6}
							name="summary"
							value={form.summary}
							onChange={handleChange}
							required
							className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              resize-none focus:outline-none focus:border-gold"
						/>
					</div>

					<button className="btn-primary w-full">Publish News</button>
				</form>

				{/* Content */}
				<div className="grid gap-5">
					{loading ? (
						<p className="text-sm text-ink-light">Loading...</p>
					) : (
						news.map((item) => (
							<div key={item.id} className="card p-6 bg-white">
								<div className="flex items-start justify-between gap-4 mb-4">
									<div>
										<div className="flex items-center gap-3 mb-2">
											<span className="text-gold text-[0.65rem] uppercase tracking-[0.18em]">
												{item.tag}
											</span>

											<span className="text-[0.7rem] text-ink-light">
												{item.date}
											</span>
										</div>

										<h3 className="font-display text-2xl text-green-deep">
											{item.title}
										</h3>
									</div>

									<button
										onClick={() => handleDelete(item.id)}
										className="text-xs uppercase tracking-widest text-rust hover:text-red-700 transition-colors">
										Delete
									</button>
								</div>

								<p className="text-sm text-ink-light leading-relaxed">
									{item.summary}
								</p>
							</div>
						))
					)}
				</div>
			</div>
		</section>
	);
}
