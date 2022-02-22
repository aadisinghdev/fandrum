import React from 'react'
import VideoContainer from '../../../../../../components/common/VideoContainer';
import OwlCarousel from 'react-owl-carousel';
const MoviesPlaylist = ({ itemDetails = {} }) => {
    const { fndm_youtube_playlist } = itemDetails

    const renderPlaylist = () => {
        return fndm_youtube_playlist && fndm_youtube_playlist.length ? fndm_youtube_playlist.map((itm, index) => {
            return <VideoContainer
                key={index}
                url={itm.key}
                title={itm.name}
            // isPlaying={isPlaying}
            // setIsPlaying={setIsPlaying}
            // profileImg={home_1}
            // views={"4,147,102 views"}
            // date={it.published_at}
            // description={it.type}
            // button={'Follow'}
            // likeImg={like}
            // addImg={add}
            // commentImg={comment}
            // shareImg={share}
            // promoteImg={promote}
            />
        }) : null
    }
    return (
        <div>
            {
                fndm_youtube_playlist && fndm_youtube_playlist.length ? <div className="mb-5">
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
                >
                    {renderPlaylist()}
                </OwlCarousel>
             </div>
            :null
           }
        </div>
    )
}

export default MoviesPlaylist
