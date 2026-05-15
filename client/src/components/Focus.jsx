import { useReveal } from '../hooks/useReveal'
import { FOCUS_AREAS } from '../data/content'

export default function Focus() {
  const leftRef = useReveal()
  const rightRef = useReveal()

  return (
    <section id="focus" className="py-24 px-8 md:px-16 lg:px-20 bg-cream-dark grid md:grid-cols-3 gap-12 lg:gap-20 items-start">

      <div ref={leftRef} className="reveal md:col-span-1 md:sticky md:top-28">
        <span className="section-label mb-4 block">What We Do</span>
        <h2 className="section-title text-4xl md:text-5xl mb-6">Focus Areas</h2>
        <p className="text-ink-light text-sm leading-[1.85]">
          VFRI's work is organised around five primary domains, each grounded in African realities and
          aimed at global relevance.
        </p>
      </div>

      <div ref={rightRef} className="reveal md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {FOCUS_AREAS.map(({ num, title, desc }, i) => (
          <div
            key={num}
            className={`card p-6 ${i === 0 ? 'sm:col-span-2 bg-green-deep' : 'bg-white'}`}
          >
            <p className={`font-display text-4xl font-light opacity-40 leading-none mb-3
              ${i === 0 ? 'text-gold' : 'text-gold'}`}
            >
              {num}
            </p>
            <h3 className={`font-display text-xl mb-2 ${i === 0 ? 'text-white' : 'text-green-deep'}`}>
              {title}
            </h3>
            <p className={`text-xs leading-relaxed ${i === 0 ? 'text-white/55' : 'text-ink-light'}`}>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
