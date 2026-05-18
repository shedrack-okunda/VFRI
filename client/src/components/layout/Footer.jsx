export default function Footer() {
	return (
		<footer
			className="bg-[#07200f] py-8 px-8 md:px-16 lg:px-20 flex flex-col md:flex-row items-center
      justify-between gap-4 border-t border-gold/15">
			<div className="font-sans text-md text-white/40 text-center md:text-left">
				<span className="font-display text-gold-light font-semibold">
					Victoria Falls Regional Institute
				</span>
				<span className="hidden md:inline text-white/20 mx-2">·</span>
				<br className="md:hidden" />
				Reimagining Africa Through Dialogue
			</div>
			<div className="text-sm text-white/30 text-center">
				© {new Date().getFullYear()} VFRI &nbsp;·&nbsp; info@vfri.africa
				&nbsp;·&nbsp; www.vfri.africa
			</div>
		</footer>
	);
}
