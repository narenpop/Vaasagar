/** @format */

import React from "react";
import logo from "../../assets/images/logo/logo-vv.png";
import mobLogo from "../../assets/images/logo/mob-logo.png";
import sLogo from "../../assets/images/logo/logo-mob.png";
// import cart from "../../assets/images/icons/shopping-cart.png";
import cart from "../../assets/images/icons/shopping-cart.svg";
import cartDesk from "../../assets/images/icons/shopping-cart-desk.svg";
import user from "../../assets/images/icons/user-account.svg";
import hamburger from "../../assets/images/icons/hamburger.png";
import close from "../../assets/images/icons/close.svg";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  state = { clicked: false, left: 0, visible: false };
  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    //   window.addEventListener("scroll", this.handleScroll);
  }
  handlePush = () => {
    this.props.history.push("/login");
  };
  handleScroll = () => {
    if (window.scrollY > 90) {
      document.querySelector(".searchBarMob").className = "searchBarMob Scroll";
    } else {
      document.querySelector(".searchBarMob").className = "searchBarMob";
    }
  };
  handleClickNav = () => {
    if (this.state.visible) {
      this.setState({ visible: false });
    }
  };
  handleKeyPress = (e) => {
    if (e.keyCode === 27 && this.state.visible) {
      this.setState({ visible: false });
    }
  };
  handleSwipe() {
    this.setState({ left: -350 });
  }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  openNav = (event) => {
    document.body.classList.add("modal-open");
    this.setState({ clicked: true });
  };
  hideNav = (event) => {
    document.body.classList.remove("modal-open");
    this.setState({ clicked: false });
  };
  render() {
    return (
      <div>
        <div className='headerWrap'>
          <div className='container'>
            <div className='myNavBar'>
              <div className='headerBlk'>
                <div className='logoBlk'>
                  <img src={logo} alt='logo' />
                </div>

                <div class='searchBarWrap'>
                  <input
                    type='text'
                    placeholder='Search books by Titles, Authors, Keywords &amp; ISBN'
                    className='searchBar'
                  />
                </div>
                <div className='headerRightBlkWrap'>
                  <div className='headerRightBlk'>
                    <img src={cartDesk} alt='cart' />
                    <NavLink
                      exact
                      to='/review/vaasagar/login'
                      activeClassName='active'
                      className='nav-links'>
                      <button className='headerSignIn'>Sign In</button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className='menu-icon' onClick={this.handleClick}>
                <img src={this.state.clicked ? close : hamburger} alt='nav' />
              </div>
              <div className='headerListItem'>
                <ul
                  className={
                    this.state.clicked ? "nav-menu active" : "nav-menu"
                  }>
                  <li className='mob'>
                    <div className='headerRightBlk'>
                      <img src={cart} alt='cart' />
                      <button className='headerSignIn'>Sign In</button>
                    </div>
                  </li>
                  <a>
                    <li className='active'>
                      <NavLink
                        exact
                        to='/review/vaasagar'
                        activeClassName='active'
                        className='nav-links'>
                        Home
                      </NavLink>
                    </li>
                  </a>
                  <a>
                    {" "}
                    <li>
                      <NavLink
                        exact
                        to='/review/vaasagar/category'
                        activeClassName='active'
                        className='nav-links'>
                        Categories
                      </NavLink>
                    </li>
                  </a>
                  <a>
                    <li>
                      {" "}
                      <NavLink
                        exact
                        to='/review/vaasagar/product'
                        activeClassName='active'
                        className='nav-links'>
                        Popular Books
                      </NavLink>
                    </li>
                  </a>
                  <a>
                    <li>
                      {" "}
                      <NavLink
                        exact
                        to='/review/vaasagar/popular-books'
                        activeClassName='active'
                        className='nav-links'>
                        Popular Book Sets
                      </NavLink>
                    </li>
                  </a>
                  <a>
                    <li>
                      {" "}
                      <NavLink
                        exact
                        to='/active'
                        activeClassName='active'
                        className='nav-links'>
                        Reader's Club
                      </NavLink>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className=''></div>
            <div className='mySideNav'>
              <div className='logoWrap'>
                <div className='menu-icon' onClick={this.handleClick}>
                  <img src={this.state.clicked ? close : hamburger} alt='nav' />
                </div>

                <div className='logoBlk'>
                  <img src={mobLogo} alt='logo' />
                </div>

                <li className='mob'>
                  <div className='headerRightBlk'>
                    <img src={cart} alt='cart' />
                    <button className='headerSignIn'>Sign In</button>
                  </div>
                </li>
              </div>
              <div className='searchBarMob Scroll'>
                <div class='searchBarMob'>
                  <input
                    type='text'
                    placeholder='Search books by Titles, Authors, Keywords &amp; ISBN'
                    className='searchBar'
                  />
                </div>
              </div>
              <div
                className={this.state.clicked ? "nav-menu active" : "nav-menu"}
                style={{ left: this.state.left }}
                onSwipe={this.handleSwipe.bind(this)}>
                <ul>
                  <div className='mobLogoBlk'>
                    <img src={user} alt='user' />
                    <p className='login'>Login &amp; signup </p>
                    <div className='logoBlk'>
                      <img src={sLogo} alt='logo' />
                      {/* <p>Vaasagar Vattam</p> */}
                    </div>
                    <div className='menu-icon' onClick={this.handleClick}>
                      <img
                        src={this.state.clicked ? close : hamburger}
                        alt='nav'
                      />
                    </div>
                  </div>

                  <a>
                    <li className='active  home'>
                      <NavLink
                        // onClick={() => {
                        //   // this.props.setLoader(true);
                        //   this.props.history.push("/review/vaasagar");
                        // }}
                        className=''
                        active={window.location.pathname === "/review/vaasagar"}
                        exact
                        to='/review/vaasagar'
                        // activeClassName='active'
                        className='nav-links'>
                        Home
                      </NavLink>
                    </li>
                  </a>
                  <hr />
                  <a>
                    {" "}
                    <li>
                      <NavLink
                        className=''
                        active={
                          window.location.pathname ===
                          "/review/vaasagar/category"
                        }
                        // onClick={() => {
                        //   // this.props.setLoader(true);
                        //   this.props.history.push("/review/vaasagar/category");
                        // }}
                        exact
                        to='/review/vaasagar/category'
                        // activeClassName='active'
                        className='nav-links'>
                        Categories
                      </NavLink>
                    </li>
                  </a>
                  <hr />
                  <a>
                    <li>
                      {" "}
                      <NavLink
                        exact
                        to='/review/vaasagar/product'
                        activeClassName='active'
                        className='nav-links'>
                        Popular Books
                      </NavLink>
                    </li>
                  </a>
                  <hr />
                  <a>
                    <li>
                      {" "}
                      <NavLink
                        exact
                        to='/review/vaasagar/popular-books'
                        activeClassName='active'
                        className='nav-links'>
                        Popular Book Sets
                      </NavLink>
                    </li>
                  </a>
                  <hr />
                  <a>
                    <li>
                      {" "}
                      <NavLink
                        exact
                        to='/active'
                        activeClassName='active'
                        className='nav-links'>
                        Reader's Club
                      </NavLink>
                    </li>
                  </a>
                  <hr />
                </ul>

                <ul className='mySecondNav'>
                  <a>
                    <li>Gift card/ Coupons</li>
                  </a>
                  {/* <hr /> */}
                  <a>
                    <li>Help center</li>
                  </a>
                  {/* <hr /> */}
                  <a>
                    <li>Download app</li>
                  </a>
                  {/* <hr /> */}
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Header;
