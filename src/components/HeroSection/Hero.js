import React from "react";
import {
	HeroSection,
	HeroWrapper,
	HeroContent,
	Heading,
	Para,
	HeroBtn,
	OverlayBg,
	HeroTopSection,
	LogoText,
} from "./HeroElements";
import mainBg from "../images/1.JPG";
function Hero() {
	return (
		<>
			<HeroSection
				style={{ backgroundImage: `url(${mainBg})` }}
				id="home"
			>
				<OverlayBg />
				<HeroWrapper>
					<HeroTopSection>
						<LogoText>AL - MAJAZ</LogoText>
					</HeroTopSection>
					<HeroContent>
						<Heading>We are The Team</Heading>
						<Para>
							We are Al Majas.A Group of Brave,We always stand by
							the truth.
						</Para>
						<HeroBtn to="about"
						spy={true}
						smooth={true}
						offset={0}
						duration={700}>Know Us</HeroBtn>
					</HeroContent>
				</HeroWrapper>
			</HeroSection>
		</>
	);
}

export default Hero;
