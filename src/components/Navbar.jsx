import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    <nav>
      <div className="nav--title">
        <img src={logo} alt="logo" />
        <h3>Bader's Travels</h3>
      </div>
      <button
        className="nav--theme-btn"
        id="themeButton"
        onClick={(event) => props.toggleTheme()}
      >
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </button>
    </nav>
  );
};

export default Navbar;
