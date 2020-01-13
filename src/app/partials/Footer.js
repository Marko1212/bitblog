import React, { Fragment } from 'react'

const Footer = (props) => {

    return (
        <Fragment>

            <footer className="page-footer">

                {/* <div className="footer-copyright" */}
                <div className="container center footer">
                    © {new Date().getFullYear()} Copyright Text
                    </div>
                {/* </div> */}
            </footer>
        </Fragment>
    )

}


export default Footer;