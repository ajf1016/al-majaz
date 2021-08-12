import styled from "styled-components";

export const GallerySection = styled.section`
	background: #153642;
	height: 100vh;
	padding: 3% 0 7%;
	border-top: 2px solid #7bbcd4;
	@media all and (max-width: 768px) {
		height: auto;
	}
	@media all and (max-width: 500px) {
		height: auto;
		width: 500px;
	}
`;
export const GalleryWrapper = styled.section`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 80%;
	max-width: 1700px;
`;
export const GalleryTopSection = styled.div`
	margin: 50px 0 100px;
	@media all and (max-width: 768px) {
		margin: 10px 0;
	}
`;
export const GalleryHeading = styled.h1`
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
export const BottomSection = styled.div``;
export const ImageContainer = styled.div`
	display: flex;
	@media all and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const ImageItem = styled.div`
	width: 33.33%;
	margin-right: 30px;
	border: 5px solid #7bbcd4;
	border-radius: 10px;
	transition: all 0.3s ease-in-out;
	&:hover {
		transform: skewX(5deg);
	}
	&:last-child {
		margin-right: 0;
	}
	@media all and (max-width: 768px) {
		width: 100%;
		margin-top: 40px;
	}
`;
export const GalleryImage = styled.img`
	display: block;
	width: 100%;
	@media all and (max-width: 768px) {
		width: 100%;
	}
`;
