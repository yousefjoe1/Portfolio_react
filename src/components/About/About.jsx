import React, { useContext } from "react";

import me from "../../Imgs/me.png";
import st from "./about.module.css";

import { DiGithubBadge } from "react-icons/di";
import { ThemeChanger } from "../../App";

const About = () => {
  const darkMode = useContext(ThemeChanger);

  const darkModeStyle = {
    backgroundColor: darkMode ? "black" : "",
  };

  return (
    <div style={darkModeStyle} id="about" className={st.aboutContainer}>
      <h1 className={st.title}>About</h1>
      <section className={st.aboutSection}>
        <img src={me} alt="" />
        <article className={st.infoContainer}>
          <div className={st.titles}>
            <h4 className={st.hellotxt}>Hello & Welcome</h4>
            <h2>
              I'M <strong className={st.myname}>Youssef Mahmoud</strong>
            </h2>
            <h1>Front End Developer</h1>
          </div>
          <div className={st.details}>
            <div className={st.leftInfo}>
              <p>
                <strong>Age:</strong>{" "}
              </p>
              <p>
                <strong>Address:</strong>
              </p>
              <p>
                <strong>
                  {/* <FaEnvelope />  */}
                  Email:
                </strong>
              </p>
              <p>
                <strong>Phone:</strong>
              </p>
            </div>
            <div className={st.rightInfo}>
              <p>26 .</p>
              <p>Egypt, El Mansoura .</p>
              <p>yousefmahmoud150@gmail.com .</p>
              <p>01061670173 .</p>
            </div>
          </div>
          <div className={st.personalLinks}>
            <a
              href="https://github.com/yousefjoe1"
              target="_blank"
              rel="github account"
            >
              <DiGithubBadge />
            </a>
          </div>
        </article>
      </section>
      <h3 className={st.brief}>
        I love Coding and I learn every day to be as best as I can.
        <br />I have a great passion to be from the top developers around the
        worlds.
      </h3>
    </div>
  );
};

export default About;
