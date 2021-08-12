import styled from "styled-components";
import {
	HiOutlineChevronDoubleRight,
	HiOutlineChevronDoubleLeft,
} from "react-icons/hi";

export const MembersSection = styled.section`
	background-color: #153642;
	height: 100vh;
	padding: 5% 0;
	border-top: 2px solid #7bbcd4;
	@media all and (max-width: 960px){
		height: auto;
	}
	@media all and (max-width: 480px){
		width: 500px;
	}
`;
export const MembersWrapper = styled.section`
	width: 80%;
	margin: 0 auto;
	max-width: 1700px;
`;
export const TopSection = styled.div`
	margin: 0 0 150px;
`;
export const Heading = styled.h1`
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
	position: relative;
`;
export const MembersItems = styled.div`
	position: relative;
	overflow: hidden;
	display: flex;
	margin: 0 auto;
	width: 80vw;
	height: 330px;
    max-width: 700px;
`;
export const MembersCard = styled.div`
	width: 100%;
    height: 100%;
	margin: 0 auto;
	background: #fff;
	padding: 3% 3%;
	border-radius: 10px;
	background: #7bbcd4;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	transition: all 0.4s ease-in-out;
	&.activeSlide {
		opacity: 1;
		transform: translateX(0);
	}
	&.lastSlide {
		transform: translateX(-100%);
	}
	&.nextSlide {
		transform: translateX(100%);
	}
	@media all and (max-width: 480px){
		width: 90%;
		height: 60%;
		left: 20px;
	}
`;
export const CardTop = styled.div`
	width: 30%;
	margin: 0 auto 40px;
`;
export const CardBottom = styled.div`
	text-align: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const MemberImage = styled.img`
	display: block;
	width: 100%;
	border-radius: 50%;
`;
export const MemberName = styled.h1`
	flex: 1;
	font-size: 35px;
	color: #153642;
`;
export const MemberSocial = styled.a`
	cursor: pointer;
	font-size: 35px;
	color: #153642;
	transition: all 0.5s ease-in-out;
	&:hover {
		transform: scale(1.5);
	}
`;
export const BtnLeft = styled(HiOutlineChevronDoubleLeft)`
	color: #fff;
	position: absolute;
	top: 50%;
	left: 20%;
	font-size: 50px;
	cursor: pointer;
	color: #7bbcd4;
	transition: 0.3s ease-in-out;
	&:hover {
		color: #fff;
	}
	@media all and (max-width: 1280px){
		left: 10%;
	}
	@media all and (max-width: 960px){
		left: 0%;
	}
	@media all and (max-width: 768px){
		left: -3%;
	}
	@media all and (max-width: 480px){
		top: 230px;
		left: 100px;
		font-size : 30px;
	}
`;
export const BtnRight = styled(HiOutlineChevronDoubleRight)`
	color: #fff;
	position: absolute;
	top: 50%;
	right: 20%;
	font-size: 50px;
	cursor: pointer;
	color: #7bbcd4;
	transition: 0.3s ease-in-out;
	&:hover {
		color: #fff;
	}
	@media all and (max-width: 1280px){
		right: 10%;
	}
	@media all and (max-width: 960px){
		right: 0%;
	}
	@media all and (max-width: 768px){
		right: -3%;
	}
	@media all and (max-width: 480px){
		top: 230px;
		right: 100px;
		font-size : 30px;
	}
`;
