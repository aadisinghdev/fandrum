import React, { useContext, useEffect, useState } from 'react'
import { Accordion, Image, Nav, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import logo from './../../assets/images/logoimg/fandrum.svg'
import ServiceSection from './component/ServiceSection'
import SidebarAccordion from '../../utils/SidebarAccordio'
import Context from '../../store/context'

const Sidebar = (props) => {
	const { globalState, globalDispatch } = useContext(Context);

    const [sign, setSign]=useState('remove')
    // function ExpandAccordion(){
    //     var acc = document.getElementsByClassName("accordion");
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
        // setSign(SidebarAccordion('discover-panel',sign))
        document.getElementById('discover-panel').style.display='block'
        // document.getElementById('active-movie').activeStyle.color=''
	},[])

	

    return (
        <div className={`logo-and-menu-section ${globalState.sidebarCustomClass}`}>
            {/* logo section on right side header */}
            <div className="brand-logo">
                <a target='_blank' href="https://www.fandrum.in/">
                    <Image src={logo} className="img-fluid" />
                </a>
            </div>
            {/* sidebar constants  */}


            <div className="menu">
                <ul className="listing-menu m-0 p-0 pl-78 pt-20">
                    <li>
                    {/* <a target={"_blank"} href="https://www.fandrum.in/" className=""> */}
                        {/* <a target={"_blank"} href="https://www.fandrum.in/" activeStyle={{fontWeight: "normal",color: "#db3060"}} className="d-flex">
                            <span className="material-icons icons_side_nav mr-5">home</span>Home
                        </a> */}
                        <NavLink activeStyle={{fontWeight: "normal",color: "#610085"}} className="d-flex" to="/home">
                            <span className="material-icons icons_side_nav mr-5">grade</span> Home
                        </NavLink>
                    </li>

                    {/* <Accordion flush as={'li'}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <a href="#" className="d-flex">
                                    <span className="material-icons icons_side_nav">visibility</span> Discover
                                </a>
                            </Accordion.Header>
                            <Accordion.Body as={"ul"}>
                                <NavLink className="nav-link" to="/movie">Movies</NavLink>
                                <NavLink className="nav-link" to="/shows">Shows</NavLink>
                                <NavLink className="nav-link" to="/watchlist">Watchlist</NavLink>
                                <NavLink className="nav-link" to="/subscription">Subscription</NavLink>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion> */}
                        {/* <li> */}
                        <button  className="accordion d-flex pt-1 pb-1 discover" onClick={() => { setSign(SidebarAccordion('discover-panel',sign)) }} >
                            <span className="material-icons icons_side_nav mr-5 add-to-watchlist a">visibility</span>Discover
                       {/* <div className=""> */}
                       {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                            <div className="pl-40"><span className="material-icons icons_side_nav add-to-watchlist a">{sign}</span></div></button>
                        {/* </div> */}
                        {/* </li> */}
                        {/* <span className="material-icons icons_side_nav mr-5 add-to-watchlist a">add</span> */}
                    <div className="panel" id='discover-panel'>
                        <li>
                                <NavLink activeStyle={{fontWeight: "normal",color: "#610085"}} id='active-movie' style={{fontSize:'14px'}} className="nav-link" to="/movie">Movies</NavLink>
                                <NavLink activeStyle={{fontWeight: "normal",color: "#610085"}}  style={{fontSize:'14px'}} className="nav-link" to="/shows">Shows</NavLink>
                                {/* <NavLink activeStyle={{fontWeight: "normal",color: "#db3060"}} id='nav-link' style={{fontSize:'14px'}} className="nav-link" to="/watchlist">Watchlist</NavLink>
                                <NavLink activeStyle={{fontWeight: "normal",color: "#db3060"}} id='nav-link' style={{fontSize:'14px'}} className="nav-link" to="/subscription">Subscription</NavLink> */}
                        </li>
                    </div>
                    

                    {/* <li>
                        <NavLink activeStyle={{fontWeight: "normal",color: "#db3060"}} className="d-flex" to="/rewards">
                            <span className="material-icons icons_side_nav mr-5">grade</span> Rewards
                        </NavLink>

                    </li> */}
                    {/* <li>
                        <NavLink activeStyle={{fontWeight: "normal",color: "#db3060"}} className="d-flex" to="/Setting">
                            <span className="material-icons icons_side_nav mr-5">settings</span> Setting
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{fontWeight: "normal",color: "#db3060"}} className="d-flex" to="/Promotions">
                            <span className="material-icons icons_side_nav mr-5">flight_land</span> Promotions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{fontWeight: "normal",color: "#db3060"}} className="d-flex" to="/logout">
                            <span className="material-icons icons_side_nav mr-5">logout</span> Logout
                        </NavLink>
                    </li>  */}
                </ul>
            </div>
            {/* service sectionon right side bar */}
            <ServiceSection />
        </div>
    )
}

export default Sidebar