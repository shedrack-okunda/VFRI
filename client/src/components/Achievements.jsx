import { useReveal } from '../hooks/useReveal'
import { ACHIEVEMENTS } from '../data/content'

export default function Achievements() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="achievements" className="py-24 px-8 md:px-16 lg:px-20 bg-cream">
      <div ref={headRef} className="reveal grid md:grid-cols-2 gap-8 mb-14 items-end">
        <div>
          <span className="section-label mb-4 block">Impact</span>
          <h2 className="section-title text-4xl md:text-5xl">Achievements</h2>
        </div>
        <p className="text-ink-light text-sm leading-[1.85] self-end">
          From university keynotes in Zimbabwe to cross-border student competitions in Nairobi —
          VFRI turns its mission into measurable impact on the ground.
        </p>
      </div>

      <div ref={gridRef} className="reveal grid sm:grid-cols-2 gap-5">
        {ACHIEVEMENTS.map(({ title, desc }) => (
          <div key={title} className="relative bg-white border border-black/[0.06] rounded-sm p-7 overflow-hidden
            transition-all duration-200 hover:shadow-xl">
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold to-green-mid" />
            <h3 className="font-display text-xl text-green-deep mb-3">{title}</h3>
            <p className="text-ink-light text-xs leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
