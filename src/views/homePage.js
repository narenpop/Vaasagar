/** @format */

import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import quick from "../assets/images/icons/quick-delivery.svg";
import payment from "../assets/images/icons/secure-payment.svg";
import happy from "../assets/images/icons/happy-customers.svg";
import books from "../assets/images/icons/books.png";
import dBook from "../assets/images/img/d-book.png";
import book1 from "../assets/images/img/book-1.png";
import book2 from "../assets/images/img/book-2.png";
import homeImg from "../assets/images/img/homeimg.png";
import untohim from "../assets/images/img/rel-book.png";
import book3 from "../assets/images/img/book-3.png";
import ratings from "../assets/images/icons/ratings-grp.png";
import likeVV from "../assets/images/icons/like-vv.svg";
import tobelike from "../assets/images/icons/tobelike.svg";
import OwlCarousel from "react-owl-carousel";
import HeaderFirst from "../components/header/headerFirst";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from "../assets/images/banner/Home-Banner.png";

import ProgressBar from "../components/homeBlk/progressBar";
import OurProducts from "../components/homeBlk/ourProducts";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Like from "../components/like/like";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoWidth: true,
      responsive: {
        0: {
          items: 1,
          // stagePadding: 30,
          center: false,
          nav: false,
        },
        450: {
          items: 1,
          stagePadding: 0,
          center: false,
          nav: false,
        },
        600: {
          items: 1,
          center: false,
          margin: 0,
          nav: true,
        },
        768: {
          items: 1,
          stagePadding: 0,
          margin: 15,
          nav: true,
        },
        999: {
          items: 1,
          stagePadding: 100,
          margin: 15,
          nav: true,
        },
        1000: {
          items: 2,
          margin: 50,
          nav: true,
        },
        1201: {
          stagePadding: 0,
          items: 2,
          autoWidth: true,
          nav: true,
          dots: true,
        },
        1399: {
          stagePadding: 0,
          items: 3,
          autoWidth: true,
          nav: true,
          margin: 10,
          dots: true,
        },
      },
      fsresponsive: {
        0: {
          items: 1,
          margin: 35,

          center: false,
          nav: false,
        },
        450: {
          items: 1,
          stagePadding: 0,
          center: false,
          nav: false,
        },
        600: {
          items: 1,
          stagePadding: 100,
          margin: 15,
          nav: false,
        },
        768: {
          items: 1,
          stagePadding: 50,
          margin: 55,
          center: false,
          nav: false,
        },
        999: {
          items: 1,
          stagePadding: 100,
          margin: 15,
          nav: false,
        },
        1000: {
          items: 2,
          autoWidth: false,
          stagePadding: 100,
          margin: 600,
          center: false,
          nav: false,
          dots: true,
        },
        1201: {
          stagePadding: 0,
          items: 2,
          autoWidth: true,
          nav: false,
          dots: true,
        },
        1399: {
          nav: false,
          dots: true,
          stagePadding: 40,
          items: 2,
          autoWidth: true,
          center: true,
          margin: 70,
        },
      },
    };
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,

      speed: 2300,
      initialSlide: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      // fade: !0,
      cssEase: "linear",
      autoplaySpeed: 5000,
    };
    const Ad = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1300,
    };

    return (
      <div className='homeWrap'>
        <HeaderFirst />
        <Header />
        <div className='homeBlk'>
          <div className='homeBannerCarousel'>
            <Slider {...settings}>
              <div
                className='bannerImageCarousel'
                style={{ backgroundImage: { banner } }}>
                <div className='container'>
                  <div className='title'>
                    <h1>Tamilnadu Murder</h1>
                    <p className='name'>
                      Krishnan Swaminathan<span></span>Thriller
                    </p>
                    <div className='text'>
                      <p className='desk'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </p>
                      <p class='text-mob'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry...
                        <span className='read-more'>Read more</span>
                      </p>
                    </div>
                    <div className='price'>
                      <p> ₹ 115</p>
                      <strike> ₹ 150</strike>
                    </div>
                    <div className='buyNow'>
                      <button>Buy Now</button>
                      <div className='sliderPagination'>
                        <p>1</p>
                        <ProgressBar />
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='bannerImageCarousel'
                style={{ backgroundImage: { banner } }}>
                <div className='container'>
                  <div className='title'>
                    <h1>Tamilnadu Murder</h1>
                    <p className='name'>
                      Krishnan Swaminathan<span></span>Thriller
                    </p>
                    <div className='text'>
                      <p className='desk'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </p>
                      <p class='text-mob'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry...
                        <span className='read-more'>Read more</span>
                      </p>
                    </div>
                    <div className='price'>
                      <p> ₹ 115</p>
                      <strike> ₹ 150</strike>
                    </div>
                    <div className='buyNow'>
                      <button>Buy Now</button>
                      <div className='sliderPagination'>
                        <p>1</p>
                        <ProgressBar />
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          {/* happy-customers */}
          <div className='homeHcBlk'>
            <div className='container homeHcBlkWrap'>
              <div className='homeHcIconsList'>
                <div className='homeHcIcons'>
                  <div className='icons'>
                    <img src={quick} alt='icon' />
                  </div>
                  <div className='text'>
                    <p>Quick Delivery</p>
                  </div>
                </div>
                <div className='homeHcIcons  f-homeIcons'>
                  <div className='icons'>
                    <img src={payment} alt='icon' />
                  </div>
                  <div className='text'>
                    <p>Secure Payment</p>
                  </div>
                </div>
              </div>
              <div className='homeHcIconsList'>
                <div className='homeHcIcons'>
                  <div className='icons'>
                    <img src={happy} alt='icon' />
                  </div>
                  <div className='text'>
                    <p>88k+ Happy Customers</p>
                  </div>
                </div>
                <div className='homeHcIcons'>
                  <div className='icons'>
                    <img src={books} alt='icon' className='book' />
                  </div>
                  <div className='text'>
                    <p>50k+ Books</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Best Seller */}
          <div className='homeBsBlk'>
            <div className=''>
              <div className='homeBsBlkHeading'>
                <h1>Best Seller</h1>
              </div>
              <div className='homeBsBlkCarousel'>
                {/* <Slider {...BS}> */}
                <OwlCarousel
                  className='owl-theme'
                  loop={false}
                  center={true}
                  // margin={10}
                  startPosition={1}
                  //   smartSpeed={750}
                  items={1}
                  dots={true}
                  responsive={this.state.responsive}
                  nav>
                  <div className='homeCBlk grey-scale'>
                    <div className='homeCImg'>
                      <img src={dBook} alt='book' />
                    </div>
                    <div class='homeCDetails'>
                      <p className='category'>Category</p>
                      {/* <p className='categoryName'>Diabetes Emystified</p> */}
                      <div className='like-category'>
                        <p className='categoryName'>Diabetes Emystified</p>
                        {/* <img src={tobelike} alt='like' /> */}
                        <Like />
                      </div>
                      <p className='authorName'>by: Krishnan Swaminathan</p>
                      <img
                        src={ratings}
                        alt='ratings'
                        className='ratings-grp'
                      />
                      <p className='detail'>
                        It is a long established fact that a<br /> reader will
                        be distracted by readable...
                      </p>
                      <div className='priceBlk'>
                        <p className='pricesec1'> ₹ 115</p>
                        <p className='priceSec2'>
                          <strike>₹ 150 </strike>
                        </p>
                        <p className='priceSec3'>5 stocks left</p>
                      </div>
                      <button className='addCart'>Add to cart</button>
                    </div>
                  </div>
                  {/* <div></div> */}
                  <div className='homeCBlk grey-scale'>
                    <div className='homeCImg'>
                      <img src={dBook} alt='book' />
                    </div>
                    <div class='homeCDetails'>
                      <p className='category'>Category</p>
                      {/* <p className='categoryName'>Diabetes Emystified</p> */}
                      <div className='like-category'>
                        <p className='categoryName'>Diabetes Emystified</p>
                        {/* <img src={tobelike} alt='like' /> */}
                        <Like />
                      </div>
                      <p className='authorName'>by: Krishnan Swaminathan</p>
                      <img
                        src={ratings}
                        alt='ratings'
                        className='ratings-grp'
                      />
                      <p className='detail'>
                        It is a long established fact that a<br /> reader will
                        be distracted by readable...
                      </p>
                      <div className='priceBlk'>
                        <p className='pricesec1'> ₹ 115</p>
                        <p className='priceSec2'>
                          <strike>₹ 150 </strike>
                        </p>
                        <p className='priceSec3'>5 stocks left</p>
                      </div>
                      <button className='addCart'>Add to cart</button>
                    </div>
                  </div>
                  {/* <div></div> */}
                  <div className='homeCBlk'>
                    <div className='homeCImg'>
                      <img src={dBook} alt='book' />
                    </div>
                    <div class='homeCDetails'>
                      <p className='category'>Category</p>
                      {/* <p className='categoryName'>Diabetes Emystified</p> */}
                      <div className='like-category'>
                        <p className='categoryName'>Diabetes Emystified</p>
                        {/* <img src={tobelike} alt='like' /> */}
                        <Like />
                      </div>
                      <p className='authorName'>by: Krishnan Swaminathan</p>
                      <img
                        src={ratings}
                        alt='ratings'
                        className='ratings-grp'
                      />
                      <p className='detail'>
                        It is a long established fact that a<br /> reader will
                        be distracted by readable...
                      </p>
                      <div className='priceBlk'>
                        <p className='pricesec1'> ₹ 115</p>
                        <p className='priceSec2'>
                          <strike>₹ 150 </strike>
                        </p>
                        <p className='priceSec3'>5 stocks left</p>
                      </div>
                      <button className='addCart'>Add to cart</button>
                    </div>
                  </div>
                  {/* <div></div> */}
                  <div className='homeCBlk'>
                    <div className='homeCImg'>
                      <img src={dBook} alt='book' />
                    </div>

                    <div class='homeCDetails'>
                      <p className='category'>Category</p>
                      {/* <p className='categoryName'>Diabetes Emystified</p> */}
                      <div className='like-category'>
                        <p className='categoryName'>Diabetes Emystified</p>
                        {/* <img src={tobelike} alt='like' /> */}
                        <Like />
                      </div>
                      <p className='authorName'>by: Krishnan Swaminathan</p>
                      <img
                        src={ratings}
                        alt='ratings'
                        className='ratings-grp'
                      />
                      <p className='detail'>
                        It is a long established fact that a<br /> reader will
                        be distracted by readable...
                      </p>
                      <div className='priceBlk'>
                        <p className='pricesec1'> ₹ 115</p>
                        <p className='priceSec2'>
                          <strike>₹ 150 </strike>
                        </p>
                        <p className='priceSec3'>5 stocks left</p>
                      </div>
                      <button className='addCart'>Add to cart</button>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
          {/* book categories */}
          <div className='homeBcBlk'>
            <div className='container'>
              <div className='homeBcBlkHeading'>
                <h1>Book Categories</h1>
              </div>
            </div>
            <div className='homeBcDetails container'>
              <div className='homeBcDetailsWrap'>
                <div className='homeBcDetailsHeading'>
                  <p>Romance</p>
                </div>
                <div className='homeBcDetailsShow'>
                  <Link to='/review/vaasagar/category'>
                    <button>Show All</button>
                  </Link>
                </div>
              </div>
              <div className='homeBcList Romance'>
                <div className='home-div'>
                  <div className='homeBcListBlk'>
                    <img src={book1} alt='book' className='book-img' />
                    <div className='title'>
                      <p>City Of Ashes</p>
                      <img src={likeVV} alt='like' />
                      {/* <div id='heart-container'>
                      <input type='checkbox' id='toggle'></input>
                      <span id='twitter-heart'></span>
                    </div> */}
                    </div>
                    <p className='author'>by: Friedrich Wilhelm</p>
                    <p className='price'> ₹ 150</p>
                    <button>Add to cart</button>
                  </div>
                  <div className='homeBcListBlk'>
                    <img src={book2} alt='book' className='book-img' />
                    <div className='title'>
                      <p>City Of Ashes</p>
                      {/* <img src={tobelike} alt='like' /> */}
                      <Like />
                    </div>
                    <p className='author'>by: Friedrich Wilhelm</p>
                    <p className='price'> ₹ 150</p>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div className='home-div'>
                  <div className='homeBcListBlk'>
                    <img src={book3} alt='book' className='book-img' />
                    <div className='title'>
                      <p>City Of Ashes</p>
                      {/* <img src={tobelike} alt='like' /> */}
                      <Like />
                    </div>
                    <p className='author'>by: Friedrich Wilhelm</p>
                    <p className='price'> ₹ 150</p>
                    <button>Add to cart</button>
                  </div>
                  <div className='homeBcListBlk'>
                    <img src={book2} alt='book' className='book-img' />
                    <div className='title'>
                      <p>City Of Ashes</p>
                      {/* <img src={tobelike} alt='like' /> */}
                      <Like />
                    </div>
                    <p className='author'>by: Friedrich Wilhelm</p>
                    <p className='price'> ₹ 150</p>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div className='home-div'>
                  <div className='homeBcListBlk mob-view'>
                    <img src={book3} alt='book' className='book-img' />
                    <div className='title'>
                      <p>City Of Ashes</p>
                      {/* <img src={tobelike} alt='like' /> */}
                      <Like />
                    </div>
                    <p className='author'>by: Friedrich Wilhelm</p>
                    <p className='price'> ₹ 150</p>
                    <button>Add to cart</button>
                  </div>
                </div>
                <span class='bg-text'>Romance</span>
              </div>
              {/* classic */}
              <div className='homeBcDetailsWrap classicWrap'>
                <div className='homeBcDetailsHeading'>
                  <p>Classic</p>
                </div>
                <div className='homeBcDetailsShow'>
                  <button>Show All</button>
                </div>
              </div>
              <div className='homeBcList Romance'>
                <div className='home-div'>
                  <div className='homeBcListBlk'>
                    <img src={book1} alt='book' className='book-img' />
                    <div className='title'>
                      <p>City Of Ashes</p>
                      <img src={tobelike} alt='like' />
                      {/* <div id='heart-container'>
                      <input type='checkbox' id='toggle'></input>
                      <span id='twitter-heart'></span>
                    </div> */}
                    </div>
                    <p className='author'>by: Friedrich Wilhelm</p>
                    <p className='price'> ₹ 150</p>
                    <button>Add to cart</button>
                  </div>
                  <div className='homeBcListBlk'>
                    <img src={book2} alt='book' className='book-img' />
                    <div className='title'>
                      <p>City Of Ashes</p>
                      <img src={tobelike} alt='like' />
                    </div>
                    <p className='author'>by: Friedrich Wilhelm</p>
                    <p className='price'> ₹ 150</p>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div className='home-div'>
                  <div className='homeBcListBlk'>
                    <img src={book3} alt='book' className='book-img' />
                    <div className='title'>
                      <p>City Of Ashes</p>
                      <img src={tobelike} alt='like' />
                    </div>
                    <p className='author'>by: Friedrich Wilhelm</p>
                    <p className='price'> ₹ 150</p>
                    <button>Add to cart</button>
                  </div>
                  <div className='homeBcListBlk'>
                    <img src={book2} alt='book' className='book-img' />
                    <div className='title'>
                      <p>City Of Ashes</p>
                      <img src={tobelike} alt='like' />
                    </div>
                    <p className='author'>by: Friedrich Wilhelm</p>
                    <p className='price'> ₹ 150</p>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div className='home-div'>
                  <div className='homeBcListBlk mob-view'>
                    <img src={book3} alt='book' className='book-img' />
                    <div className='title'>
                      <p>City Of Ashes</p>
                      <img src={tobelike} alt='like' />
                    </div>
                    <p className='author'>by: Friedrich Wilhelm</p>
                    <p className='price'> ₹ 150</p>
                    <button>Add to cart</button>
                  </div>
                </div>
                <span class='bg-text'>Classic</span>
              </div>
            </div>
          </div>
          {/* our products */}
          <div className='homeOpBlk'>
            <div className='container'>
              <div className='homeOpHeading'>
                <h1>Our Products</h1>
              </div>
              <OurProducts />
            </div>
          </div>
          {/* readers club */}
          <div className='homereaders-club'>
            <div className='homeRcBlk'>
              <h1>Welcome to the Reader's Club.</h1>
              <p className='text'>
                A community for book lovers, where you can discuss about your
                favourite
                <br /> books, participate in events and discover.
              </p>
              <button className='signIn'>Sign In</button>
            </div>
          </div>
          {/*author details*/}
          <div className='homeAdBlk'>
            <div className='heading'>
              <h1>Featured Author</h1>
            </div>

            <div className='homeAdWrap container'>
              <div>
                <div className='details'>
                  <div className='title'>
                    <h1>Sandro Loren</h1>
                    <p>Romance, Thriller, Drama, History </p>
                  </div>
                  <div className='text'>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English...
                      <a
                        className='dl'
                        onClick={() => {
                          this.props.history.push("/product");
                        }}>
                        Read More
                      </a>
                    </p>
                    <p className='iPad'>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed ....
                      <a
                        className='dl'
                        href='/product'
                        onClick={() => {
                          this.props.history.push("/product");
                        }}>
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='homeAdBlkSliderWrap'>
                <div className='homeAdBlkSlider'>
                  <Slider {...Ad}>
                    <img src={homeImg} alt='author' className='author' />
                    <img src={homeImg} alt='author' className='author' />
                    <img src={homeImg} alt='author' className='author' />
                  </Slider>
                </div>
                <div className='homeBcList '>
                  <div className='homeBcListBlk gp-24'>
                    <img src={book3} alt='book' className='book' />
                    <div className='title'>
                      <p>City Of Ashes</p>
                      {/* <img src={tobelike} alt='like' /> */}
                      <Like />
                    </div>
                    <p className='author'>by: Friedrich Wilhelm</p>
                    <p className='price'> ₹ 150</p>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div className='homeBcList'>
                  <div className='homeBcListBlk'>
                    <img src={book2} alt='book' className='book' />
                    <div className='title'>
                      <p>City Of Ashes</p>
                      {/* <img src={tobelike} alt='like' /> */}
                      <Like />
                    </div>
                    <p className='author'>by: Friedrich Wilhelm</p>
                    <p className='price'> ₹ 150</p>
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Featured Series*/}
          <div className='homeFs'>
            <div className='homeFsHeading'>
              <h1>Featured Series</h1>
            </div>
            {/* <Slider {...fs}> */}
            <OwlCarousel
              className='owl-theme'
              loop={true}
              center={true}
              // margin={70}
              startPosition={1}
              //   smartSpeed={750}
              items={1}
              nav={false}
              dots={true}
              responsive={this.state.fsresponsive}>
              <div>
                <div className='homeFsBlk'>
                  <div className='homeFsBlkBg'>
                    <div className='homeFsDf'>
                      <div className='imgBlk'>
                        <img src={untohim} alt='book' className='book' />
                      </div>
                      <div className='textBlk'>
                        <p className='text1'>Category</p>
                        {/* <p className='text2'>Un to Him (Part 1)</p> */}
                        <div className='like-category'>
                          <p className='text2'>Un to Him (Part 1)</p>
                          {/* <img src={tobelike} alt='like' /> */}
                          <Like />
                        </div>
                        <p className='text3'>by: G Blackmore Evans</p>
                        <img src={ratings} alt='ratings' className='ratings' />
                        <p className='text4'>
                          It is a long established fact that a reader will be
                          distracted by readable...
                        </p>
                        <div className='price'>
                          <p className='priceText'> ₹ 115</p>
                          <strike> ₹ 150</strike>
                          <p className='availability'>Availability</p>
                        </div>
                        <div className='cart'>
                          <button>Add to cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div></div> */}
              {/* <div></div> */}
              <div>
                <div className='homeFsBlk'>
                  <div className='homeFsBlkBg'>
                    <div className='homeFsDf'>
                      <div className='imgBlk'>
                        <img src={untohim} alt='book' className='book' />
                      </div>
                      <div className='textBlk'>
                        <p className='text1'>Category</p>
                        {/* <p className='text2'>Un to Him (Part 1)</p> */}
                        <div className='like-category'>
                          <p className='text2'>Un to Him (Part 1)</p>
                          {/* <img src={tobelike} alt='like' /> */}
                          <Like />
                        </div>
                        <p className='text3'>by: G Blackmore Evans</p>
                        <img src={ratings} alt='ratings' className='ratings' />
                        <p className='text4'>
                          It is a long established fact that a reader will be
                          distracted by readable...
                        </p>
                        <div className='price'>
                          <p className='priceText'> ₹ 115</p>
                          <strike> ₹ 150</strike>
                          <p className='availability'>Availability</p>
                        </div>
                        <div className='cart'>
                          <button>Add to cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div></div> */}
              {/* <div></div> */}
              <div>
                <div className='homeFsBlk'>
                  <div className='homeFsBlkBg'>
                    <div className='homeFsDf'>
                      <div className='imgBlk'>
                        <img src={untohim} alt='book' className='book' />
                      </div>
                      <div className='textBlk'>
                        <p className='text1'>Category</p>
                        {/* <p className='text2'>Un to Him (Part 1)</p> */}
                        <div className='like-category'>
                          <p className='text2'>Un to Him (Part 1)</p>
                          {/* <img src={tobelike} alt='like' /> */}
                          <Like />
                        </div>
                        <p className='text3'>by: G Blackmore Evans</p>
                        <img src={ratings} alt='ratings' className='ratings' />
                        <p className='text4'>
                          It is a long established fact that a reader will be
                          distracted by readable...
                        </p>
                        <div className='price'>
                          <p className='priceText'> ₹ 115</p>
                          <strike> ₹ 150</strike>
                          <p className='availability'>Availability</p>
                        </div>
                        <div className='cart'>
                          <button>Add to cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div></div> */}
              {/* <div></div> */}
            </OwlCarousel>
            <div className='homeFsBlk'>
              {/* <ImageSlider slides={SliderData} /> */}
              {/* <div className='homeFsBlkBg'>
                  <div className='homeFsDf'>
                    <div className='imgBlk'>
                      <img src={untohim} alt='book' className='book' />
                    </div>
                    <div className='textBlk'>
                      <p className='text1'>Category</p>
                      <p className='text2'>Un to Him (Part 1)</p>
                      <p className='text3'>by: G Blackmore Evans</p>
                      <img src={ratings} alt='ratings' className='ratings' />
                      <p className='text4'>
                        It is a long established fact that a reader will be
                        distracted by readable...
                      </p>
                      <div className='price'>
                        <p className='priceText'> ₹ 115</p>
                        <strike> ₹ 150</strike>
                        <p className='availability'>Availability</p>
                      </div>
                      <div className='cart'>
                        <button>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
