export default function Dashboard() {
	return (
		<section>
			<div className="mb-10">
				<p className="section-label mb-4">Administration</p>

				<h1 className="section-title text-4xl md:text-5xl">
					Dashboard
				</h1>
			</div>

			<div className="grid md:grid-cols-3 gap-5">
				<div className="card p-6 bg-white">
					<p className="text-gold text-xs tracking-[0.18em] uppercase mb-2">
						Content
					</p>

					<h3 className="font-display text-3xl text-green-deep mb-1">
						Programs
					</h3>

					<p className="text-ink-light text-sm leading-relaxed">
						Manage institutional initiatives and strategic programs.
					</p>
				</div>

				<div className="card p-6 bg-white">
					<p className="text-gold text-xs tracking-[0.18em] uppercase mb-2">
						Publications
					</p>

					<h3 className="font-display text-3xl text-green-deep mb-1">
						News
					</h3>

					<p className="text-ink-light text-sm leading-relaxed">
						Publish updates, reports, announcements and articles.
					</p>
				</div>

				<div className="card p-6 bg-green-deep border-gold/20">
					<p className="text-gold text-xs tracking-[0.18em] uppercase mb-2">
						Communication
					</p>

					<h3 className="font-display text-3xl text-white mb-1">
						Messages
					</h3>

					<p className="text-white/55 text-sm leading-relaxed">
						View and manage contact form enquiries.
					</p>
				</div>
			</div>
		</section>
	);
}
