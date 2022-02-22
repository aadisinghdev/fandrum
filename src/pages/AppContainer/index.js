import React,{useContext} from 'react'
import RightSidebar from '../../components/RightSidebar'
import Sidebar from '../../components/Sidebar'
import Content from './component/Content'
import { useLocation } from "react-router-dom"
import Context from '../../store/context'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import logo from '../../assets/images/logoimg/fandrum.svg'

const App = (props) => {

	const { globalState, globalDispatch } = useContext(Context);

    // handle sidebar button click on mobile view to open sibar
	const handleSidebar = () => {
		// set global state to change classes to show sidebar
		globalDispatch({ type: "IS_SIDEBAR_OPEN", payload: !globalState.sidebar });
	}

	// handle chat button click on mobile view to open chat section
	const handleChatSection = () => {
		// set global state to change classes to show chat section
		globalDispatch({ type: "IS_CHAT_SECTION_OPEN", payload: !globalState.sidebar });
	}

	// hide chat section and sidebar on shadow click (outside the sidebaror chat)
	const handleShadowClick = () => {
		globalDispatch({
			type: "IS_SIDEBAR_OPEN", payload: false
		});

		globalDispatch({
			type: "IS_CHAT_SECTION_OPEN", payload: false
		});
	}

    const location = useLocation()
    return (
        <div className="main-container">

            {
                    location.pathname != '/movie/detail' && location.pathname != '/shows/detail' ? <Sidebar /> : null
            }

            <div className={`shadow-background ${globalState.sidebarCustomClass} ${globalState.chatCustomClass}`} onClick={handleShadowClick}></div>
			<div className="dashboard-section">

				<div className="logo-responsive">
					<div className="material-icons icons_side_nav mr-5 d-flex align-items-center"
						onClick={handleSidebar}
					>menu</div>

					<div className="brand-logo">
						<Link to="/home">
							<Image src={logo} className="img-fluid" />
						</Link>
					</div>
					<div className="material-icons icons_side_nav mr-5 d-flex align-items-center" onClick={handleChatSection}>question_answer</div>
				</div>

				{/* render loader according tot he loading state change  */}
				{/* {loading ? <Loader /> : null} */}

				<div className="search-input text-center mb-20">
					{/* <div className="search-input text-center mb-20">
					<form action="/action_page.php">
						<label className="position-relative custom-serach-box">
							<input type="search" id="gsearch" name="gsearch" placeholder="Search" className="border-0" />
							<div className="icon-search">
								<img src={search} className="img-fluid" width="15" height="15" />
							</div>
						</label>
					</form>	
				</div> */}

				</div>
                {/* render left sidebar 
                <Sidebar /> */}
                

                {/* render the dashboard content page e.g : discover */}
                <Content />

                {/* render right side bar ot chat section */}
                {/* <RightSidebar /> */}
                

            </div>

            {
                    location.pathname != '/movie/detail' && location.pathname != '/shows/detail' ? <RightSidebar /> : null
            }
			
        </div>
    )
}

export default App