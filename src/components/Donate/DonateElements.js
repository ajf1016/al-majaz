import styled from "styled-components";

export const DonateSection = styled.section`
	background-color: #153642;
	height: 60vh;
	padding: 5% 0;
	border-top: 2px solid #7bbcd4;
	@media all and (max-width: 480px) {
		width: 500px;
		height: auto;
	}
`;
export const DonateWrapper = styled.section`
	width: 80%;
	margin: 0 auto;
	max-width: 1700px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media all and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const DonateLeft = styled.div`
	width: 90%;
`;
export const DonateRight = styled.div`
	border-left: 2px solid #7bbcd4;
	padding: 3%;
	text-align: left;

	@media all and (max-width: 768px) {
		border-left: 0;
		padding: 0;
		text-align: center;
		margin-top: 50px;
	}
`;
export const TopSection = styled.div`
	margin-bottom: 50px;
`;
export const Heading = styled.h3`
	color: #7bbcd4;
	font-size: 30px;
`;
export const BottomSection = styled.div`
	display: flex;
	align-items: center;
`;
export const SponserLink = styled.a`
	width: 40%;
	margin-right: 45px;
	cursor: pointer;
	&.college {
		width: 15%;
	}
`;
export const Image = styled.img`
	width: 100%;
	display: block;

	&.college-img {
		border-radius: 50%;
	}
`;
export const Para = styled.p`
	font-size: 25px;
	color: #7bbcd4;
	width: 70%;
	margin-bottom: 40px;
	@media all and (max-width: 768px) {
		width: 100%;
	}
`;
export const Button = styled.button`
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
