/** @format */

import React from "react";
import logo from "../../assets/images/logo/logo.png";
import fb from "../../assets/images/icons/fb.png";
import twitter from "../../assets/images/icons/twitter.svg";
import insta from "../../assets/images/icons/insta.png";
import plus from "../../assets/images/icons/plus-icon.svg";

class Footer extends React.Component {
  render() {
    return (
      <div className='footerWrap'>
        <div className='container'>
          <div className='footerBlk'>
            <div>
              <div className='footerSec1'>
                <div className='footerLogoBlk'>
                  <img src={logo} alt='logo' />
                  <p>Vaasagar Vattam</p>
                </div>

                <p className='footerDesc'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className='desk'>
                  <div className='footerIcons'>
                    <p>Follow Us</p>
                    <div className='icons'>
                      <img src={fb} alt='fb' />
                      <img src={twitter} alt='twitter' />
                      <img src={insta} alt='insta' />
                    </div>
                  </div>
                  <div className='copyright'>
                    <p>© 2021 Vaasagar Vattam. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='footerSec'>
                <div className='footerCategoriesHeading'>
                  <p>Book Categories</p>
                </div>
                <div className='footerCategoriesDesc'>
                  <div className='footerCategoriesDesc1'>
                    <ul className='footerList'>
                      <li>Art &amp; Photography</li>
                      <li>Action</li>
                      <li>Biography &amp; Autobiography</li>
                      <li>Body, Mind &amp; Spirit</li>
                      <li>Business &amp; Economics</li>
                      <li>Children’s book</li>
                      <li>Cookbook &amp; Food </li>
                      <li>Classic</li>
                      <li>Design</li>
                    </ul>
                  </div>
                  <div class='footerCategoriesDesc2'>
                    <ul className='footerList'>
                      <li>Drama</li>
                      <li>Education</li>
                      <li>Family &amp; Relationship</li>
                      <li>Fiction</li>
                      <li>History</li>
                      <li>Literature</li>
                      <li>Romance </li>
                      <a>
                        <li className='load-more'>
                          <p>Load More </p>
                          <img src={plus} alt='plus-icon' />{" "}
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='footerSec2'>
                <div>
                  <div className='footerCategoriesHeading'>
                    <p>Quick Links</p>
                  </div>
                  <div className='footerCategoriesDesc'>
                    <div className='footerCategoriesDesc1'>
                      <ul className='footerList'>
                        <li>Popular Books</li>
                        <li>Popular Book Sets</li>
                        <li>Reader’s Club</li>
                        <li>Best Seller</li>
                        <li>Featured Author</li>
                        <li>Featured Series</li>
                        <li>Newest Books</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='footerCategoriesHeading'>
                    <p>Customer Area</p>
                  </div>
                  <div className='footerCategoriesDesc'>
                    <div className='footerCategoriesDesc1'>
                      <ul className='footerList'>
                        <li>My Account</li>
                        <li>Orders</li>
                        <li>Gifts &amp; Coupons</li>
                        <li>Terms &amp; Conditions</li>
                        <li>Privacy Policy</li>
                        <li>FAQ’s</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mob'>
                <div className='footerIcons'>
                  <p>Follow Us</p>
                  <div className='icons'>
                    <img src={fb} alt='fb' />
                    <img src={twitter} alt='twitter' />
                    <img src={insta} alt='insta' />
                  </div>
                </div>
                <div className='copyright'>
                  <p>© 2021 Vaasagar Vattam. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
