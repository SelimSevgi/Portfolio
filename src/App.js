import "./App.css";
import { MdWavingHand, MdEmail, MdSentimentNeutral } from "react-icons/md";
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
import {
  AiFillHtml5,
  AiFillGithub,
  AiOutlineCloseSquare,
} from "react-icons/ai";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";

import { styled } from "@mui/material/styles";
// form

import TextField from "@mui/material/TextField";
// button

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function App() {
  //mu companent
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "rgba(217, 255, 0, 0.89)",
      fontWeight: "700",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
        border: "3px solid #ffffff98",
        backgroundColor: "#ff00001e",
      },
      "&:hover fieldset": {
        borderColor: "rgba(217, 255, 0, 0.89)",
        border: "3px solid rgba(255, 0, 0, 0.89)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(255, 0, 0, 0.89)",
        border: "3px solid rgba(217, 255, 0, 0.89)",
      },
    },
  });
  // emailjs companent
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0obrbvn",
        "template_2tavgfq",
        form.current,
        "user_V3lWZKyNg4pF1ip77SF5H"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [menu, setMenu] = useState(false);
  console.log("menuu :: " + menu);
  return (
    <div className="App">
      <div className="mobilMenu">
        <HiOutlineMenu className="mobileOpen" onClick={() => setMenu(true)} />
      </div>
      {menu && (
        
          <div className="mobilMenuOpen">
            <AiOutlineCloseSquare
              className="mobileClose"
              onClick={() => setMenu(false)}
            />

            <div className="bannerContent">
              <a
                href="#about"
                className="bannerItem"
                onClick={() => setMenu(false)}
              >
                About
              </a>
              <div className="bannerItemLine"></div>
            </div>
            <div className="bannerContent">
              <a
                href="#skill"
                className="bannerItem"
                onClick={() => setMenu(false)}
              >
                Skill
              </a>
              <div className="bannerItemLine"></div>
            </div>
            <div className="bannerContent">
              <a
                href="#project"
                className="bannerItem"
                onClick={() => setMenu(false)}
              >
                Project
              </a>
              <div className="bannerItemLine"></div>
            </div>
            <div className="bannerContent">
              <a
                href="#contactMe"
                className="bannerItem"
                onClick={() => setMenu(false)}
              >
                Contact
              </a>
              <div className="bannerItemLine"></div>
            </div>
            <div className="bannerContent">
              <a
                href="https://selim-sevgi-cv.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="bannerItem"
                onClick={() => setMenu(false)}
              >
                Resume
              </a>
              <div className="bannerItemLine"></div>
            </div>
          </div>
        
      )}
      <div className="banner">
        <div className="bannerContent">
          <a href="#about" className="bannerItem">
            About
          </a>
          <div className="bannerItemLine"></div>
        </div>
        <div className="bannerContent">
          <a href="#skill" className="bannerItem">
            Skill
          </a>
          <div className="bannerItemLine"></div>
        </div>
        <div className="bannerContent">
          <a href="#project" className="bannerItem">
            Project
          </a>
          <div className="bannerItemLine"></div>
        </div>
        <div className="bannerContent">
          <a href="#contactMe" className="bannerItem">
            Contact
          </a>
          <div className="bannerItemLine"></div>
        </div>
        <div className="bannerContent">
          <a
            href="https://selim-sevgi-cv.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="bannerItem"
          >
            Resume
          </a>
          <div className="bannerItemLine"></div>
        </div>
      </div>

      <div className="comment" id="about">
        <div className="commentHeader">
          <span>ABOUT</span>
          <span>Who Is Selim?</span>
        </div>
        <div className="about">
          <div className="aboutLeft">
            <img src=" https://i.hizliresim.com/rqknsv7.jpg" alt="profile" />
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
              <strong style={{ color: "rgb(0, 0, 0, 0.7)" }}>
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
      <div className="skill" id="skill">
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
      <div className="project" id="project">
        {" "}
        <div className="projectDesc">
          <span>SOME OF THE PROJECT</span>
          <span>I have designed and worked on</span>
        </div>
        <div className="projectCompanent">
          <div className="projectLeft">
            <h1>Yemek Sepeti</h1>
            <p>
              I cloned the Yemeksepeti website, one of the popular food websites
              in Turkey, on mobile and desktop. In this project, I developed it
              using NextJs.
            </p>
            <div className="projectIcons">
              {" "}
              <SiJavascript className="projectIcon" />
              <DiCss3 className="projectIcon" />
              <AiFillHtml5 className="projectIcon" />
              <SiNextdotjs className="projectIcon" />
              <SiVisualstudio className="projectIcon" />
              <SiVercel className="projectIcon" />
            </div>
            <div className="projectFooter">
              <a href="https://yemeksepeti-clone.vercel.app/">View It Here</a>
              <a href="https://github.com/SelimSevgi/yemeksepeti-clone">
                View Github Repo
              </a>
            </div>
          </div>

          <div className="projectRight">
            <img
              src="https://i.hizliresim.com/o2eiv00.png"
              alt="yemeksepetiResponsive"
            />
          </div>
        </div>
        <div className="projectCompanent">
          <div className="projectLeft">
            <h1>Yemek Sepeti</h1>
            <p>
              I cloned the Yemeksepeti website, one of the popular food websites
              in Turkey, on mobile and desktop. In this project, I developed it
              using NextJs.
            </p>
            <div className="projectIcons">
              {" "}
              <SiJavascript className="projectIcon" />
              <DiCss3 className="projectIcon" />
              <AiFillHtml5 className="projectIcon" />
              <SiNextdotjs className="projectIcon" />
              <SiVisualstudio className="projectIcon" />
              <SiVercel className="projectIcon" />
            </div>
            <div className="projectFooter">
              <a
                href="https://yemeksepeti-clone.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View It Here
              </a>
              <a
                href="https://github.com/SelimSevgi/yemeksepeti-clone"
                target="_blank"
                rel="noreferrer"
              >
                View Github Repo
              </a>
            </div>
          </div>

          <div className="projectRight">
            <img
              src="https://i.hizliresim.com/o2eiv00.png"
              alt="yemeksepetiResponsive"
            />
          </div>
        </div>
        <div className="projectCompanent">
          <div className="projectLeft">
            <h1>Yemek Sepeti</h1>
            <p>
              I cloned the Yemeksepeti website, one of the popular food websites
              in Turkey, on mobile and desktop. In this project, I developed it
              using NextJs.
            </p>
            <div className="projectIcons">
              {" "}
              <SiJavascript className="projectIcon" />
              <DiCss3 className="projectIcon" />
              <AiFillHtml5 className="projectIcon" />
              <SiNextdotjs className="projectIcon" />
              <SiVisualstudio className="projectIcon" />
              <SiVercel className="projectIcon" />
            </div>
            <div className="projectFooter">
              <a
                href="https://yemeksepeti-clone.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View It Here
              </a>
              <a
                href="https://github.com/SelimSevgi/yemeksepeti-clone"
                target="_blank"
                rel="noreferrer"
              >
                View Github Repo
              </a>
            </div>
          </div>

          <div className="projectRight">
            <img
              src="https://i.hizliresim.com/o2eiv00.png"
              alt="yemeksepetiResponsive"
            />
          </div>
        </div>
      </div>
      <div className="contact" id="contactMe">
        <p className="contactDesc">CONTACT</p>
        <div className="contactImg">
          {" "}
          <div className="contactContainer">
            <div className="contactLeft">
              <span>
                Contact me immediately by sending an e-mail, you can be sure
                that I will get back to you as soon as possible.
              </span>
              <form ref={form} onSubmit={sendEmail}>
                <CssTextField
                  type="text"
                  name="user_name"
                  label="Name"
                  id="custom-css-outlined-input"
                />
                <CssTextField
                  label="Email"
                  type="email"
                  name="user_email"
                  id="custom-css-outlined-input"
                />
                <CssTextField label="Telephone" name="tel" />
                <CssTextField
                  id="custom-css-outlined-input"
                  label="Message"
                  multiline
                  rows={4}
                  name="message"
                />
                <div className="formBtn">
                  <button type="submit" className="contactLeftButton">
                    <span>Send Mail</span>
                    <MdEmail className="contactLeftButton-Icon" />
                  </button>
                </div>
              </form>
            </div>
            <div className="contactRight">
              <p>Find me on these online spaces too!</p>
              <div className="contactRightIcons">
                <a
                  href="https://www.linkedin.com/in/selim-sevgi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin className="contactRightIcon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/selim-sevgi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="contactRightIcon" />
                </a>

                <a
                  href="mailto:slmsvg44@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MdEmail className="contactRightIcon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>
          {" "}
          <span style={{ color: "black" }}>© 2022 |</span>{" "}
          <span> Designed & coded with by</span>{" "}
          <strong style={{ color: "black" }}> Selim Sevgi,</strong> All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
