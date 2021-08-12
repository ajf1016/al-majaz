import "./App.css";
import { useState } from "react";
import Hero from "./components/HeroSection/Hero";
import About from "./components/About/About";
import SideNav from "./components/SideNav/SideNav";
import Mission from "./components/Mission/Mission";
import Gallery from "./components/Gallery/Gallery";
import Members from "./components/Memebrs/Members";
import Donate from "./components/Donate/Donate";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="App">
			<SideNav toggle={toggle} />
			<Hero />
			<About />
			<Mission />
			<Gallery />
			<Members />
			<Donate />
		</div>
	);
}

export default App;
