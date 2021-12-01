import React from 'react';

import './App.css';



class App extends React.Component
{
  
  render()
  {
    
   
    return (
      <div>
       
        <section class="preloader">
            <div class="spinner">

                <span class="spinner-rotate"></span>
                
            </div>
        </section>


      
        <section class="navbar custom-navbar navbar-fixed-top" role="navigation">
            <div class="container">

                <div class="navbar-header">
                      <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                          <span class="icon icon-bar"></span>
                          <span class="icon icon-bar"></span>
                          <span class="icon icon-bar"></span>
                      </button>

                    
                      <a href="#" class="navbar-brand">COLADCO</a>
                </div>

                
                <div class="collapse navbar-collapse">
                      <ul class="nav navbar-nav navbar-nav-first">
                          <li><a href="#top" class="smoothScroll">Home</a></li>
                          <li><a href="#about" class="smoothScroll">About</a></li>
                          <li><a href="#team" class="smoothScroll">Our Teachers</a></li>
                          <li><a href="#courses" class="smoothScroll">Courses</a></li>
                          <li><a href="#testimonial" class="smoothScroll">Reviews</a></li>
                          <li><a href="#contact" class="smoothScroll">Contact</a></li>
                      </ul>

                      <ul class="nav navbar-nav navbar-right">
                          <li><a href="#"><i class="fa fa-phone"></i> +917042414212</a></li>
                      </ul>
                </div>

            </div>
        </section>


      
        <section id="home">
            <div class="row">

                      <div class="owl-carousel owl-theme home-slider">
                          <div class="item item-first">
                                <div class="caption">
                                    <div class="container">
                                          <div class="col-md-6 col-sm-12">
                                              <h1>Distance Learning Education Center</h1>
                                              <h3>Our offline/online courses are designed to fit in your industry supporting all-round with latest technologies.</h3>
                                              <a href="#feature" class="section-btn btn btn-default smoothScroll">Discover more</a>
                                          </div>
                                    </div>
                                </div>
                          </div>

                          <div class="item item-second">
                                <div class="caption">
                                    <div class="container">
                                          <div class="col-md-6 col-sm-12">
                                              <h1>Start your journey with our practical courses</h1>
                                              <h3>Our offline/online courses are built in partnership with technology leaders and are designed to meet industry demands.</h3>
                                              <a href="#courses" class="section-btn btn btn-default smoothScroll">Take a course</a>
                                          </div>
                                    </div>
                                </div>
                          </div>

                          <div class="item item-third">
                                <div class="caption">
                                    <div class="container">
                                          <div class="col-md-6 col-sm-12">
                                              <h1>Efficient Learning Methods</h1>
                                              <h3>Nam eget sapien vel nibh euismod vulputate in vel nibh. Quisque eu ex eu urna venenatis sollicitudin ut at libero. Visit <a rel="nofollow" href="https://www.facebook.com/templatemo">templatemo</a> page.</h3>
                                              <a href="#contact" class="section-btn btn btn-default smoothScroll">Let's chat</a>
                                          </div>
                                    </div>
                                </div>
                          </div>
                      </div>
            </div>
        </section>


        
        <section id="feature">
            <div class="container">
                <div class="row">

                      <div class="col-md-4 col-sm-4">
                          <div class="feature-thumb">
                                <span>01</span>
                                <h3>Trending Courses</h3>
                                <p>Known is free education HTML Bootstrap Template. You can download and use this for your website.</p>
                          </div>
                      </div>

                      <div class="col-md-4 col-sm-4">
                          <div class="feature-thumb">
                                <span>02</span>
                                <h3>Books & Library</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.</p>
                          </div>
                      </div>

                      <div class="col-md-4 col-sm-4">
                          <div class="feature-thumb">
                                <span>03</span>
                                <h3>Certified Teachers</h3>
                                <p>templatemo provides a wide variety of free Bootstrap Templates for you. Please tell your friends about us. Thank you.</p>
                          </div>
                      </div>

                </div>
            </div>
        </section>


      
        <section id="about">
            <div class="container">
                <div class="row">

                      <div class="col-md-6 col-sm-12">
                          <div class="about-info">
                                <h2>Start your journey to a better life with offline/online practical courses</h2>

                                <figure>
                                    <span><i class="fa fa-users"></i></span>
                                    <figcaption>
                                          <h3>Professional Trainers</h3>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.</p>
                                    </figcaption>
                                </figure>

                                <figure>
                                    <span><i class="fa fa-certificate"></i></span>
                                    <figcaption>
                                          <h3>International Certifications</h3>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.</p>
                                    </figcaption>
                                </figure>

                                <figure>
                                    <span><i class="fa fa-bar-chart-o"></i></span>
                                    <figcaption>
                                          <h3>Free for 3 months</h3>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.</p>
                                    </figcaption>
                                </figure>
                          </div>
                      </div>

                      <div class="col-md-offset-1 col-md-4 col-sm-12">
                          <div class="entry-form">
                               
                                    <h2>Signup today</h2>
                                    <input type="text" name="full name" class="form-control" placeholder="Full name" required="" />

                                    <input type="email" name="email" class="form-control" placeholder="Your email address" required="" />

                                    <input type="password" name="password" class="form-control" placeholder="Your password" required="" />

                                    <button class="submit-btn form-control" id="form-submit">Get started</button>
                             
                          </div>
                      </div>

                </div>
            </div>
        </section>


      
        <section id="team">
            <div class="container">
                <div class="row">

                      <div class="col-md-12 col-sm-12">
                          <div class="section-title">
                                <h2>Teachers <small>Meet Professional Trainers</small></h2>
                          </div>
                      </div>

                      <div class="col-md-3 col-sm-6">
                          <div class="team-thumb">
                                <div class="team-image">
                                    <img src="assets/images/author-image1.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="team-info">
                                    <h3>Mark Wilson</h3>
                                    <span>I love Teaching</span>
                                </div>
                                <ul class="social-icon">
                                    <li><a href="#" class="fa fa-facebook-square" attr="facebook icon"></a></li>
                                    <li><a href="#" class="fa fa-twitter"></a></li>
                                    <li><a href="#" class="fa fa-instagram"></a></li>
                                </ul>
                          </div>
                      </div>

                      <div class="col-md-3 col-sm-6">
                          <div class="team-thumb">
                                <div class="team-image">
                                    <img src="assets/images/author-image2.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="team-info">
                                    <h3>Catherine</h3>
                                    <span>Education is the key!</span>
                                </div>
                                <ul class="social-icon">
                                    <li><a href="#" class="fa fa-google"></a></li>
                                    <li><a href="#" class="fa fa-instagram"></a></li>
                                </ul>
                          </div>
                      </div>

                      <div class="col-md-3 col-sm-6">
                          <div class="team-thumb">
                                <div class="team-image">
                                    <img src="assets/images/author-image3.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="team-info">
                                    <h3>Jessie Ca</h3>
                                    <span>I like Online Courses</span>
                                </div>
                                <ul class="social-icon">
                                    <li><a href="#" class="fa fa-twitter"></a></li>
                                    <li><a href="#" class="fa fa-envelope-o"></a></li>
                                    <li><a href="#" class="fa fa-linkedin"></a></li>
                                </ul>
                          </div>
                      </div>

                      <div class="col-md-3 col-sm-6">
                          <div class="team-thumb">
                                <div class="team-image">
                                    <img src="assets/images/author-image4.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="team-info">
                                    <h3>Andrew Berti</h3>
                                    <span>Learning is fun</span>
                                </div>
                                <ul class="social-icon">
                                    <li><a href="#" class="fa fa-twitter"></a></li>
                                    <li><a href="#" class="fa fa-google"></a></li>
                                    <li><a href="#" class="fa fa-behance"></a></li>
                                </ul>
                          </div>
                      </div>

                </div>
            </div>
        </section>


        
        <section id="courses">
            <div class="container">
                <div class="row">

                      <div class="col-md-12 col-sm-12">
                          <div class="section-title">
                                <h2>Popular Courses <small>Upgrade your skills with newest courses</small></h2>
                          </div>

                          <div className="owl-carousel owl-theme owl-courses">
                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="courses-thumb">
                                              <div class="courses-top">
                                                    <div class="courses-image">
                                                        <img src="assets/images/courses-image1.jpg" class="img-responsive" alt="" />
                                                    </div>
                                                    <div class="courses-date">
                                                        <span><i class="fa fa-calendar"></i> 12 / 7 / 2018</span>
                                                        <span><i class="fa fa-clock-o"></i> 7 Hours</span>
                                                    </div>
                                              </div>

                                              <div class="courses-detail">
                                                    <h3><a href="#">Social Media Management</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                              </div>

                                              <div class="courses-info">
                                                    <div class="courses-author">
                                                        <img src="assets/images/author-image1.jpg" class="img-responsive" alt="" />
                                                        <span>Mark Wilson</span>
                                                    </div>
                                                    <div class="courses-price">
                                                        <a href="#"><span>USD 25</span></a>
                                                    </div>
                                              </div>
                                          </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="courses-thumb">
                                              <div class="courses-top">
                                                    <div class="courses-image">
                                                        <img src="assets/images/courses-image2.jpg" class="img-responsive" alt="" />
                                                    </div>
                                                    <div class="courses-date">
                                                        <span><i class="fa fa-calendar"></i> 20 / 7 / 2018</span>
                                                        <span><i class="fa fa-clock-o"></i> 4.5 Hours</span>
                                                    </div>
                                              </div>

                                              <div class="courses-detail">
                                                    <h3><a href="#">Graphic & Web Design</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                              </div>

                                              <div class="courses-info">
                                                    <div class="courses-author">
                                                        <img src="assets/images/author-image2.jpg" class="img-responsive" alt="" />
                                                        <span>Jessica</span>
                                                    </div>
                                                    <div class="courses-price">
                                                        <a href="#"><span>USD 80</span></a>
                                                    </div>
                                              </div>
                                          </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="courses-thumb">
                                              <div class="courses-top">
                                                    <div class="courses-image">
                                                        <img src="assets/images/courses-image3.jpg" class="img-responsive" alt="" />
                                                    </div>
                                                    <div class="courses-date">
                                                        <span><i class="fa fa-calendar"></i> 15 / 8 / 2018</span>
                                                        <span><i class="fa fa-clock-o"></i> 6 Hours</span>
                                                    </div>
                                              </div>

                                              <div class="courses-detail">
                                                    <h3><a href="#">Marketing Communication</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                              </div>

                                              <div class="courses-info">
                                                    <div class="courses-author">
                                                        <img src="assets/images/author-image3.jpg" class="img-responsive" alt="" />
                                                        <span>Catherine</span>
                                                    </div>
                                                    <div class="courses-price free">
                                                        <a href="#"><span>Free</span></a>
                                                    </div>
                                              </div>
                                          </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="courses-thumb">
                                              <div class="courses-top">
                                                    <div class="courses-image">
                                                        <img src="assets/images/courses-image4.jpg" class="img-responsive" alt="" />
                                                    </div>
                                                    <div class="courses-date">
                                                        <span><i class="fa fa-calendar"></i> 10 / 8 / 2018</span>
                                                        <span><i class="fa fa-clock-o"></i> 8 Hours</span>
                                                    </div>
                                              </div>

                                              <div class="courses-detail">
                                                    <h3><a href="#">Summer Kids</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                              </div>

                                              <div class="courses-info">
                                                    <div class="courses-author">
                                                        <img src="assets/images/author-image1.jpg" class="img-responsive" alt="" />
                                                        <span>Mark Wilson</span>
                                                    </div>
                                                    <div class="courses-price">
                                                        <a href="#"><span>USD 45</span></a>
                                                    </div>
                                              </div>
                                          </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="courses-thumb">
                                              <div class="courses-top">
                                                    <div class="courses-image">
                                                        <img src="assets/images/courses-image5.jpg" class="img-responsive" alt="" />
                                                    </div>
                                                    <div class="courses-date">
                                                        <span><i class="fa fa-calendar"></i> 5 / 10 / 2018</span>
                                                        <span><i class="fa fa-clock-o"></i> 10 Hours</span>
                                                    </div>
                                              </div>

                                              <div class="courses-detail">
                                                    <h3><a href="#">Business &amp; Management</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                              </div>

                                              <div class="courses-info">
                                                    <div class="courses-author">
                                                        <img src="assets/images/author-image2.jpg" class="img-responsive" alt="" />
                                                        <span>Jessica</span>
                                                    </div>
                                                    <div class="courses-price free">
                                                        <a href="#"><span>Free</span></a>
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


      
        <section id="testimonial">
            <div class="container">
                <div class="row">
                      <div class="col-md-12 col-sm-12">
                          <div class="section-title">
                                <h2>Student Reviews <small>from around the world</small></h2>
                          </div>

                          <div class="owl-carousel owl-theme owl-client">
                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="tst-image">
                                              <img src="assets/images/male.png" class="img-responsive" alt="" />
                                          </div>
                                          <div class="tst-author">
                                              <h4>Ajay Saini</h4>
                                              <span>(Python Student)</span>
                                          </div>
                                          <p>I’ve started learning Python and the teacher has great knowledge and is well trained.

The course is designed in such a manner that it is completed within the time limit and the student has full knowledge of the subject.</p>
                                          <div class="tst-rating">
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                          </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="tst-image">
                                              <img src="assets/images/male.png" class="img-responsive" alt="" />
                                          </div>
                                          <div class="tst-author">
                                              <h4>Liwansh saini</h4>
                                              <span>(C/C++ course Student)</span>
                                          </div>
                                          <p>Sir teaches using some real life examples too which makes it easier to understand for us and connect to it.</p>
                                          <div class="tst-rating">
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                          </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="tst-image">
                                              <img src="assets/images/female.png" class="img-responsive" alt="" />
                                          </div>
                                          <div class="tst-author">
                                              <h4>Isha Gupta</h4>
                                              <span>(Web Developement Course)</span>
                                          </div>
                                          <p>Great experience of learning and developing the skills.</p>
                                          <div class="tst-rating">
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                          </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="tst-image">
                                              <img src="assets/images/male.png" class="img-responsive" alt="" />
                                          </div>
                                          <div class="tst-author">
                                              <h4>Jatin Sharma</h4>
                                              <span>(Java Course Student)</span>
                                          </div>
                                          <p>Very good communication skills and also teaches very professionally. Also he responds to each and every query of the students.</p>
                                          <div class="tst-rating">
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                          </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="tst-image">
                                              <img src="assets/images/female.png" class="img-responsive" alt="" />
                                          </div>
                                          <div class="tst-author">
                                              <h4>Varnika Budhiraja</h4>
                                              <span>(Python Course Student)</span>
                                          </div>
                                          <p>Amazing learning experience, professional interaction. Definitely worth it!!</p>
                                          <div class="tst-rating">
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                          </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>
            </div>
        </section> 


      
        <section id="contact">
            <div class="container">
                <div class="row">

                      <div class="col-md-6 col-sm-12">
                          <form id="contact-form" role="form">
                                <div class="section-title">
                                    <h2>Contact us <small>we love conversations. let us talk!</small></h2>
                                </div>

                                <div class="col-md-12 col-sm-12">
                                    <input type="text" class="form-control" placeholder="Enter full name" name="name" required="" />
                      
                                    <input type="email" class="form-control" placeholder="Enter email address" name="email" required="" />

                                    <textarea class="form-control" rows="6" placeholder="Tell us about your message" name="message" required=""></textarea>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <input type="button" class="form-control" name="send message" value="Send Message" />
                                </div>

                          </form>
                      </div>

                      <div class="col-md-6 col-sm-12">
                          <div class="contact-image">
                                <img src="assets/images/contact-image.jpg" class="img-responsive" alt="Smiling Two Girls" />
                          </div>
                      </div>

                </div>
            </div>
        </section>       


      
        <footer id="footer">
            <div class="container">
                <div class="row">

                      <div class="col-md-4 col-sm-6">
                          <div class="footer-info">
                                <div class="section-title">
                                    <h2>Institute</h2>
                                </div>
                                <address>
                                    <p>HNO-425/Sector 31<br /> Faridabad, Haryana 121003</p>
                                </address>

                                <ul class="social-icon">
                                    <li><a href="https://www.facebook.com/officialcoladco" class="fa fa-facebook-square" attr="facebook icon"></a></li>
                                    <li><a href="https://twitter.com/coladco" class="fa fa-twitter"></a></li>
                                    <li><a href="https://instagram.com/coladco" class="fa fa-instagram"></a></li>
                                </ul>

                                <div class="copyright-text"> 
                                    <p>Copyright &copy; 2022 Coladco</p>
                                    
                                </div>
                          </div>
                      </div>

                      <div class="col-md-4 col-sm-6">
                          <div class="footer-info">
                                <div class="section-title">
                                    <h2>Contact Info</h2>
                                </div>
                                <address>
                                    <p>+91 7042414212, 0129-3544677</p>
                                    <p><a href="mailto:contactuscoladco@gmail.com">Contactuscoladco@gmail.com</a></p>
                                </address>

                                <div class="footer_menu">
                                    <h2>Quick Links</h2>
                                    <ul>
                                          <li><a href="#">Career</a></li>
                                          <li><a href="#">Investor</a></li>
                                          <li><a href="#">Terms & Conditions</a></li>
                                          <li><a href="#">Refund Policy</a></li>
                                    </ul>
                                </div>
                          </div>
                      </div>
                      <div class="col-md-4 col-sm-12">
                          <div class="footer-info newsletter-form">
                                <div class="section-title">
                                    <h2>Newsletter Signup</h2>
                                </div>
                                <div>
                                    <div class="form-group">
                                          <form action="#" method="get">
                                              <input type="email" class="form-control" placeholder="Enter your email" name="email" id="email" required="" />
                                              <input type="submit" class="form-control" name="submit" id="form-submit" value="Send me" />
                                          </form>
                                          <span><sup>*</sup> Please note - we do not spam your email.</span>
                                    </div>
                                </div>
                          </div>
                      </div>
                      
                </div>
            </div>
        </footer>
  </div>
) } }
 export default App;