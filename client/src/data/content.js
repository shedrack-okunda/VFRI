import {
	BookOpen,
	CheckCircle,
	Globe,
	GraduationCap,
	Heart,
	Leaf,
	Lightbulb,
	Link,
	ShieldCheck,
	Zap,
} from "lucide-react";

export const NAV_LINKS = [
	{ label: "About", href: "#about" },
	{ label: "Focus Areas", href: "#focus" },
	{ label: "Services", href: "#services" },
	{ label: "Programs", href: "#programs" },
	{ label: "News", href: "#news" },
	{ label: "Team", href: "#team" },
	{ label: "Achievements", href: "#achievements" },
];

export const cards = [
	{
		icon: Globe,
		title: "Regional Reach",
		desc: "Active operations across East and Southern Africa — Zimbabwe, Kenya and beyond.",
	},
	{
		icon: BookOpen,
		title: "Research & Dialogue",
		desc: "Policy-relevant research rooted in African knowledge systems.",
	},
	{
		icon: GraduationCap,
		title: "Capacity Building",
		desc: "Training and systems strengthening for institutions across the continent.",
	},
];

export const videos = [
	"/videos/hero-1.mp4",
	"/videos/hero-3.mp4",
	"/videos/hero-2.mp4",
];

export const VALUES = [
	{
		icon: ShieldCheck,
		title: "Integrity",
		desc: "Honesty and transparency in all research, partnerships and communications.",
	},
	{
		icon: CheckCircle,
		title: "Accountability",
		desc: "Responsibility to the communities, partners, and causes we serve.",
	},
	{
		icon: Zap,
		title: "Resilience",
		desc: "Perseverance in advancing African knowledge despite systemic barriers.",
	},
	{
		icon: Lightbulb,
		title: "Phronesis",
		desc: "Practical wisdom — applying knowledge with discernment and contextual judgment.",
	},
	{
		icon: Heart,
		title: "Humanity",
		desc: "Deep care for people, communities, and the human stories behind the data.",
	},
	{
		icon: Link,
		title: "Interconnectedness",
		desc: "Recognising that African progress is bound to global solidarity.",
	},
	{
		icon: Leaf,
		title: "Respect for Nature",
		desc: "Environmental stewardship as a cornerstone of African development thinking.",
	},
];

export const FOCUS_AREAS = [
	{
		num: "01",
		title: "Education, Training & Capacity Building",
		desc: "Targeted training workshops, short courses, and systems strengthening for individuals, organisations, and governments across Africa.",
		image: "/images/focus/education.jpg",
	},
	{
		num: "02",
		title: "International Law & Relations",
		desc: "Research and dialogue at the intersection of international law, peace, security and governance with an African lens.",
		image: "/images/focus/laws.jpg",
	},
	{
		num: "03",
		title: "Environment & Climate",
		desc: "Applied research on climate change and environmental governance, integrating local ecological knowledge with global policy.",
		image: "/images/focus/environment.avif",
	},
	{
		num: "04",
		title: "Peace, Security & Governance",
		desc: "Conflict dynamics, post-conflict reconstruction, and governance challenges examined through scholar-practitioner perspectives.",
		image: "/images/focus/peace.jpg",
	},
	{
		num: "05",
		title: "Development & Humanitarian Affairs",
		desc: "Bridging academic research and humanitarian action — from fieldwork in conflict zones to development policy recommendations.",
		image: "/images/focus/development.jpg",
	},
];

export const SERVICES = [
	{
		num: "01",
		title: "Policy & Research Dialogues",
		desc: "Platforms for robust engagement on Africa's contemporary and historical issues — convening scholars, practitioners, and policymakers.",
		image: "/images/services/dialogue.avif",
	},
	{
		num: "02",
		title: "Training Workshops & Short Courses",
		desc: "Targeted programmes on African affairs including international law, governance, humanitarian response and regional integration.",
		image: "/images/services/training.avif",
	},
	{
		num: "03",
		title: "Research Programs",
		desc: "In-depth studies focused on African issues, integrating local perspectives and feeding directly into global policy conversations.",
		image: "/images/services/research.avif",
	},
	{
		num: "04",
		title: "Systems Strengthening Courses",
		desc: "Capacity-building programmes for individuals, organisations and businesses to foster skills transfer and institutional resilience.",
		image: "/images/services/development.avif",
	},
	{
		num: "05",
		title: "Consultancy Services",
		desc: "Expertise in research methodologies, sustainable development strategies, and community engagement practices.",
		image: "/images/services/consultancy.avif",
	},
];

