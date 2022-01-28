import "./App.css";
import { MdWavingHand } from "react-icons/md";
import {
  SiJavascript,
  SiMaterialui,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiVercel,
  SiVisualstudio,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaReact, FaGitAlt } from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <div className="banner">
        <div className="bannerContent">
          <a href=".comment" className="bannerItem">
            About
          </a>
          <div className="bannerItemLine"></div>
        </div>
        <div className="bannerContent">
          <a href=".skill" className="bannerItem">
            Skill
          </a>
          <div className="bannerItemLine"></div>
        </div>
        <div className="bannerContent">
          <span className="bannerItem">Project</span>
          <div className="bannerItemLine"></div>
        </div>
        <div className="bannerContent">
          <span className="bannerItem">Contact Me</span>
          <div className="bannerItemLine"></div>
        </div>
        <div className="bannerContent">
          <span className="bannerItem">Resume</span>
          <div className="bannerItemLine"></div>
        </div>
      </div>
      <div className="comment">
        <div className="commentHeader">
          <span>ABOUT</span>
          <span>Who Is Selim?</span>
        </div>
        <div className="about">
          <div className="aboutLeft">
            <img src=" https://i.hizliresim.com/rqknsv7.jpg" />
          </div>
          <div className="aboutRight">
            <div className="aboutRight-hi">
              {" "}
              <h2>
                HI THERE !{" "}
              </h2> <MdWavingHand className="aboutRight-icon" />{" "}
            </div>
            <h1>
              I'M AN{" "}
              <strong style={{ color: "rgb(0, 0, 0, 0.322)" }}>
                ELECTRICAL ENGINEERING
              </strong>{" "}
            </h1>
            <p>
              I am a newly graduated electrical and electronics engineer. Also,
              I improve my frontend development skills.
            </p>
          </div>
        </div>
      </div>
      <div className="skill">
        <div className="skillDesc">
          {" "}
          <span>SKILLS & TOOLS</span>
          <span>
            {" "}
            I am researching, learning and trying to apply with all my strength
            to develop myself in the following software languages and tools.
          </span>
        </div>
        <div className="skillGrid">
          <div className="skillGrid-item">
            <SiJavascript className="skillGrid-itemIcon" />
            <p className="skillGrid-itemName">JavaScript</p>
          </div>
          <div className="skillGrid-item">
            <DiCss3 className="skillGrid-itemIcon" />
            <p className="skillGrid-itemName">CSS</p>
          </div>
          <div className="skillGrid-item">
            <AiFillHtml5 className="skillGrid-itemIcon" />
            <p className="skillGrid-itemName">HTML</p>
          </div>
          <div className="skillGrid-item">
            <SiMaterialui className="skillGrid-itemIcon" />
            <p className="skillGrid-itemName">Metarial UI</p>
          </div>

          <div className="skillGrid-item">
            <SiTailwindcss className="skillGrid-itemIcon" />
            <p className="skillGrid-itemName">Tailwind CSS</p>
          </div>
          <div className="skillGrid-item">
            <FaReact className="skillGrid-itemIcon" />
            <p className="skillGrid-itemName">React JS</p>
          </div>
          <div className="skillGrid-item">
            <SiNextdotjs className="skillGrid-itemIcon" />
            <p className="skillGrid-itemName">Next JS</p>
          </div>
          <div className="skillGrid-item">
            <AiFillGithub className="skillGrid-itemIcon" />
            <p className="skillGrid-itemName">GitHub</p>
          </div>
          <div className="skillGrid-item">
            <SiPython className="skillGrid-itemIcon" />
            <p className="skillGrid-itemName">Python</p>
          </div>
          <div className="skillGrid-item">
            <SiVercel className="skillGrid-itemIcon" />
            <p className="skillGrid-itemName">Vercel</p>
          </div>
          <div className="skillGrid-item">
            <SiVisualstudio className="skillGrid-itemIcon" />
            <p className="skillGrid-itemName">Vs Code</p>
          </div>
          <div className="skillGrid-item">
            <FaGitAlt className="skillGrid-itemIcon" />
            <p className="skillGrid-itemName">Git</p>
          </div>
        </div>
      </div>
      <div className="project"> </div>
      <div className="contact">
        <div className="contactDesc"></div>
      </div>
      <div className="footer">
        <p>
          {" "}
          <span style={{ color: "#f0535d" }}>© 2022</span> |{" "}
          <span style={{ color: "rgb(137, 43, 226)" }}>
            Designed & coded with
          </span>{" "}
          by <strong style={{ color: "rgb(0, 0, 0)" }}> Selim Sevgi,</strong>{" "}
          All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
