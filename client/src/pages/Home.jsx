import Hero from "../components/layout/Hero";
import About from "../components/sections/About";
import Achievements from "../components/sections/Achievements";
import Contact from "../components/sections/Contact";
import Focus from "../components/sections/Focus";
import News from "../components/sections/News";
import Programs from "../components/sections/Programs";
import Services from "../components/sections/Services";
import Team from "../components/sections/Team";
import Values from "../components/sections/Values";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Values />
			<Focus />
			<Services />
			<Programs />
			<News />
			<Team />
			<Achievements />
			<Contact />
		</>
	);
}
