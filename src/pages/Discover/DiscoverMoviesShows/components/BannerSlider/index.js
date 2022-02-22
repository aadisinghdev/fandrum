import React, { useState } from 'react'
import { Button, Carousel, Image } from 'react-bootstrap'
import { useHistory, useLocation } from "react-router-dom"
import prime from 'assets/images/home/prime.png'
import netflix from 'assets/images/home/netflix.png'
import disney from 'assets/images/home/disney.png'
import hotstar from 'assets/images/home/hotstar.png'
import plus from 'assets/images/home/plus.png'
import cross from 'assets/images/home/cross.png'
import rock from 'assets/images/home/rock.png'
import info from 'assets/images/home/info.png'
import play from 'assets/images/home/play.png'
import girl from 'assets/images/home/the-girl.jpeg'
import weekAway from 'assets/images/home/week-away.jpeg'
import holidate from 'assets/images/home/holidate.jpeg'
import deep from 'assets/images/home/deep.jpeg'
import loveAj from 'assets/images/home/love-aj-kal.jpeg'
import home_1 from 'assets/images/home/home_1.jpg'
import Cards from '../Cards'
import ShowsActionBtn from 'components/common/ActionButton/ShowsActionBtn'
import VideoPopup from 'components/common/VideoPopup'


const BannerSlider = ({ showsData = [], isPlaying, setSelectedSlideIndex, setIsPlaying }) => {
    const [showVideoPopup, setShowVideoPopup] = useState(false)
    const [popupVideoUrl, setPopupVideoUrl] = useState({ title: '', videoUrl: "" })

    const history = useHistory()
    const location = useLocation()

    const imageObj = {
        netflix: netflix,
        prime: prime,
        disney: disney,
        hotstar: hotstar
    }
    // Method call when silide slide change
    const handleSelect = (selectedIndex) => {
        setSelectedSlideIndex(selectedIndex)
        setIsPlaying(false)
    };
    const showBannerVideoPopup = (title, url) => {
        setPopupVideoUrl({ videoUrl: url, title: title })
        setShowVideoPopup(true)
    }
    const hideBanerVideoPopup = () => {
        setShowVideoPopup(false)
    }

    const handleDetailPageCLick = (item) => {
        // set items to local storage
        // localStorage.setItem("movieDetail", item)
        history.push({
            pathname: `${location.pathname}/detail`,
            itemDetails: item,
            backUrl : location.pathname
        })

    }
    
    const renderSliderItems = () => {
        return showsData && showsData.length ? showsData.map((item, ind) => {
            return <Carousel.Item className="mb-5">
                <div className="carousel-item active">
                    <div className="dashboard-post-box bg-white gradient-overlay" style={{ "backgroundImage": `url(${item.backdropURLs[780]})` }}>
                        <div className="w-50 position-relative">
                            <div className="h-120 pr-35">
                                <h2 className="text-white mb-1 text-ellipsis">{item.title}</h2>

                                {/* {item.fndm_genresValues && item.fndm_genresValues.map((genres, index) => {
                                return index < 5 ? <h5 key={index} className="text-blue text-uppercase">{genres || ".. ."}</h5> : null
                            })
                            } */}

                                {/* render genres on baner to match key from showGenres object */}

                                <h5 className="text-blue text-uppercase">{item.fndm_genresValues ? item.fndm_genresValues.slice(0, 5).join(', ') : null}</h5>

                                <h4 className="text-white fw-bolder mb-20">{((item.imdbRating * 1 + item.tmdbRating * 1) / 20)}/10</h4>
                            </div>
                            <div className="pb-3 d-flex h-34-px custom-scroll-buttons">

                                {/* render keywords on baner as buttons */}

                                {item.fndm_keywords && item.fndm_keywords.map((keyword, i) => {
                                    return i < 3 ? <Button key={i} type="button" className="btn btn-danger mr-10 white-space-nowrap h-34-px">{keyword.name || "..."}</Button> : null

                                })}


                            </div>
                            <div className="h-120 pr-35">
                                <p className="text-white mb-5">{item.overview ? `${item.overview.substring(0, 140)}...` : ''}
                                </p>
                            </div>

                            <div className="d-flex position-relative z-index-9" >
                                {/* Show shows action buttons */}
                                {/* render streamingInfo */}
                                {Object.keys(item.streamingInfo).map((streamingKey, ind) => {
                                    const streamingValues = item.streamingInfo[streamingKey] && item.streamingInfo[streamingKey].in

                                    // console.log(imageObj[streamingKey], streamingKey)
                                    return < ShowsActionBtn
                                        key={ind}
                                        url={streamingValues ? streamingValues.link : ""}
                                        image={imageObj[streamingKey]}
                                        imgAlt={streamingKey}
                                        title={`Watch on ${streamingKey}`}
                                    />
                                })}

                                {/* < ShowsActionBtn url={"#"} image={prime} title={"Watch on prime"} /> */}
                                {/* <ShowsActionBtn url={"#"} image={plus} title={"Add to wishlist"} />
                                <ShowsActionBtn url={"#"} image={cross} title={"Close it"} />
                                <ShowsActionBtn url={"#"} image={rock} title={"Liked"} /> */}
                                {/* <ShowsActionBtn url={"#"} image={info} title={"Information"} /> */}

                                {/* <div className="flex-shrink-0  bg-white rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center">
                                    <a className="p-12 tooltip-hover" onClick={() => handleDetailPageCLick(item)}>
                                        <img src={info} className="img-fluid" alt={'Information'} />
                                        <div className="tooltip-inner">{"Information"}</div>
                                    </a>
                                </div> */}
                                <div className="flex-shrink-0   rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center">
                                    <a className="p-12 tooltip-hover" onClick={() => handleDetailPageCLick(item)}>
                                        <img src={info} className="img-fluid" alt={'Information'} />
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="bg-success p-2 free-label text-white px-3 py-1 fw-bolder">Subscription</div>
                        <div className="p-2 play-icon text-white px-3 py-1 fw-bolder">
                            <a href='javascript:void(0)' className="pointer" onClick={() => showBannerVideoPopup(item.title, item.video)}>
                                <Image src={play} className="img-fluid" />
                            </a>
                        </div>

                    </div>
                </div>
            </Carousel.Item >
        }) : null
    }
    return (
        <div className="pt-5">
            <Carousel indicators={false} interval={isPlaying?10000000000:10000} onSelect={handleSelect}>
                {renderSliderItems()}

                {/* <Carousel.Item>
                    <div className="carousel-item active">
                        <div className="dashboard-post-box banner-2 bg-dark-blue">
                            <div className="position-relative">
                                <div className="row">
                                    <div className="col-xxl-3 col-xl-4 col-md-3 col-4 d-sm-flex d-none">
                                        <div className="d-flex align-items-center justify-content-center h-100">
                                            <div className="wh-75 flex-shrink-0 border border-white rounded-pill overflow-hidden user-image">
                                                <img src={home_1} className="img-fluid h-100 object-cover" />
                                            </div>
                                            <div className="pl-10">
                                                <h3 className="font-26 mb-1 text-white text-ellipsis">Quinn</h3>
                                                <h6 className="text-blue mb-0">Follow</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-9 col-xl-8 col-md-9 col-sm-8">
                                        <div className="row">
                                            <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-7">
                                                <div className="bg-success bg-img-show position-relative">
                                                    <a href="#">
                                                        <img src={girl} className="img-fluid w-100 h-100 object-cover" />
                                                    </a>
                                                    <a href="#" className="bg-danger text-white t-d-n img-show-content font-16">
                                                        The Girl On The Train
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-5 d-md-flex d-none">
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-12 col-lg-6 col-md-12">
                                                        <div className="bg-success sm-img-show position-relative w-100 mb-3">
                                                            <a href="#">
                                                                <img src={weekAway} className="img-fluid w-100 h-100 object-cover" />
                                                            </a>
                                                            <a href="#" className="bg-danger text-white t-d-n img-show-content font-12">
                                                                A Week Away
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-12 col-lg-6 col-md-12">
                                                        <div className="bg-success sm-img-show position-relative w-100 mb-xxl-3">
                                                            <a href="#">
                                                                <img src={holidate} className="img-fluid w-100 h-100 object-cover" />
                                                            </a>
                                                            <a href="#" className="bg-danger text-white t-d-n img-show-content font-12">
                                                                Holidate
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-12 col-md-6 d-xxl-flex d-xl-none d-lg-flex d-none">
                                                        <div className="bg-success sm-img-show position-relative w-100 mb-0">
                                                            <a href="#">
                                                                <img src={deep} className="img-fluid w-100 h-100 object-cover" />
                                                            </a>
                                                            <a href="#" className="bg-danger text-white t-d-n img-show-content font-12">
                                                                Deep
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-12 col-md-6 d-xxl-flex d-xl-none d-lg-flex d-none">
                                                        <div className="bg-success sm-img-show position-relative w-100 mb-0">
                                                            <a href="#">
                                                                <img src={loveAj} className="img-fluid w-100 h-100 object-cover" />
                                                            </a>
                                                            <a href="#" className="bg-danger text-white t-d-n img-show-content font-12">
                                                                Love Aaj Kal
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item> */}
            </Carousel>
            <VideoPopup
                showVideoPopup={showVideoPopup}
                hideBanerVideoPopup={hideBanerVideoPopup}
                youtubeUrl={popupVideoUrl}
            />
        </div>
    )
}

export default BannerSlider
