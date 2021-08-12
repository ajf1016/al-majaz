import React from "react";

import {
	MissionSection,
	MissionWrapper,
	TopSection,
	MissionHeading,
	BottomSection,
	CardItem,
	CardImg,
	CardContent,
	CardTitle,
	Description,
	CardImgContainer,
} from "./MissionElements";

import campus from "../images/campus.jpg";
import study from "../images/study.jpg";
import equal from "../images/equal.jpg";

function Mission() {
	return (
		<>
			<MissionSection id="mission">
				<MissionWrapper>
					<TopSection>
						<MissionHeading>Mission</MissionHeading>
					</TopSection>
					<BottomSection>
						<CardItem>
							<CardImgContainer className="img-con">
								<CardImg src={campus} />
							</CardImgContainer>
							<CardContent className="content">
								<CardTitle>Clean BicCampus</CardTitle>
								<Description>
									by 2024,we will have clean campus for all
									Arabic colleges in Kerala.we will work together for that
								</Description>
							</CardContent>
						</CardItem>
						<CardItem>
							<CardImg src={study} />
							<CardContent className="content">
								<CardTitle>e-world for kerala-Arabic students</CardTitle>
								<Description>
									we will not release further details about this
								</Description>
							</CardContent>
						</CardItem>
						<CardItem>
							<CardImg src={equal} />
							<CardContent className="content">
								<CardTitle>Equal education for all</CardTitle>
								<Description>
									The rich and the poor alike learn in good circumstances
								</Description>
							</CardContent>
						</CardItem>
					</BottomSection>
				</MissionWrapper>
			</MissionSection>
		</>
	);
}

export default Mission;
