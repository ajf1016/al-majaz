import React from "react";
import Footer from "../Footer/Footer";
import { DonateSection ,DonateWrapper,DonateLeft,DonateRight,TopSection,Heading,BottomSection,SponserLink,Image,Para,Button} from "./DonateElements";
import gambic from "./images/gambic.svg";
import jne from "./images/jn.jpg";
import jnue from "./images/jnue.jpg";
function Donate() {
	return (
		<>
			<DonateSection id="donate">
				<DonateWrapper>
					<DonateLeft>
						<TopSection>
							<Heading>We are forever to you...</Heading>
						</TopSection>
						<BottomSection>
							<SponserLink href='https://devjo-stack.github.io/gambic/' target='blank'>
								<Image src={gambic}/>
							</SponserLink>
							<SponserLink className='college' href='http://jamianadwiyya.org/' target='blank'>
								<Image src={jne} className='college-img'/>
							</SponserLink>
							<SponserLink className='college' href='https://www.instagram.com/jamia_nadwiyya/' target='blank'>
								<Image src={jnue} className='college-img'/>
							</SponserLink>
						</BottomSection>
					</DonateLeft>
					<DonateRight>
						<Para>
							We Will Donate the Money you give lovingly to the
							education expenses of the poor children of Kerala
						</Para>
						<Button>Donate</Button>
					</DonateRight>
				</DonateWrapper>
			</DonateSection>
            <Footer />
		</>
	);
}

export default Donate;
