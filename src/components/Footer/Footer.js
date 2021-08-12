import React from "react";
import {FooterSection,FooterWrapper,CopyRight,Ju} from './FooterElements'
function Footer() {
	return (
		<>
			<FooterSection>
                <FooterWrapper>
                    <CopyRight>© 2021 AL MAJAZ. All right reserved. | Developed by <Ju href='https://devjo-stack.github.io/devjo/' target='blank'>Devjo</Ju></CopyRight>
                </FooterWrapper>
            </FooterSection>
		</>
	);
}

export default Footer;
