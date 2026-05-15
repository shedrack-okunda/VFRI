import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300
      ${scrolled ? 'py-2 px-8 md:px-12' : 'py-4 px-8 md:px-12'}
      bg-green-deep/97 backdrop-blur-md border-b border-gold/20`}>

      {/* Logo */}
      <a href="#home" onClick={() => handleNav('#home')} className="flex items-center gap-3 no-underline">
        <div className="w-9 h-9 relative flex-shrink-0">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M20 6C22 8 26 10 28 14C30 18 29 23 27 27C25 31 22 34 20 36C18 34 15 31 13 27C11 23 10 18 12 14C14 10 18 8 20 6Z" fill="#c8a84b" opacity="0.15"/>
            <path d="M20 7C18 9 16 11 16 14C16 16 17 17 19 17.5L18 23L20 24L22 23L21 17.5C23 17 24 16 24 14C24 11 22 9 20 7Z" fill="#c8a84b"/>
            <path d="M22 14L24.5 15.5L22 15" fill="#c8a84b"/>
            <ellipse cx="20" cy="26" rx="6" ry="8" fill="none" stroke="#c8a84b" strokeWidth="1.4" opacity="0.55"/>
          </svg>
        </div>
        <div className="leading-tight">
          <strong className="block font-display font-semibold text-sm text-gold-light tracking-wide">
            Victoria Falls Regional Institute
          </strong>
          <span className="text-[0.6rem] text-white/40 tracking-[0.12em] uppercase">
            Reimagining Africa Through Dialogue
          </span>
        </div>
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <button
              onClick={() => handleNav(href)}
              className="text-white/70 text-xs tracking-widest uppercase hover:text-gold-light transition-colors duration-200 bg-transparent border-0 cursor-pointer font-sans"
            >
              {label}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => handleNav('#contact')}
            className="btn-primary !px-5 !py-2 text-[0.7rem]"
          >
            Contact
          </button>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 bg-transparent border-0 cursor-pointer p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-gold-light transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-gold-light transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-gold-light transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-green-deep/98 border-t border-gold/20 flex flex-col gap-0 md:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className="px-8 py-4 text-white/70 text-xs tracking-widest uppercase text-left hover:bg-gold/10 hover:text-gold transition-colors border-0 bg-transparent cursor-pointer font-sans border-b border-white/5"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="m-6 btn-primary text-center"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  )
}
