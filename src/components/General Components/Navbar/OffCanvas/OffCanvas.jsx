import {Offcanvas} from "react-bootstrap";
import BigNav from "../BigNav/BigNav.jsx";
import { Link } from "react-router-dom";
import RightMenuIcon from "../RightMenuIcon/RightMenuIcon.jsx";
import RightMenu1 from "../RightMenu1/RightMenu1.jsx";
import RightMenu2 from "../RightMenu2/RightMenu2.jsx";
import "./OffCanvas.scss";

function OffcanvasNav({showOffCanvas, handleCloseOffCanvas, active, setActive, where,handleCloseModal,handleShowModal,handleCloseAll, rightMenu, setRightMenu}) {
    
    // it will come from Context
    // const activeUser={name:"Ömer"}
    const activeUser=null;

    return (
      <>
        <Offcanvas scroll show={showOffCanvas}  onHide={handleCloseOffCanvas} placement="top" > 
          <Offcanvas.Body id="body">
          <div className="logo-container">
            <Link to="/">
              <img src="https://www.nest-mv.de/images/nest-logo-web-negativ.svg"/>
            </Link>
          </div>
          <BigNav where={where} active={active} setActive={setActive} handleCloseModal={handleCloseModal} handleShowModal={handleShowModal} handleCloseAll={handleCloseAll}/>
          <div className="right-menu-container">
            <Link className="switch-to-hosting" to="hostingPage1">Switch to Hosting</Link>
            <RightMenuIcon setRightMenu={setRightMenu} rightMenu={rightMenu}/>
            {activeUser ? rightMenu && <RightMenu2 setRightMenu={setRightMenu}/> : rightMenu && <RightMenu1 setRightMenu={setRightMenu}/>}
          </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  export default OffcanvasNav;