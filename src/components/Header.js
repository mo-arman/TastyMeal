import { Link } from "react-router-dom";
import logo from "../../logo.png";
import usericon from "../../user icon.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={logo} />
      </div>
      <div>
        <img className="logo-user" src={usericon} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
