import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer_container d-flex flex-xl-row flex-column align-items-start justify-content-start">
          <div class="newsletter_container">
            <div class="newsletter_title">
              <h2>Subscribe to our newsletter</h2>
            </div>
            <form action="#" id="newsletter_form" class="newsletter_form">
              <input
                type="email"
                class="newsletter_input"
                placeholder="Your E-mail"
                required="required"
              />
              <button class="newsletter_button">Subscribe</button>
            </form>
          </div>
          <div class="footer_lists d-flex flex-sm-row  flex-column align-items-start justify-content-start ml-xl-auto">
            <div class="footer_list">
              <div class="footer_list_title">Useful Links</div>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About us</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Music</a>
                </li>
                <li>
                  <a href="blog.html">News</a>
                </li>
              </ul>
            </div>

            
            <div class="footer_list">
              <div class="footer_list_title">Connect</div>
              <ul>
                <li>
                  <a href="#">Spotify</a>
                </li>
                <li>
                  <a href="#">Apple Music</a>
                </li>
                <li>
                  <a href="#">Deezer</a>
                </li>
                <li>
                  <a href="#">Shazam</a>
                </li>
                <li>
                  <a href="#">Soundcloud</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="copyright_bar">
          <span>
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | This Website is made with{" "}
            <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
            <a href="https://codefunky.vercel.app" target="_blank">
              ManuelSZN
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
