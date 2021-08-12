import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { DropUp, DropBtn, DropContent, DropLink} from "./SideNavElements";

function SideNav() {
	const [click, setClick] = useState(false);

	const showMenu = () => {
		setClick(!click);
	};

	return (
		<>
			<DropUp>
				<DropBtn className="ball" onClick={showMenu}>
					<HiOutlineMenuAlt3 />
				</DropBtn>
				<DropContent className="drop-content" click={click}>
					<DropLink
						to="home"
						spy={true}
						smooth={true}
						offset={0}
						duration={700}
						onClick={showMenu}
					>
						Home
					</DropLink>
					<DropLink
						to="about"
						spy={true}
						smooth={true}
						offset={0}
						duration={700}
						onClick={showMenu}
					>
						About
					</DropLink>
					<DropLink
						to="mission"
						spy={true}
						smooth={true}
						offset={0}
						duration={700}
						onClick={showMenu}
					>
						Mission
					</DropLink>
					<DropLink
						to="gallery"
						spy={true}
						smooth={true}
						offset={0}
						duration={700}
						onClick={showMenu}
					>
						Gallery
					</DropLink>
					<DropLink
						to="members"
						spy={true}
						smooth={true}
						offset={0}
						duration={700}
						onClick={showMenu}
					>
						Members
					</DropLink>
					<DropLink
						to="donate"
						spy={true}
						smooth={true}
						offset={0}
						duration={700}
						onClick={showMenu}
					>
						Donate
					</DropLink>
				</DropContent>
			</DropUp>
		</>
	);
}

export default SideNav;
