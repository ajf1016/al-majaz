import React, { useEffect, useState } from "react";
import {
	MembersSection,
	MembersWrapper,
	BottomSection,
	MembersItems,
	MembersCard,
	CardTop,
	CardBottom,
	MemberImage,
	MemberName,
	MemberSocial,
	BtnLeft,
	BtnRight,
	TopSection,
	Heading,
} from "./MembersElements";

import { AiOutlineInstagram } from "react-icons/ai";
import memberList from "./Data";

function Members() {
	const [members] = useState(memberList);
	const [index, setIndex] = useState(0);
	useEffect(()=> {
		const lastIndex = members.length -1;
		if(index < 0){
			setIndex(lastIndex);
		}
		if(index > lastIndex){
			setIndex(0);
		}
	})
	useEffect(()=> {
		let slider = setInterval(()=>{
			setIndex(index + 1)
		},2500)
		return () => clearInterval(slider)
	},[index])
	return (
		<>
			<MembersSection id="members">
				<MembersWrapper>
					<TopSection>
						<Heading>Members</Heading>
					</TopSection>
					<BottomSection>
						<BtnLeft onClick={()=> setIndex(index -1)}/>
						<MembersItems>
							{members.map((member, memberIndex) => {
								//more stuff coming up
								let position = "nextSlide";
								if (memberIndex === index) {
									position = "activeSlide";
								}
								if (
									memberIndex === index - 1 ||
									(index === 0 &&
										memberIndex === members.length - 1)
								) {
									position = "lastSlide";
								}
								return (
									<MembersCard
										key={memberIndex}
										className={position}
									>
										<CardTop>
											<MemberImage src={member.photo} />
										</CardTop>
										<CardBottom>
											<MemberName>
												{member.name}
											</MemberName>
											<MemberSocial
												href={member.instaId}
												target="blank"
											>
												<AiOutlineInstagram />
											</MemberSocial>
										</CardBottom>
									</MembersCard>
								);
							})}
						</MembersItems>
						<BtnRight onClick={()=> setIndex(index +1)}/>
					</BottomSection>
				</MembersWrapper>
			</MembersSection>
		</>
	);
}

export default Members;
