import "./About.css";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiTradingview } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

function About() {
  return (
    <div className="aboutPage">
      <div className="aboutProject">
        <h1 className="aboutHeading">About this Project</h1>
        <div className="aboutBio">
          Our stock market platform is designed to deliver real-time financial
          data and insights with a focus on usability and performance. This
          project is the result of dedicated work from a passionate team
          committed to creating a robust tool for investors and market
          enthusiasts.
        </div>
      </div>
      <div className="aboutPart2">
        <div className="creatorHolder">
          <h1 className="creators">The Creators</h1>
          <div className="samit">
            <h3>Samit Khedekar</h3>
            <div className="aboutBio">
              Backend Developer - Focused on data handling and API integration.
            </div>
          </div>
          <div className="akash">
            <h3>Akash Sahoo</h3>
            <div className="aboutBio">
              Frontend Developer - Specialized in React and modern web
              technologies.
            </div>
          </div>
        </div>
        <div className="techHolders">
          <h1 className="creators">Technologies Used</h1>
          <div className="react">
            <div className="techName">React</div>
            <div className="techLogo">
              <FaReact />
            </div>
          </div>
          <div className="node">
            <div className="techName">Node JS</div>
            <div className="techLogo">
              <FaNodeJs />
            </div>
          </div>
          <div className="chartjs">
            <div className="techName">Trading View Charts</div>
            <div className="techLogo">
              <SiTradingview />
            </div>
          </div>
          <div className="git">
            <div className="techName">Git</div>
            <div className="techLogo">
              <FaGitAlt />
            </div>
          </div>
          <div className="github">
            <div className="techName">Git Hub</div>
            <div className="techLogo">
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <h1>Our Social Links</h1>
        <div className="socialWrapper">
          <div class="social">
            <div class="socialContainer">
              <a
                target="_blank"
                href="https://www.instagram.com/s_akash_05_?igsh=MTdpYnJkZG83MHkyZw=="
              >
                <FaInstagram />
                {/* <i class="fa-brands fa-instagram"></i> */}
              </a>
            </div>
            <div class="socialContainer">
              <a
                target="_blank"
                href="https://x.com/akashsahoo7766?t=F4CenyWGckHQVHnH7s7Tbw&s=09"
              >
                <FaXTwitter />
                {/* <i class="fa-brands fa-x-twitter"></i> */}
              </a>
            </div>
            <div class="socialContainer">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/akash-sahoo-54363a2bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <FaLinkedinIn />
                {/* <i class="fa-brands fa-linkedin-in"></i> */}
              </a>
            </div>
            <div class="socialContainer">
              <a target="_blank" href="https://github.com/akash-s-hub">
                <FaGithub />
                {/* <i class="fa-brands fa-github"></i> */}
              </a>
            </div>
          </div>
          <div class="social">
            <div class="socialContainer">
              <a
                target="_blank"
                href="https://www.instagram.com/s_akash_05_?igsh=MTdpYnJkZG83MHkyZw=="
              >
                <FaInstagram />
                {/* <i class="fa-brands fa-instagram"></i> */}
              </a>
            </div>
            <div class="socialContainer">
              <a
                target="_blank"
                href="https://x.com/akashsahoo7766?t=F4CenyWGckHQVHnH7s7Tbw&s=09"
              >
                <FaXTwitter />
                {/* <i class="fa-brands fa-x-twitter"></i> */}
              </a>
            </div>
            <div class="socialContainer">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/akash-sahoo-54363a2bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <FaLinkedinIn />
                {/* <i class="fa-brands fa-linkedin-in"></i> */}
              </a>
            </div>
            <div class="socialContainer">
              <a target="_blank" href="https://github.com/akash-s-hub">
                <FaGithub />
                {/* <i class="fa-brands fa-github"></i> */}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
