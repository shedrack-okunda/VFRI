import { NavLink } from "react-router-dom";

export default function Dashboard() {
	return (
		<section>
			{/* Header */}
			<div className="mb-10">
				<p className="section-label mb-4">Administration</p>

				<h1 className="section-title text-4xl md:text-5xl">
					Dashboard
				</h1>

				<p className="text-ink-light text-sm mt-2 max-w-2xl">
					Manage all institutional content, publications, programs,
					research outputs, and organisational information from one
					control center.
				</p>
			</div>

			{/* GRID */}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* CONTENT */}
				<div className="card p-6 bg-white">
					<p className="text-gold text-xs tracking-[0.18em] uppercase mb-2">
						Content
					</p>

					<h3 className="font-display text-3xl text-crimson-deep mb-3">
						Programs
					</h3>

					<p className="text-ink-light text-sm mb-5">
						Manage research programs, capacity building initiatives,
						and institutional projects.
					</p>

					<NavLink
						to="/admin/programs"
						className="text-sm text-gold hover:underline">
						Manage Programs →
					</NavLink>
				</div>

				<div className="card p-6 bg-white">
					<p className="text-gold text-xs tracking-[0.18em] uppercase mb-2">
						Publications
					</p>

					<h3 className="font-display text-3xl text-crimson-deep mb-3">
						News
					</h3>

					<p className="text-ink-light text-sm mb-5">
						Publish announcements, reports, events, and
						institutional updates.
					</p>

					<NavLink
						to="/admin/news"
						className="text-sm text-gold hover:underline">
						Manage News →
					</NavLink>
				</div>

				{/* TEAM */}
				<div className="card p-6 bg-white">
					<p className="text-gold text-xs tracking-[0.18em] uppercase mb-2">
						Institution
					</p>

					<h3 className="font-display text-3xl text-crimson-deep mb-3">
						Team
					</h3>

					<p className="text-ink-light text-sm mb-5">
						Manage staff profiles, roles, and institutional
						leadership.
					</p>

					<NavLink
						to="/admin/team"
						className="text-sm text-gold hover:underline">
						Manage Team →
					</NavLink>
				</div>

				{/* ACHIEVEMENTS */}
				<div className="card p-6 bg-white">
					<p className="text-gold text-xs tracking-[0.18em] uppercase mb-2">
						Institution
					</p>

					<h3 className="font-display text-3xl text-crimson-deep mb-3">
						Achievements
					</h3>

					<p className="text-ink-light text-sm mb-5">
						Showcase milestones, awards, research outputs, and
						impact stories.
					</p>

					<NavLink
						to="/admin/achievements"
						className="text-sm text-gold hover:underline">
						Manage Achievements →
					</NavLink>
				</div>

				{/* SERVICES */}
				<div className="card p-6 bg-white">
					<p className="text-gold text-xs tracking-[0.18em] uppercase mb-2">
						Institution
					</p>

					<h3 className="font-display text-3xl text-crimson-deep mb-3">
						Services
					</h3>

					<p className="text-ink-light text-sm mb-5">
						Manage consultancy, training, research and institutional
						services.
					</p>

					<NavLink
						to="/admin/services"
						className="text-sm text-gold hover:underline">
						Manage Services →
					</NavLink>
				</div>

				{/* FOCUS AREAS */}
				<div className="card p-6 bg-white">
					<p className="text-gold text-xs tracking-[0.18em] uppercase mb-2">
						Institution
					</p>

					<h3 className="font-display text-3xl text-crimson-deep mb-3">
						Focus Areas
					</h3>

					<p className="text-ink-light text-sm mb-5">
						Manage thematic research areas and strategic priorities.
					</p>

					<NavLink
						to="/admin/focus"
						className="text-sm text-gold hover:underline">
						Manage Focus Areas →
					</NavLink>
				</div>
			</div>
		</section>
	);
}
