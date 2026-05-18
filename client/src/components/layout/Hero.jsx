import { useEffect, useRef, useState } from "react";
import { cards, videos } from "../../data/content";

export default function Hero() {
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const videoARef = useRef(null);
	const videoBRef = useRef(null);

	const [activeVideo, setActiveVideo] = useState(0);
	const [isVideoAActive, setIsVideoAActive] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			leftRef.current?.classList.add("visible");
			setTimeout(() => rightRef.current?.classList.add("visible"), 200);
		}, 150);
		return () => clearTimeout(timer);
	}, []);

	// CONTINUOUS VIDEO PLAYBACK
	const handleVideoEnd = () => {
		const nextVideo = (activeVideo + 1) % videos.length;

		if (isVideoAActive) {
			videoBRef.current.src = videos[nextVideo];
			videoBRef.current.play();
		} else {
			videoARef.current.src = videos[nextVideo];
			videoARef.current.play();
		}

		setActiveVideo(nextVideo);
		setIsVideoAActive((prev) => !prev);
	};

	const scrollTo = (id) =>
		document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

	return (
		<section
			id="home"
			className="min-h-screen bg-crimson-deep grid md:grid-cols-2 pt-20 relative overflow-hidden">
			{/* VIDEO BACKGROUND */}
			<div className="absolute inset-0 z-0 overflow-hidden">
				{/* VIDEO A */}
				<video
					ref={videoARef}
					autoPlay
					muted
					playsInline
					preload="auto"
					onEnded={handleVideoEnd}
					src={videos[0]}
					className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
						isVideoAActive ? "opacity-100" : "opacity-0"
					}`}
				/>

				{/* VIDEO B */}
				<video
					ref={videoBRef}
					autoPlay
					muted
					playsInline
					preload="auto"
					onEnded={handleVideoEnd}
					className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
						!isVideoAActive ? "opacity-100" : "opacity-0"
					}`}
				/>
			</div>

			{/* DARK OVERLAY */}
			<div className="absolute inset-0 bg-black/60 z-[1]" />
			{/* Background glows */}
			<div className="absolute inset-0 pointer-events-none z-[2]">
				<div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] -translate-y-1/2 bg-gold/5 rounded-full blur-3xl" />
				<div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-green-mid/10 rounded-full blur-3xl" />
			</div>
			{/* Kente border */}
			<div className="absolute bottom-0 left-0 right-0 h-1.5 kente-bar z-[3]" />
			{/* LEFT CONTENT */}
			<div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20 relative z-[5]">
				<span className="section-label mb-6">
					Pan-African Research Institute
				</span>

				<h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.02] mb-4">
					Victoria Falls
					<br />
					<em className="text-gold-light not-italic font-light">
						Regional Institute
					</em>
				</h1>

				<p className="font-display text-xl italic text-white/80 mb-6 tracking-wide">
					Reimagining Africa Through Dialogue
				</p>

				<p className="text-md leading-relaxed text-white/65 max-width-sm max-w-[420px] mb-10">
					A pan-African independent academic and research institute
					with operational bases in Zimbabwe and Kenya — localising
					the power of knowledge to shape global research and policy
					from an African perspective.
				</p>

				<div className="flex flex-wrap gap-4">
					<button
						onClick={() => scrollTo("#about")}
						className="btn-primary">
						Explore Our Work
					</button>
					<button
						onClick={() => scrollTo("#contact")}
						className="btn-outline">
						Partner With Us
					</button>
				</div>
			</div>
			{/* Right — cards */}
			<div className="hidden md:flex items-center justify-center px-8 py-16 relative z-10">
				<div className="grid gap-4 w-full max-w-[420px]">
					{cards.map(({ icon: Icon, title, desc }) => (
						<div
							key={title}
							className="bg-white/5 border border-gold/20 rounded-sm p-6 transition-all duration-200 hover:bg-gold/7 hover:border-gold/40">
							<Icon className="text-2xl mb-3 text-crimson-deep" />{" "}
							<h4 className="font-display text-lg text-white mb-1.5">
								{title}
							</h4>
							<p className="text-sm text-white/60 leading-relaxed">
								{desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
