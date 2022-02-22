import React, { useState } from 'react'
import { Button, Image } from 'react-bootstrap'
import YouTube from 'react-youtube'
import ActionButton from '../ActionButton'
import VideoPopup from '../VideoPopup'

const VideoContainer = (
    { profileImg,
        setIsPlaying,
        isPlaying,
        title = "",
        views = "",
        date = "",
        description,
        button,
        likeImg,
        addImg,
        commentImg,
        shareImg,
        promoteImg,
        url = ""
    }) => {

    const opts = {
        height: '250px',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };
    console.log(isPlaying);
    return (
        <div>
            <div className="" >
                {/* <Image src={profileImg} className="img-fluid" /> */}
                {/* render youtube videos */}
                <YouTube
                    videoId={url}
                    opts={opts}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnd={() => setIsPlaying(false)}
                />

            </div>
            <div className="p-2 bg-white border">
                <h5 className="font-18 mb-1 text-ellipsis">{title}</h5>
                {/* <h6 className="font-12 mb-2">{views}{date}</h6> */}
                {/* <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                        <div className="wh-45 bg-dark rounded-pill overflow-hidden user-image flex-shrink-0">
                            <Image src={profileImg} className="img-fluid h-100 object-cover" />
                        </div>
                        <h5 className="font-12 mb-0 pl-10 text-ellipsis">{description}</h5>
                    </div>
                    <div>
                        <Button type="button" className="btn btn-purple">{button}</Button>
                    </div>
                </div> */}
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        {/* Show action buttons */}
                        {/* <ActionButton image={likeImg} />
                        <ActionButton image={commentImg} />
                        <ActionButton image={shareImg} />
                        <ActionButton image={promoteImg} /> */}
                    </div>
                    <div>
                        {/* <div className="wh-45 d-flex align-items-center justify-content-between">
                            <a href="javascript:void(0)">
                                <Image src={addImg} className="img-fluid" width="45" height="45" />
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoContainer
