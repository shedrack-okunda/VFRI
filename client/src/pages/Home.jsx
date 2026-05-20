import Hero from "../components/layout/Hero";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Focus from "../components/sections/Focus";
import Services from "../components/sections/Services";
import Values from "../components/sections/Values";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Values />
			<Focus />
			<Services />
			<Contact />
		</>
	);
}
