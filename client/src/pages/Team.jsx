import { useReveal } from "../hooks/useReveal";
import { TEAM } from "../data/content";

export default function Team() {
	const headRef = useReveal();
	const gridRef = useReveal();

	return (
		<section
			id="team"
			className="py-24 px-8 md:px-16 lg:px-20 bg-crimson-deep relative">
			{/* Kente bottom */}
			<div className="absolute bottom-0 left-0 right-0 h-1.5 kente-bar" />

			<div ref={headRef} className="reveal mb-12">
				<span
					className="section-label mb-4 block"
					style={{ color: "#c8a84b" }}>
					Leadership
				</span>
				<h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight">
					Our Team
				</h2>
			</div>

			<div ref={gridRef} className="reveal grid md:grid-cols-2 gap-6">
				{TEAM.map(({ name, role, bio, image }) => (
					<div
						key={name}
						className="flex flex-col md:flex-row gap-6 bg-white/5 border border-gold/15 rounded-sm p-6 transition-all duration-200 hover:bg-white/8">
						{" "}
						{/* Photo placeholder */}
						<div className="w-full md:w-40 h-40 md:h-auto flex-shrink-0 border border-gold/30 rounded-sm bg-gold/8 overflow-hidden">
							{" "}
							<img
								src={image}
								loading="lazy"
								className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
							/>
						</div>
						<div>
							<p className="text-gold text-[0.65rem] tracking-[0.18em] uppercase mb-1">
								{role}
							</p>
							<h3 className="font-display text-2xl text-white mb-3">
								{name}
							</h3>
							<p className="text-white/55 text-sm leading-relaxed">
								{bio}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
