import { vms } from "../../data/content";
import { useReveal } from "../../hooks/useReveal";

export default function About() {
	const leftRef = useReveal();
	const rightRef = useReveal();

	return (
		<section
			id="about"
			className="py-24 px-8 md:px-16 lg:px-20 bg-cream grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
			<div ref={leftRef} className="reveal">
				<span className="section-label mb-4 block">Who We Are</span>

				<h2 className="section-title text-4xl md:text-5xl mb-6">
					A Pan-African Voice
					<br />
					in Global Knowledge
				</h2>

				<p className="text-ink-light text-sm leading-[1.9] mb-8">
					Victoria Falls Regional Institute is an independent academic
					and research institute founded to localise the power of
					knowledge in International Law, International Relations,
					Peace & Security, Governance, Development, and Humanitarian
					Affairs.
				</p>

				{/* IMAGE */}
				<div className="relative overflow-hidden rounded-2xl mb-8 group">
					<img
						src="/images/about/about.avif"
						alt="VFRI team discussion"
						className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-105"
					/>

					{/* Optional overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
				</div>

				{/* Challenge quote */}
				<div className="bg-crimson-deep border-l-4 border-gold px-6 py-5 rounded-r-sm">
					<p className="font-display text-lg italic text-white/80 leading-relaxed">
						"Discussions, policy formulations, and conferences about
						Africa tend to be held without Africa. Those who possess
						African wisdom, knowledge and experiences are often
						denied access to such platforms — due to visa
						restrictions, financial barriers, and systemic
						exclusion."
					</p>
				</div>
			</div>
			<div ref={rightRef} className="reveal flex flex-col gap-5">
				{vms.map(({ label, title, body }) => (
					<div
						key={label}
						className="card relative overflow-hidden p-6">
						<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-crimson-mid" />
						<p className="text-gold text-[0.75rem] tracking-[0.2em] uppercase mb-1.5">
							{label}
						</p>
						<h3 className="font-display text-xl text-crimson-deep mb-2">
							{title}
						</h3>
						<p className="text-ink-light text-sm leading-relaxed">
							{body}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
