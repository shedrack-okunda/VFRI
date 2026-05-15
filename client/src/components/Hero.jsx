import { useEffect, useRef } from 'react'

const cards = [
  { icon: '🌍', title: 'Regional Reach', desc: 'Active operations across East and Southern Africa — Zimbabwe, Kenya and beyond.' },
  { icon: '📖', title: 'Research & Dialogue', desc: 'Policy-relevant research rooted in African knowledge systems.' },
  { icon: '🎓', title: 'Capacity Building', desc: 'Training and systems strengthening for institutions across the continent.' },
]

export default function Hero() {
  const leftRef  = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      leftRef.current?.classList.add('visible')
      setTimeout(() => rightRef.current?.classList.add('visible'), 200)
    }, 150)
    return () => clearTimeout(timer)
  }, [])

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="min-h-screen bg-green-deep grid md:grid-cols-2 pt-20 relative overflow-hidden">

      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] -translate-y-1/2 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-green-mid/10 rounded-full blur-3xl" />
      </div>

      {/* Kente bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 kente-bar" />

      {/* Left — content */}
      <div ref={leftRef} className="reveal flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20 relative z-10">
        <span className="section-label mb-6">Pan-African Research Institute</span>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.02] mb-4">
          Victoria Falls<br />
          <em className="text-gold-light not-italic font-light">Regional Institute</em>
        </h1>

        <p className="font-display text-xl italic text-white/50 mb-6 tracking-wide">
          Reimagining Africa Through Dialogue
        </p>

        <p className="text-sm leading-relaxed text-white/65 max-width-sm max-w-[420px] mb-10">
          A pan-African independent academic and research institute with operational bases in Zimbabwe and Kenya —
          localising the power of knowledge to shape global research and policy from an African perspective.
        </p>

        <div className="flex flex-wrap gap-4">
          <button onClick={() => scrollTo('#about')} className="btn-primary">
            Explore Our Work
          </button>
          <button onClick={() => scrollTo('#contact')} className="btn-outline">
            Partner With Us
          </button>
        </div>
      </div>

      {/* Right — cards */}
      <div ref={rightRef} className="reveal hidden md:flex items-center justify-center px-8 py-16 relative z-10">
        <div className="grid gap-4 w-full max-w-[420px]">
          {cards.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white/5 border border-gold/20 rounded-sm p-6 transition-all duration-200 hover:bg-gold/7 hover:border-gold/40"
            >
              <span className="text-2xl mb-3 block">{icon}</span>
              <h4 className="font-display text-lg text-white mb-1.5">{title}</h4>
              <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
