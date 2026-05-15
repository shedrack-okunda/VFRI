import { useReveal } from "../hooks/useReveal";
import { PROGRAMS } from "../data/content";

export default function Programs() {
	const headRef = useReveal();
	const gridRef = useReveal();

	return (
		<section
			id="programs"
			className="py-24 px-8 md:px-16 lg:px-20 bg-cream">
			<div
				ref={headRef}
				className="reveal grid md:grid-cols-2 gap-8 mb-14 items-end">
				<div>
					<span className="section-label mb-4 block">What We Do</span>
					<h2 className="section-title text-4xl md:text-5xl">
						Programs & Initiatives
					</h2>
				</div>

				<p className="text-ink-light text-sm leading-[1.85] self-end">
					Structured initiatives driving research, capacity building,
					and policy innovation across Africa.
				</p>
			</div>

			<div ref={gridRef} className="reveal grid md:grid-cols-3 gap-5">
				{PROGRAMS.map(({ title, category, description, status }) => (
					<div
						key={title}
						className="card p-6 relative overflow-hidden">
						<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-green-mid" />

						<p className="text-gold text-[0.65rem] uppercase tracking-[0.2em] mb-2">
							{category}
						</p>

						<h3 className="font-display text-xl text-green-deep mb-3">
							{title}
						</h3>

						<p className="text-ink-light text-xs leading-relaxed mb-4">
							{description}
						</p>

						<span className="text-[0.6rem] text-white bg-green-deep px-2 py-1 rounded-sm">
							{status}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
