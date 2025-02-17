import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <>
            <div className="v-row header ">
                <div className="logo">
                    <img src="./" alt="logo" />
                </div>
                <div className="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                    <input type="text" placeholder="Search " />
                    <button className="search-button">Search</button>
                </div>
                <div className="login-button">
                    <button className="click-login">Login</button>
                </div>
            </div>
        </>
    )
}

export default Header
