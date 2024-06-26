import React from "react";
import startIcon from "./Images/startIcon.png";
import FirstCard from "./Images/FirstCard.png";
import secondCard from "./Images/SecondImage.png";
import thirdCard from "./Images/ThirdCard.png";
import fourthCard from "./Images/FourthCard.png";
import footerIcon from "./Images/footer.png";
import facebook from "./Images/Facebook .png";
import twitter from "./Images/twitter.png";
import instagram from "./Images/instagram.png";
import LinkedIn from "./Images/LinkedIn.png";
import "./style.css";

function SecondCard() {
  return (
    <div class="second-container">
      <h1 class="heading">What's in it for you</h1>
      <div class="card-wrapper">
        <div class="card">
          <div class="card-content">
            <h2 class="card-text">Get updates on</h2>
            <h2 class="card-text card-text-secondary">
              Latest news <span style={{ color: "black" }}>&</span> trends
            </h2>
          </div>
          <div class="card-image">
            <img
              alt="Trends"
              src={FirstCard}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img
              alt="Trends"
              src={secondCard}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div class="card-content-end">
            <h2 class="card-text-end">
              Energy in <span class="card-text-secondary">dynamic</span>{" "}
            </h2>
            <h2 class="card-text-end card-text-secondary">
              Conversation <span style={{ color: "black" }}>Instantly</span>{" "}
            </h2>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <h2 class="card-text card-text-secondary">
              Post <span style={{ color: "black" }}>&</span> repost{" "}
              <span style={{ color: "black" }}>yours</span>
            </h2>
            <h2 class="card-text">thought with</h2>
            <h2 class="card-text">friends</h2>
          </div>
          <div class="card-image">
            <img
              alt="Trends"
              src={thirdCard}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img
              alt="Trends"
              src={fourthCard}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div class="card-content-end">
            <h2 class="card-text card-text-secondary">
              Follow <span style={{ color: "black" }}>your favorite</span>
            </h2>
            <h2 class="card-text ">creators</h2>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <h2>Join us today</h2>
            <p>Be part of something bigger than yourself!</p>
          </div>
          <div class="card-content-last">
            <p>Download our app to experience seamless </p>
            <p>connections, vibrant conversations, and a community</p>
            <p>where your voice truly matters. Join us and elevate</p>
            <p>your digital experience today!</p>
            <button class="card-button">
              <img
                src={startIcon}
                alt="Start Icon"
                width="37px"
                height="35px"
              />
              Get it on google play
            </button>
          </div>
        </div>
      </div>

      <div class="card-wrapper-sm">
        <div class="card">
          <div class="card-content">
            <h2 class="card-text">Get updates on</h2>
            <h2 class="card-text card-text-secondary">
              Latest news <span style={{ color: "black" }}>&</span> trends
            </h2>
          </div>
          <div class="card-image">
            <img
              alt="Trends"
              src={FirstCard}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div class="card">
          <div class="card-content-end">
            <h2 class="card-text-end">
              Energy in <span class="card-text-secondary">dynamic</span>{" "}
            </h2>
            <h2 class="card-text-end card-text-secondary">
              Conversation <span style={{ color: "black" }}>Instantly</span>{" "}
            </h2>
          </div>
          <div class="card-image">
            <img
              alt="Trends"
              src={secondCard}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <h2 class="card-text card-text-secondary">
              Post <span style={{ color: "black" }}>&</span> repost{" "}
              <span style={{ color: "black" }}>yours</span>
            </h2>
            <h2 class="card-text">thought with</h2>
            <h2 class="card-text">friends</h2>
          </div>
          <div class="card-image">
            <img
              alt="Trends"
              src={thirdCard}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div class="card">
          <div class="card-content-end">
            <h2 class="card-text card-text-secondary">
              Follow <span style={{ color: "black" }}>your favorite</span>
            </h2>
            <h2 class="card-text ">creators</h2>
          </div>
          <div class="card-image">
            <img
              alt="Trends"
              src={fourthCard}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div class="card">
          <div class="card-content-last">
            <h2 class="card-text-secondary ">Join us today</h2>
            <h3>Be part of something bigger than yourself!</h3>
          </div>
          <div class="card-content-last">
            <p>Download our app to experience seamless </p>
            <p>connections, vibrant conversations, and a community</p>
            <p>where your voice truly matters. Join us and elevate</p>
            <p>your digital experience today!</p>
            <button class="card-button">
              <img
                src={startIcon}
                alt="Start Icon"
                width="24px"
                height="23px"
              />
              Get it on google play
            </button>
          </div>
        </div>
      </div>

      <footer class="footer">
        {/* <div class="footer-sm"> */}
        <div class="footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Support & Help</a>
        </div>
        <div class="social-media">
          <div>
            <img
              src={facebook}
              alt="Footer Icon"
              style={{ width: "32px", height: "27px", marginRight: "8px" }}
            />
            <span>Facebook</span>
          </div>
          <div>
            <img
              src={twitter}
              alt="Footer Icon"
              style={{ width: "32px", height: "27px", marginRight: "8px" }}
            />
            <span>Twitter</span>
          </div>
          <div>
            <img
              src={instagram}
              alt="Footer Icon"
              style={{ width: "32px", height: "27px", marginRight: "8px" }}
            />
            <span>Instagram</span>
          </div>
          <div>
            <img
              src={LinkedIn}
              alt="Footer Icon"
              style={{ width: "32px", height: "27px", marginRight: "8px" }}
            />
            <span>LinkedIn</span>
          </div>
          {/* </div> */}
        </div>
        <div class="copyright">
          <img src={footerIcon} alt="Footer Icon" />
          <span>
            2024 <span class="post">post</span>. All rights reserved
          </span>
        </div>
      </footer>

      <footer class="footer-sm-box">
        <div class="footer-sm">
          <div class="social-media">
            <div>
              <img
                src={facebook}
                alt="Footer Icon"
                style={{ width: "32px", height: "27px", marginRight: "8px" }}
              />
              <span>Facebook</span>
            </div>
            <div>
              <img
                src={twitter}
                alt="Footer Icon"
                style={{ width: "32px", height: "27px", marginRight: "8px" }}
              />
              <span>Twitter</span>
            </div>
            <div>
              <img
                src={instagram}
                alt="Footer Icon"
                style={{ width: "32px", height: "27px", marginRight: "8px" }}
              />
              <span>Instagram</span>
            </div>
            <div>
              <img
                src={LinkedIn}
                alt="Footer Icon"
                style={{ width: "32px", height: "27px", marginRight: "8px" }}
              />
              <span>LinkedIn</span>
            </div>
            {/* </div> */}
          </div>
          <div class="footer-links">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Support & Help</a>
            <a href="/">Contact</a>
          </div>
        </div>
        <div class="copyright">
          <img src={footerIcon} alt="Footer Icon" />
          <span>
            2024 <span class="post">post</span>. All rights reserved
          </span>
        </div>
      </footer>

      <footer class="footer-md">
        <div class="copyright">
          <img src={footerIcon} alt="Footer Icon" />
          <span>
            2024 <span class="post">post</span>. All rights reserved
          </span>
        </div>
        <div class="footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
        </div>
      </footer>
    </div>
  );
}

export default SecondCard;
