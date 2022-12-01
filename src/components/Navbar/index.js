import logo from "../../assets/logo-dark-defi-id.png";
import "./style.scss";
import { Link as LinkHome } from "react-router-dom";

const Navbar = (props) => {
  const { staticAssets } = props;
  const navList = staticAssets.navbarList;

  return (
    <div className="navbar">
      <div className="navbar-top">
      <LinkHome to='/'><img src={logo} alt="logo"></img></LinkHome>
      </div>
      <div className="navbar-bottom">
        {navList.map((item) => (
          <a
            className="navbar-link"
            id={item.id}
            href={item.url}
            key={item.id}
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
