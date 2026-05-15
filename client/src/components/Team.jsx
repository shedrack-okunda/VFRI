import { useReveal } from '../hooks/useReveal'
import { TEAM } from '../data/content'

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12 text-gold/40">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
  )
}

export default function Team() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="team" className="py-24 px-8 md:px-16 lg:px-20 bg-green-deep relative">
      {/* Kente bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 kente-bar" />

      <div ref={headRef} className="reveal mb-12">
        <span className="section-label mb-4 block" style={{ color: '#c8a84b' }}>Leadership</span>
        <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight">Our Team</h2>
      </div>

      <div ref={gridRef} className="reveal grid md:grid-cols-2 gap-6">
        {TEAM.map(({ name, role, bio }) => (
          <div key={name} className="flex gap-6 bg-white/5 border border-gold/15 rounded-sm p-6 transition-all duration-200 hover:bg-white/8">
            {/* Photo placeholder */}
            <div className="w-28 h-32 flex-shrink-0 border border-gold/30 rounded-sm bg-gold/8 flex items-center justify-center">
              <PersonIcon />
            </div>
            <div>
              <p className="text-gold text-[0.65rem] tracking-[0.18em] uppercase mb-1">{role}</p>
              <h3 className="font-display text-2xl text-white mb-3">{name}</h3>
              <p className="text-white/55 text-xs leading-relaxed">{bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
