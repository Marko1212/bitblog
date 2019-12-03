import React from 'react';

const Header = (props) => {

    return <>
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">BitBlog</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Home</a></li>
                    <li><a href="badges.html">Authors</a></li>
                    <li><a href="collapsible.html">About</a></li>
                </ul>
            </div>
        </nav>




    </>

}


export default Header;