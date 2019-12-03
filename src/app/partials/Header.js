import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {

    return <>
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo">BitBlog</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Home</Link></li>
                    <li><a>Authors</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
        </nav>




    </>

}


export default Header;