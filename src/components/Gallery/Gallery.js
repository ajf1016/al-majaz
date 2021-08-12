import React from "react";

import {
	GallerySection,
	GalleryWrapper,
	GalleryTopSection,
	GalleryHeading,
	BottomSection,
	ImageContainer,
	ImageItem,
	GalleryImage,
} from "./GalleryElements";

function Gallery() {
	return (
		<>
			<GallerySection id="gallery">
				<GalleryWrapper>
					<GalleryTopSection>
						<GalleryHeading>Gallery</GalleryHeading>
					</GalleryTopSection>
					<BottomSection>
						<ImageContainer>
							<ImageItem>
								<GalleryImage
									src={require("../images/1.JPG").default}
								/>
							</ImageItem>
							<ImageItem>
								<GalleryImage
									src={require("../images/2.JPG").default}
								/>
							</ImageItem>
							<ImageItem>
								<GalleryImage
									src={require("../images/N.jpg").default}
								/>
							</ImageItem>
						</ImageContainer>
					</BottomSection>
				</GalleryWrapper>
			</GallerySection>
		</>
	);
}

export default Gallery;
