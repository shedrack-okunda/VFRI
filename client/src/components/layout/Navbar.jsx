import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/content";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 60);
		window.addEventListener("scroll", handler);
		return () => window.removeEventListener("scroll", handler);
	}, []);

	const handleNav = (href) => {
		setMenuOpen(false);
		document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300
      ${scrolled ? "py-1 px-7 md:px-11" : "py-3 px-7 md:px-11"}
      bg-crimson backdrop-blur-md border-b border-gold/20`}>
			{/* Logo */}
			<a
				href="#home"
				onClick={() => handleNav("#home")}
				className="flex items-center gap-3 no-underline">
				<div className="w-11 h-11 relative flex-shrink-0">
					<img
						src="/logo2.png"
						alt="Logo"
						className="w-full h-full"
					/>
				</div>
				<div className="leading-tight font-sans">
					<strong className="block font-display font-bold text-md text-crimson-dark  tracking-wide">
						Victoria Falls Regional Institute
					</strong>
					<span className="text-[0.6rem] text-crimson-mid tracking-[0.12em] uppercase">
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
							className="text-crimson-mid text-sm font-bold tracking-widest uppercase hover:text-crimson-light transition-colors duration-200 bg-transparent border-0 cursor-pointer font-sans">
							{label}
						</button>
					</li>
				))}
				<li>
					<button
						onClick={() => handleNav("#contact")}
						className="btn-primary !px-5 !py-2 text-[0.7rem]">
						Contact
					</button>
				</li>
			</ul>

			{/* Hamburger */}
			<button
				className="md:hidden flex flex-col gap-1.5 bg-transparent border-0 cursor-pointer p-1"
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label="Toggle menu">
				<span
					className={`block w-6 h-0.5 bg-crimson-mid transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
				/>
				<span
					className={`block w-6 h-0.5 bg-crimson-mid transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
				/>
				<span
					className={`block w-6 h-0.5 bg-crimson-mid transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
				/>
			</button>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="absolute top-full left-0 right-0 bg-crimson-mid border-t border-gold/20 flex flex-col gap-0 md:hidden">
					{NAV_LINKS.map(({ label, href }) => (
						<button
							key={href}
							onClick={() => handleNav(href)}
							className="px-8 py-4 text-gold text-sm tracking-widest uppercase text-left hover:bg-gold/10 hover:text-gold transition-colors border-0 bg-transparent cursor-pointer font-sans border-b border-white/5">
							{label}
						</button>
					))}
					<button
						onClick={() => handleNav("#contact")}
						className="m-6 btn-primary text-center">
						Contact Us
					</button>
				</div>
			)}
		</nav>
	);
}
