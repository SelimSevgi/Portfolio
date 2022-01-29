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

// import emailjs from "emailjs-com";

function App() {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_0obrbvn",
  //       "template_2tavgfq",
  //       form.current,
  //       "user_V3lWZKyNg4pF1ip77SF5H"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();

  return (
    <div className="App">
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
            Contact Me
          </a>
          <div className="bannerItemLine"></div>
        </div>
        <div className="bannerContent">
          <a href="#resume" className="bannerItem">
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
          <span>SOME OF THE PPROJECT</span>
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
          <div className="projectLeft1">
            <img
              src="https://i.hizliresim.com/o2eiv00.png"
              alt="yemeksepetiResponsive"
            />
          </div>
          <div className="projectRight1">
            <h1>Yemek Sepeti</h1>
            <p>
              I cloned the Yemeksepeti website, one of the popular food websites
              in Turkey, on mobile and desktop. In this project, I developed it
              using NextJs.
            </p>
            <div className="projectIcons1">
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
      </div>
      <div className="contact" id="contactMe">
        <div className="contactImg">
          {" "}
          {/* <form className="contactForm" ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required // boş girilmesini önlemek için
              ></input>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="1231231212*"
                pattern="[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
                required
              ></input>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail*"
                required
              ></input>
              <input
                type="text"
                id="interest"
                name="interest"
                placeholder="Interested In"
                required
              ></input>
              <textarea
                id="message"
                name="message"
                rows="10"
                cols="50"
                placeholder="Message*"
                required
              ></textarea>
              <input
                type="submit"
                className="contact-btn"
                value="Send Message"
              ></input>
            </form>*/}
        </div>
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
