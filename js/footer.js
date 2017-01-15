import React from 'react';

export default React.createClass({

  render () {
    return (
      <footer className="site_footer">
          <div className="footer_menu_container">
            <ul className="menu">
              <li className="footerLink">
                <a className="link"
                   href="" > About Us
                 </a>
              </li>
              <li className="footerLink">
                <a className="link"
                   href=""> Write for Us
                </a>
              </li>
              <li className="footerLink">
                <a className="link"
                   href=""> Advertise with Us
                </a>
              </li>
              <li className="footerLink">
                <a className="link"
                   href=""> Contact Us
                </a>
              </li>
              <li className="footerLink">
                <a className="link"
                   href=""> Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        <div className="socialMedia">
          <ul className="socialMediaFooter">
            <li className="socialMediaList"><a href="https://www.twitter.com/spurs" className="twitter"><i className="fa fa-twitter icons" aria-hidden="true"></i></a></li>
            <li className="socialMediaList"><a href="https://www.facebook.com/spurs" className="facebook"><i className="fa fa-facebook icons" aria-hidden="true"></i></a></li>
            <li className="socialMediaList"><a href="https://www.instagram.com/spurs" className="instagram"><i className="fa fa-instagram icons" aria-hidden="true"></i></a></li>
            <li className="socialMediaList"><a href="https://plus.google.com/+spurs" className="google"><i className="fa fa-google-plus icons" aria-hidden="true"></i></a></li>
          </ul>
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
