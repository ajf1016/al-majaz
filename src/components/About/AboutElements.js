import styled from "styled-components";

export const AboutSection = styled.section`
	background: #fff;
	height: 100vh;
	padding: 3% 0;
	border-top: 2px solid #7bbcd4;
	@media all and (max-width: 1280px) {
		padding-left: 4%;
	}
	@media all and (max-width: 480px) {
		width: 500px;
	}
	@media all and (max-width: 960px) {
		height: auto;
	}
`;
export const TopHeading = styled.div`
	width: 80%;
	max-width: 1700px;
	margin: 0 auto 150px;
	@media all and (max-width: 480px) {
		margin: 0 auto 50px;
	}
`;
export const Heading = styled.h2`
	margin-bottom: 50px;
	font-size: 50px;
	font-weight: 400;
	letter-spacing: 2px;
	color: #7bbcd4;
	text-align: left;
	position: relative;
	width: auto;
	&::after {
		content: "";
		background: #153642;
		position: absolute;
		top: 60px;
		left: 0px;
		height: 5px;
		width: 13%;
	}
`;
export const Wrapper = styled.section`
	width: 80%;
	margin: 0 auto;
	max-width: 1700px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media all and (max-width: 480px) {
		flex-direction: column;
	}
`;
export const Left = styled.div`
	position: relative;
	width: 40%;
	padding: 1%;
	@media all and (max-width: 480px) {
		width: 60%;
	}
	&::after {
		content: "";
		position: absolute;
		top: 0px;
		left: 0;
		height: 400px;
		width: 400px;
		border-right: 25px solid #153642;
		border-bottom: 25px solid #153642;
		border-top: 25px solid #7bbcd4;
		border-left: 25px solid #7bbcd4;

		@media all and (max-width: 1280px) {
			display: none;
		}
	}
`;
export const Img = styled.img`
	width: 65%;
	display: block;
	@media all and (max-width: 768px) {
		width: 100%;
	}
`;
export const Right = styled.div`
	width: 60%;
	text-align: left;
	padding: 100px;
	border-left: 3px solid #7bbcd4;
	height: 500px;
	@media all and (max-width: 1280px) {
		padding-top: 150px;
	}
	@media all and (max-width: 960px) {
		padding-top: 60px;
		padding-left: 40px;
		height: 400px;
	}
	@media all and (max-width: 640px) {
		padding-top: 35px;
		padding-right: 25px;
		height: 400px;
	}
	@media all and (max-width: 480px) {
		border-top: 3px solid #7bbcd4;
		border-left: none;
		padding: 7% 0 0;
	}
`;
export const Para = styled.p`
	font-family: "Abel", sans-serif;
	font-size: 35px;
	line-height: 45px;
	color: #153642;
	@media all and (max-width: 768px) {
		font-size: 30px;
		line-height: 30px;
	}
`;
