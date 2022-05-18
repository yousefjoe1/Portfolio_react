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

const Projects = () => {
  return (
    <section id="projects" className={st.projectsContainer}>
      <h1 className={st.title}>Projects</h1>
      <Grid justifyContent={"center"} container>
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
                <a href="https://yousefjoe1.github.io/amazone1/">
                  Click To Visit Amazon
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
            <img src={temp1} alt="" />
            <CardContent className={st.cardclass}>
              <h2 className={st.prTitle}>
                <a
                  href="https://yousefjoe1.github.io/temp-2n/#/"
                  target="_blank"
                >
                  Click To Visit Responsive Landing page
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
                  Click To Visit Vegetable Shopping Cart
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
                  Click To Visit Food Shopping Cart
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
                  Click To Visit Weather App
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
                  Click To Visit Travel Advisor
                </a>
              </h2>
              <h3 className={st.description}>
                HTML + CSS + JAVASCRIPT + REACT + GOOGLE MAPS + MATERIAL-UI
              </h3>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </section>
  );
};

export default Projects;
