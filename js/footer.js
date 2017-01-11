import React from 'react';

export default React.createClass({

  render () {
    return (
      <footer className="site_footer">
        <div className="footer_content_container">
          <div className="footer_menu_container">
            <ul className="menu">
              <li className="menu">
                <a className="link"
                   href="" > About Us
                 </a>
              </li>
              <li className="menu">
                <a className="link"
                   href=""> Write for Us
                </a>
              </li>
              <li className="menu">
                <a className="link"
                   href=""> Advertise with Us
                </a>
              </li>
              <li className="menu">
                <a className="link"
                   href=""> Contact Us
                </a>
              </li>
              <li className="menu">
                <a className="link"
                   href=""> Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="copyright_text">
            Copyright 2017 All Rights Reserved - Trademarks used herein are property of their respective owners
          </p>
        </div>
      </footer>
    )
  }
})
