import React from 'react';
import VideoContainer from 'components/common/VideoContainer';
import OwlCarousel from 'react-owl-carousel';

export const OfficialVideos = () => {

	const renderPlaylist = () => {
		return <>
			<VideoContainer
				url={"ii3n7hYQOl4"}
				title={"Spider-Man"}
			/>
			<VideoContainer
				url={"ii3n7hYQOl4"}
				title={"Spider-Man"}
			/>
			<VideoContainer
				url={"ii3n7hYQOl4"}
				title={"Spider-Man"}
			/>
		</>
	}

	return (

		<div>
			{
				<div className="mb-5">
					<h5 className="fw-bold">Official Videos</h5>
					<OwlCarousel items={2}
						className="owl-carousel"
						// loop
						smartSpeed={1000}
						responsiveclass={true}
						responsive={{
							0: {
								items: 1,
							},
							400: {
								items: 1,
							},
							600: {
								items: 1,
							},
							700: {
								items: 2,
							},
							1000: {
								items: 2,

							}
						}}

						nav
						margin={18}
						rewind={true}
					>
						{renderPlaylist()}
					</OwlCarousel>
				</div>
			}
		</div>
	)

};

export default OfficialVideos