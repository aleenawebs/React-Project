import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Blog() {
  return (
    <>
    <section id="common-header-section">
    <div className="container">
        <div className="common-header-wrapper common-header-wrapper-02">
        <div className="common-header-caption common-caption" data-aos="fade-up">
            <h2 className="common-cap">Blog</h2>
            <p>Lorem ipsum
dolor sit amet,
consectetur adipiscing elit , sed
do eiusmod tempor incididunt</p>
        </div>
        </div>
    </div>
</section>

<section id="blog-section">
    <div className="container">
        <div className="latest-blog-wrap">
            <div className="latest-blog-image">
                <img src="images/portfolio1.png" alt="" />
            </div>
            <div className="latest-blog-content common-paragraph">
                <h4>Nail Your Next Conference Presentation With These Tips</h4>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <a href="blog-detail.php" className="button button-2">read more<span className="iconify" data-icon="carbon:arrow-up-right"></span></a>
            </div>
        </div>

        <div className="blog-list">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="blog-list-wrap">
                        <div className="blog-list-img">
                            <img src="images/service01.jpg" alt="" />
                            <div className="blog-list-content">
                                <div>
                                    <h4>Nail Your Next Conference Presentation With These Tips</h4>
                                <span className="date">02 jan 2022</span>
                                <div className="read-more-btn">
                                    <a href="">Read more <iconify-icon icon="bi:arrow-right"></iconify-icon></a>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="blog-list-wrap">
                        <div className="blog-list-img">
                            <img src="images/service02.jpg" alt="" />
                            <div className="blog-list-content">
                                <div>
                                    <h4>Nail Your Next Conference Presentation With These Tips</h4>
                                <span className="date">02 jan 2022</span>
                                <div className="read-more-btn">
                                    <a href="">Read more <iconify-icon icon="bi:arrow-right"></iconify-icon></a>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="blog-list-wrap">
                        <div className="blog-list-img">
                            <img src="images/service03.jpg" alt="" />
                            <div className="blog-list-content">
                                <div>
                                    <h4>Nail Your Next Conference Presentation With These Tips</h4>
                                <span className="date">02 jan 2022</span>
                                <div className="read-more-btn">
                                    <a href="">Read more <iconify-icon icon="bi:arrow-right"></iconify-icon></a>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="blog-list-wrap">
                        <div className="blog-list-img">
                            <img src="images/service02.jpg" alt="" />
                            <div className="blog-list-content">
                                <div>
                                    <h4>Nail Your Next Conference Presentation With These Tips</h4>
                                <span className="date">02 jan 2022</span>
                                <div className="read-more-btn">
                                    <a href="">Read more <iconify-icon icon="bi:arrow-right"></iconify-icon></a>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}
