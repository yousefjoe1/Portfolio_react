import { Box, Card, CardContent, Grid } from "@mui/material";
import React from "react";

import img1 from "../../Imgs/Certf/c1.png";
import img2 from "../../Imgs/Certf/c2.png";
import img3 from "../../Imgs/Certf/c3.png";
import img4 from "../../Imgs/Certf/c4.png";
import img5 from "../../Imgs/Certf/c5.png";
import img6 from "../../Imgs/Certf/c6.png";

import st from "./certificate.module.css";

const Certificate = () => {
  return (
    <section className={st.certifcatesContainer}>
      <Grid justifyContent={"center"} container>
        <Box className={st.box} m={3}>
          <Card>
            <img src={img1} alt="" />
          </Card>
        </Box>
        <Box className={st.box} m={3}>
          <Card>
            <img src={img2} alt="" />
          </Card>
        </Box>
        <Box className={st.box} m={3}>
          <Card>
            <img src={img3} alt="" />
          </Card>
        </Box>
        <Box className={st.box} m={3}>
          <Card>
            <img src={img4} alt="" />
          </Card>
        </Box>
        <Box className={st.box} m={3}>
          <Card>
            <img src={img5} alt="" />
          </Card>
        </Box>
        <Box className={st.box} m={3}>
          <Card>
            <img src={img6} alt="" />
          </Card>
        </Box>
      </Grid>
    </section>
  );
};

export default Certificate;
