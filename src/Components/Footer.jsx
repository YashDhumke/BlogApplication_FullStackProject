import React from "react";
import img1 from '../images/logo.svg'

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div class="card footer">
            <div class="section footer-top">
              <div class="footer-brand">
                <a href="abc" class="logo">
                  <img
                    src={img1}
                    width="119"
                    height="37"
                    loading="lazy"
                    alt="Wren logo"
                  />
                </a>

                <p class="footer-text">
                  When an unknown prnoto sans took a galley and scrambled it to
                  make specimen book not only five When an unknown prnoto sans
                  took a galley and scrambled it to five centurie.
                </p>

                <p class="footer-list-title">Address</p>

                <address class="footer-text address">
                  123 Main Street <br />
                  New York, NY 10001
                </address>
              </div>

              <div class="footer-list">
                <p class="footer-list-title">Categories</p>

                <ul>
                  <li>
                    <a href="abc" class="footer-link hover-2">
                      Action
                    </a>
                  </li>

                  <li>
                    <a href="abc" class="footer-link hover-2">
                      Business
                    </a>
                  </li>

                  <li>
                    <a href="abc" class="footer-link hover-2">
                      Adventure
                    </a>
                  </li>

                  <li>
                    <a href="abc" class="footer-link hover-2">
                      Canada
                    </a>
                  </li>

                  <li>
                    <a href="abc" class="footer-link hover-2">
                      America
                    </a>
                  </li>

                  <li>
                    <a href="abc" class="footer-link hover-2">
                      Curiosity
                    </a>
                  </li>

                  <li>
                    <a href="abc" class="footer-link hover-2">
                      Animal
                    </a>
                  </li>

                  <li>
                    <a href="abc" class="footer-link hover-2">
                      Dental
                    </a>
                  </li>

                  <li>
                    <a href="abc" class="footer-link hover-2">
                      Biology
                    </a>
                  </li>

                  <li>
                    <a href="abc" class="footer-link hover-2">
                      Design
                    </a>
                  </li>

                  <li>
                    <a href="abc" class="footer-link hover-2">
                      Breakfast
                    </a>
                  </li>

                  <li>
                    <a href="abc" class="footer-link hover-2">
                      Dessert
                    </a>
                  </li>
                </ul>
              </div>

              <div class="footer-list">
                <p class="footer-list-title">Newsletter</p>

                <p class="footer-text">
                  Sign up to be first to receive the latest stories inspiring
                  us, case studies, and industry news.
                </p>

                <div class="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    class="input-field"
                    autocomplete="off"
                  />

                  <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                </div>

                <div class="input-wrapper">
                  <input
                    type="email"
                    name="email_address"
                    placeholder="Emaill address"
                    required
                    class="input-field"
                    autocomplete="off"
                  />

                  <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                </div>

                <a href="abc" class="btn btn-primary">
                  <span class="span">Subscribe</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </div>

            <div class="footer-bottom">
              <p class="copyright">
                &copy; Developed by{" "}
                <a href="abc" class="copyright-link">
                  codewithsadee.
                </a>
              </p>

              <ul class="social-list">
                <li>
                  <a href="abc" class="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>

                    <span class="span">Twitter</span>
                  </a>
                </li>

                <li>
                  <a href="abc" class="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>

                    <span class="span">LinkedIn</span>
                  </a>
                </li>

                <li>
                  <a href="abc" class="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>

                    <span class="span">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;   
