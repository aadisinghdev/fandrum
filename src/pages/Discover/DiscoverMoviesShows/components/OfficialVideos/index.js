import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';

import home_1 from 'assets/images/home/home_1.jpg'
import share from 'assets/images/home/share.png'
import like from 'assets/images/home/like.png'
import comment from 'assets/images/home/comment.png'
import promote from 'assets/images/home/promote.png'
import add from 'assets/images/home/add.png'
import VideoContainer from 'components/common/VideoContainer'

const OfficialVideos = ({ setIsPlaying, isPlaying, showsData = [], selectedSlideIndex = 0 }) => {
    const [playlistData, setPlaylistData] = useState([])

    useEffect(() => {
        const selectedSlideItems = showsData[selectedSlideIndex] ? showsData[selectedSlideIndex] : {}
        const youtubePlaylist = selectedSlideItems && selectedSlideItems.fndm_youtube_playlist ? selectedSlideItems.fndm_youtube_playlist : []
        setPlaylistData(youtubePlaylist)
    }, [[], selectedSlideIndex])


    const renderVideos = () => {
        const selectedSlideItems = showsData[selectedSlideIndex] ? showsData[selectedSlideIndex] : {}
        const youtubePlaylist = selectedSlideItems && selectedSlideItems.fndm_youtube_playlist ? selectedSlideItems.fndm_youtube_playlist : []
        return youtubePlaylist && youtubePlaylist.length ? youtubePlaylist.map((it, index) => {
            return <VideoContainer
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                key={index}
                profileImg={home_1}
                title={it.name}
                views={"4,147,102 views"}
                date={it.published_at}
                description={it.type}
                button={'Follow'}
                likeImg={like}
                addImg={add}
                commentImg={comment}
                shareImg={share}
                promoteImg={promote}
                url={it.key}
            />
        }) : null
    }
    return (
        <div>
            {playlistData && playlistData.length ? <h5>Official Videos</h5> : null}
            <OwlCarousel items={2}
                className="owl-carousel"
                // loop
                smartSpeed={1000}
                responsiveClass={true}
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
            >

                {/* render video containers */}
                {renderVideos()}
            </OwlCarousel>
        </div>
    )
}

export default OfficialVideos
