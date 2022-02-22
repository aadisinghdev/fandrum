import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Ellipse89 from 'assets/images/inner/Ellipse 89.png';
import Ellipse90 from 'assets/images/inner/Ellipse 90.png';
import Ellipse91 from 'assets/images/inner/Ellipse 91.png';
import Ellipse92 from 'assets/images/inner/Ellipse 92.png';
import Ellipse93 from 'assets/images/inner/Ellipse 93.png';
import Ellipse94 from 'assets/images/inner/Ellipse 94.png';
import Ellipse95 from 'assets/images/inner/Ellipse 95.png';
import Ellipse96 from 'assets/images/inner/Ellipse 96.png';
import Group284 from 'assets/images/inner/Group 284.svg';


export const ViewUsers = () => {

    const renderViewUser = () => {
        return (
            <>
                <div className="mr-20 text-center">
                    <div className="wh-65 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
                        <img src={Ellipse96} className="img-fluid h-100 object-cover" />
                    </div>
                    <h5 className="font-12 text-danger mt-1 text-center view-user">Quinn</h5>
                </div>

                <div className="mr-20">
                    <div className="wh-65 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
                        <img src={Ellipse95} className="img-fluid h-100 object-cover" />
                    </div>
                    <h5 className="font-12 text-danger mt-1 text-center view-user">Alex</h5>
                </div>

                <div className="mr-20">
                    <div className="wh-65 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
                        <img src={Ellipse94} className="img-fluid h-100 object-cover" />
                    </div>
                    <h5 className="font-12 text-danger mt-1 text-center view-user">Sarah</h5>
                </div>

                <div className="mr-20">
                    <div className="wh-65 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
                        <img src={Ellipse93} className="img-fluid h-100 object-cover" />
                    </div>
                    <h5 className="font-12 text-danger mt-1 text-center view-user">Sebastian</h5>
                </div>

                <div className="mr-20">
                    <div className="wh-65 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
                        <img src={Ellipse92} className="img-fluid h-100 object-cover" />
                    </div>
                    <h5 className="font-12 text-danger mt-1 text-center view-user">Stevy</h5>
                </div>

                <div className="mr-20">
                    <div className="wh-65 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
                        <img src={Ellipse91} className="img-fluid h-100 object-cover" />
                    </div>
                    <h5 className="font-12 text-danger mt-1 text-cente view-user">Jose</h5>
                </div><div className="mr-20">
                    <div className="wh-65 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
                        <img src={Ellipse90} className="img-fluid h-100 object-cover" />
                    </div>
                    <h5 className="font-12 text-danger mt-1 text-center view-user">Alita</h5>
                </div><div className="mr-20">
                    <div className="wh-65 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
                        <img src={Ellipse89} className="img-fluid h-100 object-cover" />
                    </div>
                    <h5 className="font-12 text-danger mt-1 text-center view-user">Andrew</h5>
                </div>

                <div className="mr-20">
                    <div className="wh-65 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
                        <img src={Ellipse91} className="img-fluid h-100 object-cover" />
                    </div>
                    <h5 className="font-12 text-danger mt-1 text-center view-user">Jose</h5>
                </div>
                <div className="mr-20">
                    <div className="wh-65 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
                        <img src={Ellipse90} className="img-fluid h-100 object-cover" />
                    </div>
                    <h5 className="font-12 text-danger mt-1 text-center view-user">Alita</h5>
                </div>
                <div className="mr-20">
                    <div className="wh-65 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
                        <img src={Ellipse89} className="img-fluid h-100 object-cover" />
                    </div>
                    <h5 className="font-12 text-danger mt-1 text-center view-user">Andrew</h5>
                </div>

                <div className="mr-20">
                    <div className="wh-65 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
                        <img src={Ellipse91} className="img-fluid h-100 object-cover" />
                    </div>
                    <h5 className="font-12 text-danger mt-1 text-center view-user">Jose</h5>
                </div>
                <div className="mr-20">
                    <div className="wh-65 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
                        <img src={Ellipse90} className="img-fluid h-100 object-cover" />
                    </div>
                    <h5 className="font-12 text-danger mt-1 text-center view-user">Alita</h5>
                </div>
                <div className="mr-20">
                    <div className="wh-65 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
                        <img src={Ellipse89} className="img-fluid h-100 object-cover" />
                    </div>
                    <h5 className="font-12 text-danger mt-1 text-center">Andrew</h5>
                </div>
            </>
        )
    }

    return <>
        <div className="d-flex align-items-center px-2 pt-5 smallCarousel text-center overflow-x">
            <div className="mr-20">
                <div className="wh-65 bg-pink flex-shrink-0 rounded-pill overflow-hidden">
                    <div className="d-flex align-items-center justify-content-between h-100">
                        {/* <span className="material-icons icons_side_nav font-30 m-0-auto text-danger">thumb_up_alt</span> */}
                        <img className="pl-05" src={Group284} />
                    </div>
                </div>
                <h5 className="font-12 text-danger mt-1 text-center">View all</h5>
            </div>
            <OwlCarousel items={1}
                className="owl-carousel"
                // loop
                smartSpeed={1000}
                responsiveclass={true}
                responsive={{
                    0: {
                        items: 1,
                    },
                    400: {
                        items: 4,
                    },
                    600: {
                        items: 5,
                    },
                    700: {
                        items: 6,
                    },
                    1000: {
                        items: 8,

                    }
                }}

                nav
                margin={18}
                rewind={true}
            >
                {renderViewUser()}
            </OwlCarousel>
        </div>
    </>;
};
export default ViewUsers
