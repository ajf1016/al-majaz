import styled from "styled-components";

export const MissionSection = styled.section`
	height: 100vh;
	color: #7bbcd4;
	background: #153642;
	padding: 5% 0;
	@media all and (max-width: 960px){
		height: auto;
	}
	@media all and (max-width: 480px){
		width: 500px;
	}
`;
export const MissionWrapper = styled.section`
	width: 80%;
	margin: 0 auto;
	max-width: 1700px;
	position: relative;
`;
export const TopSection = styled.div`
	margin: 0 0 150px;
	@media all and (max-width: 768px){
		margin: 0 0 50px;
	}
`;
export const MissionHeading = styled.h1`
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
		background: #7bbcd4;
		position: absolute;
		top: 60px;
		left: 0px;
		height: 5px;
		width: 13%;
	}
`;
export const BottomSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media all and (max-width: 768px){
		flex-direction: column;
	}
`;
export const CardItem = styled.div`
	width: 33.33%;
	background: #fff;
	margin-right: 40px;
	position: relative;
	cursor: pointer;
	border-radius: 10px;
	&:last-child {
		margin-right: 0;
	}
	&:hover .content {
		opacity: 1;
	}
	@media all and (max-width: 768px){
		margin-top: 30px;
		width: 90%;
		height: 190px;
		margin-right: 0;
	}
`;
export const CardImgContainer = styled.div`
	
`;
export const CardImg = styled.img`
	display: block;
	margin: 0 auto;
	width: 100%;
	border-radius: 10px;
	@media all and (max-width: 768px){
		height: 190px;
	}
`;
export const CardContent = styled.div`
	padding: 0;
	position: absolute;
	bottom: 0px;
	transition: all 0.6s ease;
	overflow: hidden;
	height: 100%;
	background: rgba(0, 0, 0, 0.9);
	padding: 25px;
	opacity: 0;
	border-radius: 10px;
	width: 100%;
`;
export const CardTitle = styled.h3`
	font-size: 35px;
	margin-bottom: 20px;
	font-weight: bold;
	font-family: "Abel", sans-serif;
	@media all and (max-width: 1280px){
		font-size: 30px;
		margin-bottom: 10px
	}
	@media all and (max-width: 960px){
		margin-bottom: 0;
	}
`;
export const Description = styled.p`
	font-size: 20px;
	line-height: 1.7rem;
	letter-spacing: 1px;
	font-family: "Abel", sans-serif;
	@media all and (max-width: 1280px){
		font-size: 25px;
		line-height: 30px;
	}
	@media all and (max-width: 9600px){
		font-size: 20px;
		line-height: 20px;
	}
`;
