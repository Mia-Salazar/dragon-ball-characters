import { Link } from "react-router-dom";

import CastImage from '../../../assets/cast.png'

import './Header.css'

const Header = () => {
  return (
    <header className="header">
        <Link to="/search" className="header-link">
            <h1 className="header-title">Dragon Ball character finder</h1>
        </Link>
        <figure className="header-wrapper">
            <img className="image" alt="" src={CastImage} />
        </figure>
    </header>
  );
};

export default Header;