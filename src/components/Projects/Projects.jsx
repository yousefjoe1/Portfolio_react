import { Accordion, Card, CardContent, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import st from "./projects.module.css";

import adviceGen from "../../Imgs/advice-generator.png";
import amazon from "../../Imgs/amazontemp.png";
import temp1 from "../../Imgs/temp1.png";
import vegcart from "../../Imgs/veg-cart.png";
import shopcart from "../../Imgs/shoppingcart.png";
import weatherapp from "../../Imgs/weatherapp.png";
import Travel_advisor_project from "../../Imgs/Travel_advisor_project.png";
import crypto_project from "../../Imgs/crypto_project.png";
import questions from "../../Imgs/questions.png";
import storeimg from "../../Imgs/store.png";
import discord from "../../Imgs/discord.png";
import linkedin from "../../Imgs/linkedin.png";
import calc from "../../Imgs/calc.png";
import todo from "../../Imgs/todo.png";
import wordgame from "../../Imgs/wordgame.png";

const Projects = () => {
  return (
    <section id="projects" className={st.projectsContainer}>
      <h1 className={st.title}>Projects</h1>
      <Grid justifyContent={"center"} container>
        <Box className={st.box} m={2} width={"500px"} height={"400px"}>
          <Card>
            <img src={linkedin} alt="" />
            <CardContent className={st.cardclass}>
              <h2>
                <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/linkedIn-clone-2022/"
                >
                  Click To Visit LinkedIn
                </a>
              </h2>
              <h3 className={st.description}>
                HTML + CSS + JAVASCRIPT + REACT.JS + REACT_BOOTSTRAP + BOOTSTRAP
              </h3>
            </CardContent>
          </Card>
        </Box>
        <Box className={st.box} m={2} width={"500px"} height={"400px"}>
          <Card>
            <img src={discord} alt="" />
            <CardContent className={st.cardclass}>
              <h2>
                <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/discord-clone/#/"
                >
                  Click To Visit Discord
                </a>
              </h2>
              <h3 className={st.description}>
                HTML + CSS + JAVASCRIPT + REACT.JS + REACT_BOOTSTRAP + BOOTSTRAP
              </h3>
            </CardContent>
          </Card>
        </Box>
        <Box className={st.box} m={2} width={"500px"} height={"400px"}>
          <Card>
            <img src={adviceGen} alt="" />
            <CardContent className={st.cardclass}>
              <h2>
                <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/advice-generator-app/"
                >
                  Click To Visit Advice Generator
                </a>
              </h2>
              <h3 className={st.description}>
                HTML + CSS + JAVASCRIPT + REACT.JS
              </h3>
            </CardContent>
          </Card>
        </Box>
        <Box className={st.box} m={2} width={"500px"} height={"400px"}>
          <Card>
            <img src={amazon} alt="" />
            <CardContent className={st.cardclass}>
              <h2 className={st.prTitle}>
                <a
                  href="https://yousefjoe1.github.io/amazone1/"
                  target="_blank"
                >
                  Click To Visit Amazon
                </a>
              </h2>
              <h3 className={st.description}>
                HTML + CSS + JAVASCRIPT + REACT.JS
              </h3>
            </CardContent>
          </Card>
        </Box>
        <Box className={st.box} m={2} width={"500px"} height={"500px"}>
          <Card>
            <img src={calc} alt="" />
            <CardContent className={st.cardclass}>
              <h2 className={st.prTitle}>
                <a
                  href="https://yousefjoe1.github.io/Simple-Calculator/"
                  target="_blank"
                >
                  Click To Visit Calculator
                </a>
              </h2>
              <h3 className={st.description}>
                HTML + CSS + JAVASCRIPT + REACT.JS + TYPESCRIPT + TAILWIND CSS
              </h3>
            </CardContent>
          </Card>
        </Box>
        <Box className={st.box} m={2} width={"500px"} height={"500px"}>
          <Card>
            <img src={wordgame} alt="" />
            <CardContent className={st.cardclass}>
              <h2 className={st.prTitle}>
                <a
                  href="https://yousefjoe1.github.io/Words-Game/"
                  target="_blank"
                >
                  Click To Visit Words Game
                </a>
              </h2>
              <h3 className={st.description}>
                HTML + CSS + JAVASCRIPT + REACT.JS + TYPESCRIPT + TAILWIND CSS
              </h3>
            </CardContent>
          </Card>
        </Box>
        <Box className={st.box} m={2} width={"500px"} height={"500px"}>
          <Card>
            <img src={todo} alt="" />
            <CardContent className={st.cardclass}>
              <h2 className={st.prTitle}>
                <a
                  href="https://yousefjoe1.github.io/Simple-Todo-app/"
                  target="_blank"
                >
                  Click To Visit Todo
                </a>
              </h2>
              <h3 className={st.description}>
                HTML + CSS + JAVASCRIPT + REACT.JS + TYPESCRIPT + TAILWIND CSS
              </h3>
            </CardContent>
          </Card>
        </Box>
        <Box className={st.box} m={2} width={"500px"} height={"450px"}>
          <Card>
            <img src={temp1} alt="" />
            <CardContent className={st.cardclass}>
              <h2 className={st.prTitle}>
                <a
                  href="https://yousefjoe1.github.io/temp-2n/#/"
                  target="_blank"
                >
                  Click To Visit Responsive Landing Page.
                </a>{" "}
              </h2>
              <h3 className={st.description}>
                HTML + CSS + JAVASCRIPT + BOOTSTRAP + REACT.JS
              </h3>
            </CardContent>
          </Card>
        </Box>
        <Box className={st.box} m={2} width={"500px"} height={"400px"}>
          <Card>
            <img src={vegcart} alt="" />
            <CardContent className={st.cardclass}>
              <h2 className={st.prTitle}>
                <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/vegetables-shopping-cart/"
                >
                  Click To Visit Vegetable Shopping Cart.
                </a>{" "}
              </h2>
              <h3 className={st.description}>
                HTML + CSS + JAVASCRIPT + REACT.JS + REDUX/TOOLKIT
              </h3>
            </CardContent>
          </Card>
        </Box>
        <Box className={st.box} m={2} width={"500px"} height={"400px"}>
          <Card>
            <img src={shopcart} alt="" />
            <CardContent className={st.cardclass}>
              <h2 className={st.prTitle}>
                <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/my-shopping-cart/#/shopping-cart"
                >
                  Click To Visit Food Shopping Cart.
                </a>{" "}
              </h2>
              <h3 className={st.description}>
                HTML + CSS + JAVASCRIPT + BOOTSTRAP + REACT.JS
              </h3>
            </CardContent>
          </Card>
        </Box>
        <Box className={st.box} m={2} width={"500px"} height={"400px"}>
          <Card>
            <img src={weatherapp} alt="" />
            <CardContent className={st.cardclass}>
              <h2 className={st.prTitle}>
                <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/simple-weather-app-js/"
                >
                  Click To Visit Weather App.
                </a>
              </h2>
              <h3 className={st.description}>HTML + CSS + JAVASCRIPT</h3>
            </CardContent>
          </Card>
        </Box>
        <Box className={st.box} m={2} width={"500px"} height={"400px"}>
          <Card>
            <img src={Travel_advisor_project} alt="" />
            <CardContent className={st.cardclass}>
              <h2 className={st.prTitle}>
                <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/simple-react-travel-advisor-app/"
                >
                  Click To Visit Travel Advisor.
                </a>
              </h2>
              <h3 className={st.description}>
                HTML + CSS + JAVASCRIPT + REACT + GOOGLE MAPS + MATERIAL-UI
              </h3>
            </CardContent>
          </Card>
        </Box>
        <Box className={st.box} m={2} width={"500px"} height={"400px"}>
          <Card>
            <img src={crypto_project} alt="" />
            <CardContent className={st.cardclass}>
              <h2 className={st.prTitle}>
                <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/crypto-project/"
                >
                  Click To Visit Crypto app info.
                </a>
              </h2>
              <h3 className={st.description}>
                HTML + CSS + JAVASCRIPT + REACT + Anti Design
              </h3>
            </CardContent>
          </Card>
        </Box>
        <Box className={st.box} m={2} width={"500px"} height={"400px"}>
          <Card>
            <img src={questions} alt="" />
            <CardContent className={st.cardclass}>
              <h2 className={st.prTitle}>
                <a target="_blank" href="https://questions-game-cd095.web.app/">
                  Click To Visit Questions Game.
                </a>
              </h2>
              <h3 className={st.description}>
                HTML + CSS + JAVASCRIPT + REACT + MATERIAL-UI + FIREBASE + REDUX
              </h3>
            </CardContent>
          </Card>
        </Box>
        <Box className={st.box} m={2} width={"500px"} height={"400px"}>
          <Card>
            <img src={storeimg} alt="" />
            <CardContent className={st.cardclass}>
              <h2 className={st.prTitle}>
                <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/Simple-E-commerce/index.html"
                >
                  Click To Visit Store.
                </a>
              </h2>
              <h3 className={st.description}>
                HTML + CSS + JAVASCRIPT + BOOTSTRAP
              </h3>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </section>
  );
};

export default Projects;
