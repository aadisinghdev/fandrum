import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import SidebarAccordion from '../../../../utils/SidebarAccordio'

const ServiceSection = () => {

    const [companySign, setComapnySign]=useState('add')
    const [policySign, setPolicySign]=useState('add')
    const [foryouSign, setForyouSign]=useState('add')

    // function ExpandAccordion(){
    //     var acc = document.getElementsByClassName("company-accordion");
	//     var i;
	// 	for (i = 0; i < acc.length; i++) {
	// 	acc[i].addEventListener("click", function() {
	// 		this.classList.toggle("active");
	// 		var panel = this.nextElementSibling;
	// 		if (panel.style.display === "block") {
	// 		panel.style.display = "none";
    //         setSign('add')
	// 		} else {
	// 		panel.style.display = "block";
    //         setSign('remove')
	// 		}
	// 	});
	// 	}
    // }
    useEffect(() => {
        // ExpandAccordion();

	},[])

    return (
        <div className="services-section">
            <div className="services">
                <div className="company-setion">
                    {/* <div className="company">
                        <a href="#" className="text-purple">Company</a>
                    </div>
                    <div className="company-menu">
                        <p className="m-0 pb-0">About The Company</p>
                        <p className="m-0 pb-0">Corporate Information</p>
                        <p className="m-0 pb-0">Jobs</p>
                        <p className="m-0">Media Center</p>
                    </div> */}
                    <button className="company-accordion d-flex pt-1 pb-1 company font-12" onClick={() => { setComapnySign(SidebarAccordion('company-panel',companySign)) }}>Company
                      <div className="pl-40"><span className="material-icons icons_side_nav add-to-watchlist a">{companySign}</span></div></button>
                        {/* </li> */}
                        {/* <span className="material-icons icons_side_nav mr-5 add-to-watchlist a">add</span> */}
                    <div className="company-panel" id='company-panel'>
                        {/* <li> */}
                                <a target={"_blank"} activeStyle={{fontWeight: "normal",color: "#610085"}} id='company-nav-link' className="nav-link font-14" href="https://www.fandrum.in/about/">About The Company</a>
                                <a target={"_blank"} activeStyle={{fontWeight: "normal",color: "#610085"}} id='company-nav-link' className="nav-link font-14" href="https://www.fandrum.in/features/">Feature</a>
                                <a target={"_blank"} activeStyle={{fontWeight: "normal",color: "#610085"}} id='company-nav-link' className="nav-link font-14" href="https://www.fandrum.in/contact/">Careers</a>
                                <a target={"_blank"} activeStyle={{fontWeight: "normal",color: "#610085"}} id='company-nav-link' className="nav-link font-14" href="https://www.fandrum.in/brand-toolkit/">Brand Toolkit</a>
                        {/* </li> */}
                    </div>
                </div> 



                {/* <div className="company-setion">
                    <Accordion  >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <div className="company">
                                    <a href="#" className="text-purple">Policies</a>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className="company-menu">
                                <a target={"_blank"} href="https://www.fandrum.in/privacy-policy/" className=""><p className="m-0 pb-0">Privacy Policy</p></a>
                                <a target={"_blank"} href="https://www.fandrum.in/community-guidelines/" className=""> <p className="m-0 pb-0">Community Guidelines</p></a>
                                <a target={"_blank"} href="https://www.fandrum.in/terms-and-conditions/" className=""> <p className="m-0 pb-0">T & C</p></a>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div> */}
                <div className="company-setion">
                    {/* <div className="company">
                        <a href="#" className="text-purple">Company</a>
                    </div>
                    <div className="company-menu">
                        <p className="m-0 pb-0">About The Company</p>
                        <p className="m-0 pb-0">Corporate Information</p>
                        <p className="m-0 pb-0">Jobs</p>
                        <p className="m-0">Media Center</p>
                    </div> */}
                    <button className="company-accordion d-flex pt-1 pb-1 company font-12" onClick={() => { setPolicySign(SidebarAccordion('policy-panel',policySign)) }}>Policies
                       <div className="pl-50"><span className="material-icons icons_side_nav add-to-watchlist a">{policySign}</span></div></button>
                        {/* </li> */}
                        {/* <span className="material-icons icons_side_nav mr-5 add-to-watchlist a">add</span> */}
                    <div className="company-panel" id='policy-panel'>
                        {/* <li> */}
                                <a target={"_blank"} activeStyle={{fontWeight: "normal",color: "#610085"}} id='company-nav-link' className="nav-link font-14" href="https://www.fandrum.in/privacy-policy/">Privacy Policy</a>
                                <a target={"_blank"} activeStyle={{fontWeight: "normal",color: "#610085"}} id='company-nav-link' className="nav-link font-14" href="https://www.fandrum.in/community-guidelines/">Community Guidelines</a>
                                <a target={"_blank"} activeStyle={{fontWeight: "normal",color: "#610085"}} id='company-nav-link' className="nav-link font-14" href="https://www.fandrum.in/terms-and-conditions/">T & C</a>
                        {/* </li> */}
                    </div>
                </div> 
                <div className="company-setion">
                    {/* <div className="company">
                        <a href="#" className="text-purple">Company</a>
                    </div>
                    <div className="company-menu">
                        <p className="m-0 pb-0">About The Company</p>
                        <p className="m-0 pb-0">Corporate Information</p>
                        <p className="m-0 pb-0">Jobs</p>
                        <p className="m-0">Media Center</p>
                    </div> */}
                    <button className="company-accordion d-flex pt-1 pb-1 company font-12" onClick={() => { setForyouSign(SidebarAccordion('foryou-panel',foryouSign)) }}>For You
                        <div className="pl-50"><span className="material-icons icons_side_nav add-to-watchlist a">{foryouSign}</span></div></button>
                        {/* </li> */}
                        {/* <span className="material-icons icons_side_nav mr-5 add-to-watchlist a">add</span> */}
                    <div className="company-panel" id='foryou-panel'>
                        {/* <li> */}
                                <a target={"_blank"} activeStyle={{fontWeight: "normal",color: "#610085"}} id='company-nav-link' className="nav-link font-14" href="https://www.fandrum.in/celebrities-and-influencers">Celebrities And Influencers</a>
                                <a target={"_blank"} activeStyle={{fontWeight: "normal",color: "#610085"}} id='company-nav-link' className="nav-link font-14" href="https://www.fandrum.in/about/">Advertisers Broadcasters</a>
                        {/* </li> */}
                    </div>
                </div> 
                 <div className='company-section'>
                 <a target={"_blank"} className="text-help font-15" href="https://www.fandrum.in/contact/">Help</a>
                </div>
            </div>
            <p className="pl-50 font-10">Copyright © Miles To Go Media Private Limited 2022</p>
        </div>
    )
}

export default ServiceSection
