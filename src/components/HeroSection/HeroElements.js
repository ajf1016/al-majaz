import styled from "styled-components";

import {Link} from 'react-scroll'
export const HeroSection = styled.section`
    height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: scroll;
	position: relative;
	border-top: 2px solid #7bbcd4;
	@media all and (max-width: 1280px){
		height: 90vh;
	}
	@media all and (max-width: 960px){
		height: auto;
	}
	@media all and (max-width: 768px){
		background-position-x: -80px;
	}
	@media all and (max-width: 640px){
		background-position-x: -250px;
	}
	@media all and (max-width: 480px){
		width: 500px;
	}
`;
export const OverlayBg = styled.section`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.7);
	@media all and (max-width: 1280px){
		height: 10vh;
	}
	@media all and (max-width: 480px){
		width: 500px;
	}
	@media all and (max-width: 4800px){
		height: 100vh;
	}
`;
export const HeroWrapper = styled.section`
	width: auto;
	margin: 0 auto;
	max-width: 1700px;
	height: 100vh;
`;
export const HeroTopSection = styled.div`
	text-align: center;
	position: relative;
	padding-top: 3%;
`
export const LogoText = styled.h1`
	font-size: 70px;
	display: block;
	color: #7bbcd4;
	font-family: "Anton", sans-serif;
	@media all and (max-width: 480px){
		font-size: 50px;
	}
`
export const HeroContent = styled.div`
	margin: 0 auto;
	text-align: center;
	max-width: 650px;
	transform: translateY(50%);
	@media all and (max-width: 480px){
		transform: translateY(27%);
	}
`;
export const Heading = styled.h1`
    color: #7bbcd4;
    font-size: 70px;
    font-family: "Anton", sans-serif;
    letter-spacing: 2.5px;
	@media all and (max-width: 360px){
		font-size: 50px;
	}
`;
export const Para = styled.p`
    color: #7bbcd4;
    font-size: 30px;
    font-family: 'Dancing Script', cursive;
    font-weight: 600;
    margin: 30px auto;
    width: 55%;
`;
export const HeroBtn = styled(Link)`
    background: #7bbcd4;
	color: #153642;
	font-size: 20px;
	padding: 15px 35px;
	font-family: "Abel", sans-serif;
	border-radius: 5px;
	transition: all 0.2s ease-in;
	font-weight: 600;
	border: 3px solid #7bbcd4;

	&:hover {
		background: transparent;
		color: #7bbcd4;
	}
`;
