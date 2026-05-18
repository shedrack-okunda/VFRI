import { useReveal } from "../../hooks/useReveal";
import { NEWS } from "../../data/content";

export default function News() {
	const headRef = useReveal();
	const gridRef = useReveal();

	return (
		<section id="news" className="py-24 px-8 md:px-16 lg:px-20 bg-white">
			<div
				ref={headRef}
				className="reveal grid md:grid-cols-2 gap-8 mb-14 items-end">
				<div>
					<span className="section-label mb-4 block">Updates</span>
					<h2 className="section-title text-4xl md:text-5xl">
						News & Publications
					</h2>
				</div>

				<p className="text-ink-light text-md leading-[1.85] self-end">
					Latest institutional updates, research outputs, and public
					engagement activities.
				</p>
			</div>

			<div ref={gridRef} className="reveal grid md:grid-cols-3 gap-5">
				{NEWS.map(({ title, date, summary, tag, image }) => (
					<div key={title} className="card p-6 group">
						{/* IMAGE */}
						<div className="h-40 w-full mb-4 overflow-hidden rounded-sm">
							<img
								src={image}
								alt={title}
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
						<div className="flex justify-between items-center mb-3">
							<span className="text-[0.7rem] text-gold uppercase tracking-[0.2em]">
								{tag}
							</span>
							<span className="text-[0.6rem] text-ink-light">
								{date}
							</span>
						</div>

						<h3 className="font-display text-lg text-green-deep mb-3 group-hover:text-gold transition-colors">
							{title}
						</h3>

						<p className="text-sm text-ink-light leading-relaxed">
							{summary}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