export const TEAM = [
	{
		name: "Dr. James Nyawo",
		role: "Founding Executive Director",
		bio: "Ph.D. in International Law from Middlesex University, UK. A Zimbabwean scholar-practitioner with 20+ years in humanitarian field management — Angola, Uganda, Sudan, and South Sudan. Consultant for UNICEF, IOM, and UNESCO. Lecturer at Strathmore University, Nairobi. Deeply committed to the Pax Africana philosophy.",
		image: "/founder.jpg",
	},
	{
		name: "Dr. Saul Davis Sango",
		role: "Director",
		bio: "B.Sc. Statistics & Data Analysis, M.Sc. Industrial Diversity & Organizational Psychology, Ph.D. candidate in Psychology. Six Sigma Black Belt and PMP-certified. Kenyan training consultant and business development strategist. Expert in organizational psychology, data analytics, and change management.",
		image: "/director.jpg",
	},
];

export const ACHIEVEMENTS = [
	{
		title: "Keynote at Marondera University",
		desc: "Keynote address at Marondera University of Agricultural Sciences & Technology on collaborative and impactful research, emphasising transdisciplinary teamwork, research integrity, and societal impact beyond academia.",
		image: "/images/achievements/keynote.avif",
	},
	{
		title: "ZIMAZA — African Quiz & Essay Competition",
		desc: "Sponsored the ZIMAZA competition in Nairobi, fostering cross-border collaboration among students from Zimbabwe, Malawi, and Zambia. Promoted African history, geography, culture, and critical thinking on sustainable development.",
		image: "/images/achievements/competition.avif",
	},
	{
		title: "Youth Empowerment & Leadership",
		desc: "Created platforms for youth intellectual engagement and leadership development — reinforcing commitment to regional integration, education, and academic excellence across Southern and East Africa.",
		image: "/images/achievements/empowerment.avif",
	},
	{
		title: "Regional Research Networks",
		desc: "Built a growing network of researchers, practitioners, and institutions united by the goal of producing knowledge that centres African experience in global conversations.",
		image: "/images/achievements/academic.avif",
	},
];

export const CONTACT = {
	harare: {
		label: "Head Office — Zimbabwe",
		address: "13 Hendrikz Way, Mount Pleasant, Harare, Zimbabwe",
		phone: "+263 77 807 3475",
	},
	nairobi: {
		label: "Nairobi Office — Kenya",
		address: "P.O. Box 644-00620, Nairobi, Kenya",
		phone: "+254 79 7119 199",
	},
	email: "info@vfri.africa",
	website: "www.vfri.africa",
};

export const PROGRAMS = [
	{
		title: "African Governance Research Initiative",
		category: "Research Program",
		description:
			"A multi-country study examining governance systems across East and Southern Africa, focusing on institutional reform and policy harmonisation.",
		status: "Active",
		image: "/images/programs/governance.avif",
	},
	{
		title: "Youth Leadership & Policy Training",
		category: "Capacity Building",
		description:
			"A structured training program equipping young African leaders with skills in governance, diplomacy, and policy analysis.",
		status: "Ongoing",
		image: "/images/programs/youth.avif",
	},
	{
		title: "Climate & Environment Knowledge Lab",
		category: "Research & Innovation",
		description:
			"Interdisciplinary research on climate resilience, environmental governance, and indigenous ecological knowledge systems.",
		status: "Active",
		image: "/images/programs/climate.avif",
	},
];

export const NEWS = [
	{
		title: "VFRI Launches Regional Research Collaboration Framework",
		date: "March 2026",
		summary:
			"A new framework connecting universities and policy institutes across Africa to strengthen collaborative research output.",
		tag: "Announcement",
		image: "/images/news/news1.avif",
	},
	{
		title: "Policy Dialogue on African Development Models Held in Nairobi",
		date: "February 2026",
		summary:
			"Experts gathered in Nairobi to discuss alternative development models rooted in African epistemologies and local knowledge systems.",
		tag: "Event",
		image: "/images/news/news2.avif",
	},
	{
		title: "Publication: Rethinking Governance in Post-Colonial Africa",
		date: "January 2026",
		summary:
			"A research paper exploring governance transformation and institutional resilience in post-colonial African states.",
		tag: "Publication",
		image: "/images/news/news3.avif",
	},
];
