import React from "react";
import Logo from "../images/al-majaz-logo.jpeg";
import {
	AboutSection,
	TopHeading,
	Wrapper,
	Left,
	Img,
	Right,
	Para,
	Heading,
} from "./AboutElements";
function About() {
	return (
		<>
			<AboutSection id="about">
				<TopHeading>
					<Heading>About</Heading>
				</TopHeading>
				<Wrapper>
					<Left>
						<Img src={Logo} />
					</Left>
					<Right>
						<Para>
							We are AL-MAJAZ,We are from Jamia Nadwiyya.we are
							the group of intelligent students.with God blessing with this Al-Majaz
							we intend to always stand with the truth and do a
							lot of acts of mercy
						</Para>
					</Right>
				</Wrapper>
			</AboutSection>
		</>
	);
}

export default About;
