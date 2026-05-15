import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Values from "./components/Values";
import Focus from "./components/Focus";
import Services from "./components/Services";
import Team from "./components/Team";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Programs from "./components/Programs";
import News from "./components/News";

export default function App() {
	return (
		<>
			<Navbar />
			<main>
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
			</main>
			<Footer />
		</>
	);
}
