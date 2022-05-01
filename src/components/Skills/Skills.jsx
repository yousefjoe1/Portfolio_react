import React from "react";

import st from "./skills.module.css";
import { DiBootstrap } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiFirebase } from "react-icons/di";

import { FaBeer } from "react-icons/fa";

const Skills = () => {
  return (
    <div className={st.skillsContainer} id="skills">
      <h1 className={st.title}>Skills</h1>

      <section className={st.circle}>
        <div className={st.iconDiv}>
          <DiHtml5 className={st.iconContainer + " " + st.animediv} />
          <p>HTML</p>
        </div>

        <div className={st.iconDiv}>
          <DiCss3 className={st.iconContainer + " " + st.animediv} />
          <p>CSS</p>
        </div>

        <div className={st.iconDiv}>
          <DiJsBadge className={st.iconContainer + " " + st.animediv} />
          <p>JAVASCRIPT</p>
        </div>

        <div className={st.iconDiv}>
          <DiSass className={st.iconContainer + " " + st.animediv} />
          <p>SASS</p>
        </div>

        <div className={st.iconDiv}>
          <DiBootstrap className={st.iconContainer + " " + st.animediv} />
          <p>BOOTSTRAP</p>
        </div>

        <div className={st.iconDiv}>
          <DiGit className={st.iconContainer + " " + st.animediv} />
          <p>GIT</p>
        </div>

        <div className={st.iconDiv}>
          <DiReact className={st.iconContainer + " " + st.animediv} />
          <p>REACT</p>
        </div>

        <div className={st.iconDiv}>
          <DiFirebase className={st.iconContainer + " " + st.animediv} />
          <p>FIREBASE</p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
