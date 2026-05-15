import { useReveal } from '../hooks/useReveal'
import { VALUES } from '../data/content'

const icons = ['🛡️','✅','⚡','💡','❤️','🔗','🌿']

export default function Values() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="values" className="py-24 px-8 md:px-16 lg:px-20 bg-green-deep relative overflow-hidden">
      {/* Kente top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 kente-bar" />

      <div ref={headRef} className="reveal grid md:grid-cols-3 gap-8 mb-12 items-end">
        <div className="md:col-span-1">
          <span className="section-label mb-4 block" style={{ color: '#c8a84b' }}>
            What We Stand For
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight">
            Our Core<br />Values
          </h2>
        </div>
        <p className="md:col-span-2 text-white/60 text-sm leading-[1.85] self-end">
          Seven principles guide every decision, dialogue, and deliverable at VFRI — from how we conduct
          research to how we engage partners and communities across Africa and beyond.
        </p>
      </div>

      <div ref={gridRef} className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
        {VALUES.map(({ title, desc }, i) => (
          <div
            key={title}
            className={`bg-white/5 border border-gold/15 rounded-sm p-5 transition-all duration-200
              hover:bg-gold/8 hover:border-gold/35
              ${i === VALUES.length - 1 ? 'col-span-2 md:col-span-4 md:max-w-sm' : ''}`}
          >
            <span className="text-2xl mb-3 block">{icons[i]}</span>
            <h4 className="font-display text-lg text-white mb-2">{title}</h4>
            <p className="text-xs text-white/45 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
