import styled from "styled-components";
import { Link } from "react-scroll";

export const DropUp = styled.div`
	position: fixed;
	display: inline-block;
	z-index: 1;
	top: 750px;
	right: 70px;
	z-index: 1;
	@media all and (max-width: 1280px) {
		top: 600px;
	}
	@media all and (max-width: 640px) {
		right: 30px;
	}
`;
export const DropBtn = styled.button`
	background-color: #7bbcd4;
	color: #153642;
	padding: 13px 5px 0 0;
	font-size: 50px;
	width: 80px;
	height: 80px;
	border-radius: 5px;
	border: 3px solid #7bbcd4;
	transition: all 0.5 ease-in-out;
	cursor: pointer;
	box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
	&:hover {
		background-color: transparent;
		color: #7bbcd4;
		transition: all 0.3s ease-in-out;
	}

	&.ball {
		animation: bounce 0.5s;
		animation-direction: alternate;
		animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
		animation-iteration-count: infinite;
	}
	@keyframes bounce {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(0, 40px, 0);
		}
	}

	@media all and (max-width: 1280px) {
		font-size: 30px;
		width: 60px;
		height: 60px;
	}
`;
export const DropContent = styled.div`
	display: flex;
	width: ${({ click }) => (click ? "270px" : "0px")};
	flex-direction: column;
	background-color: #7bbcd4;
	color: #153642;
	padding: ${({ click }) => (click ? "20px" : "0px")};
	position: absolute;
	bottom: 98px;
	right: 0;
	height: ${({ click }) => (click ? "380px" : "0")};
	border-radius: 5px;
	text-align: center;
	transition: all 0.4s ease-in-out;
	box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
	overflow: hidden;

	@media all and (max-width: 768px) {
		width: 230px;
		left: -170px;
		bottom: 65px;
	}
`;
export const DropLink = styled(Link)`
	margin-bottom: 20px;
	transition: all 0.5s ease-in-out;
	cursor: pointer;
	position: relative;
	font-size: 30px;
	font-family: "Abel", sans-serif;
	&::after {
		content: "";
		position: absolute;
		top: 35px;
		left: 78px;
		width: 0;
		height: 4px;
		background: #153642;
		border-radius: 5px;
		transition: all 0.5s ease-in-out;
	}
	&:hover::after {
		width: 30%;
	}
	&.active::after {
		content: "";
		position: absolute;
		top: 35px;
		left: 78px;
		width: 30%;
		height: 4px;
		background: #153642;
		border-radius: 5px;
		transition: all 0.2s ease-in-out;
	}

	@media all and (max-width: 768px) {
		font-size: 25px;
		&.active::after {
			font-size: 25px;
			top: 35px;
			left: 63px;
		}
	}
`;

