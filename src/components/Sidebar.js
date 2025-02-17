import { NavLink } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";



const Sidebar = () => {
  return (
    <div className="v-col sidebar">
      <div className="logo">
        {/* img  */}
      </div>
      <div className="menu-one bar">
        <h3>Quick Start</h3>
        <ul>
          <li><NavLink to="/admin/introduction" end>Introduction</NavLink> <FontAwesomeIcon icon={faAngleUp} className="arrow-icon" /></li>
          <li><NavLink to="/  admin/configuration" end>Configuration</NavLink> <FontAwesomeIcon icon={faAngleUp} className="arrow-icon" /></li>
          <li><NavLink to="/admin/installation" end>Installation</NavLink> <FontAwesomeIcon icon={faAngleUp} className="arrow-icon" /></li>
        </ul>
      </div>

      <div className="line"></div>

      <div className="menu-two bar">
        <h3>UI Elements</h3>
        <ul>
          <li><NavLink to="/dashboard" end>Layout</NavLink> <FontAwesomeIcon icon={faAngleUp} className="arrow-icon" /></li>
          <li><NavLink to="/dashboard" end>Grids</NavLink> <FontAwesomeIcon icon={faAngleUp} className="arrow-icon" /></li>
          <li><NavLink to="/dashboard" end>Buttons</NavLink> <FontAwesomeIcon icon={faAngleUp} className="arrow-icon" /></li>
          <li><NavLink to="/dashboard" end>Forms</NavLink> <FontAwesomeIcon icon={faAngleUp} className="arrow-icon" /></li>
          <li><NavLink to="/dashboard" end>Cards</NavLink> <FontAwesomeIcon icon={faAngleUp} className="arrow-icon" /></li>
          <li><NavLink to="/dashboard" end>Navbar</NavLink> <FontAwesomeIcon icon={faAngleUp} className="arrow-icon" /></li>
          <li><NavLink to="/dashboard" end>Icons</NavLink> <FontAwesomeIcon icon={faAngleUp} className="arrow-icon" /></li>
        </ul>
      </div>

      <div className="line"></div>

      <div className="menu-three bar">
        <h3>Quick Start</h3>
        <ul>
          <li><NavLink to="/dashboard" end>Animations</NavLink> <FontAwesomeIcon icon={faAngleUp} className="arrow-icon" /></li>
          <li><NavLink to="/dashboard" end>Rendering</NavLink> <FontAwesomeIcon icon={faAngleUp} className="arrow-icon" /></li>
          <li><NavLink to="/dashboard" end>Routing</NavLink> <FontAwesomeIcon icon={faAngleUp} className="arrow-icon" /></li>
          <li><NavLink to="/dashboard" end>Validation</NavLink> <FontAwesomeIcon icon={faAngleUp} className="arrow-icon" /></li>
        </ul>
      </div>

      <div className="line"></div>

      {/* <ul>
        <li><NavLink to="/dashboard" end>Dashboard</NavLink></li>
        <li><NavLink to="/user" end>User</NavLink></li>
        <li><NavLink to="/settings" end>Settings</NavLink></li>
        <li><NavLink to="/Dashboard" end>Dashboard</NavLink></li>
      </ul> */}
    </div>
  )
}

export default Sidebar
