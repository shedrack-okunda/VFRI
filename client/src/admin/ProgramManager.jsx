import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function ProgramsManager() {
	const [programs, setPrograms] = useState([]);
	const [loading, setLoading] = useState(true);

	const [form, setForm] = useState({
		title: "",
		category: "",
		description: "",
		status: "",
	});

	const fetchPrograms = async () => {
		const { data } = await supabase
			.from("programs")
			.select("*")
			.order("created_at", { ascending: false });

		setPrograms(data || []);
		setLoading(false);
	};

	useEffect(() => {
		fetchPrograms();
	}, []);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		await supabase.from("programs").insert(form);

		setForm({
			title: "",
			category: "",
			description: "",
			status: "",
		});

		fetchPrograms();
	};

	const handleDelete = async (id) => {
		await supabase.from("programs").delete().eq("id", id);

		fetchPrograms();
	};

	return (
		<section>
			{/* Header */}
			<div className="flex items-center justify-between mb-10">
				<div>
					<p className="section-label mb-3">CMS</p>

					<h1 className="section-title text-4xl">Programs</h1>
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
							Program Title
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

					{/* Category */}
					<div>
						<label className="block text-[0.65rem] tracking-widest uppercase text-ink-light mb-2">
							Category
						</label>

						<input
							type="text"
							name="category"
							value={form.category}
							onChange={handleChange}
							required
							placeholder="Research, Governance, Climate..."
							className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              focus:outline-none focus:border-gold"
						/>
					</div>

					{/* Status */}
					<div>
						<label className="block text-[0.65rem] tracking-widest uppercase text-ink-light mb-2">
							Status
						</label>

						<select
							name="status"
							value={form.status}
							onChange={handleChange}
							required
							className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              focus:outline-none focus:border-gold bg-white">
							<option value="">Select Status</option>
							<option value="Active">Active</option>
							<option value="Ongoing">Ongoing</option>
							<option value="Completed">Completed</option>
							<option value="Upcoming">Upcoming</option>
						</select>
					</div>

					{/* Description */}
					<div>
						<label className="block text-[0.65rem] tracking-widest uppercase text-ink-light mb-2">
							Description
						</label>

						<textarea
							rows={6}
							name="description"
							value={form.description}
							onChange={handleChange}
							required
							className="w-full border border-black/10 rounded-sm px-4 py-3 text-sm
              resize-none focus:outline-none focus:border-gold"
						/>
					</div>

					<button className="btn-primary w-full">
						Publish Program
					</button>
				</form>

				{/* Programs List */}
				<div className="grid gap-5">
					{loading ? (
						<p className="text-sm text-ink-light">
							Loading programs...
						</p>
					) : programs.length === 0 ? (
						<div className="card p-8 text-center">
							<p className="text-ink-light text-sm">
								No programs added yet.
							</p>
						</div>
					) : (
						programs.map((program) => (
							<div
								key={program.id}
								className="card p-6 bg-white relative overflow-hidden">
								{/* Accent */}
								<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-green-mid" />

								<div className="flex items-start justify-between gap-5 mb-4">
									<div>
										<div className="flex items-center gap-3 mb-2 flex-wrap">
											<span className="text-gold text-[0.65rem] tracking-[0.18em] uppercase">
												{program.category}
											</span>

											<span className="text-[0.65rem] uppercase tracking-widest px-2 py-1 rounded-full bg-green-deep/5 text-green-deep">
												{program.status}
											</span>
										</div>

										<h3 className="font-display text-2xl text-green-deep">
											{program.title}
										</h3>
									</div>

									<button
										onClick={() => handleDelete(program.id)}
										className="text-xs uppercase tracking-widest text-rust hover:text-red-700 transition-colors">
										Delete
									</button>
								</div>

								<p className="text-sm text-ink-light leading-relaxed">
									{program.description}
								</p>
							</div>
						))
					)}
				</div>
			</div>
		</section>
	);
}
