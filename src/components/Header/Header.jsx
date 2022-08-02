import React, { useState, useContext } from "react";
import styles from "./header.module.css";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import AllOutIcon from "@mui/icons-material/AllOut";
import { ThemeChanger } from "../../App";

const Header = () => {
  const darkMode = useContext(ThemeChanger);

  const darkModeStyle = {
    backgroundColor: darkMode ? "black" : "",
  };

  const [showNav, setShowNav] = useState(false);
  return (
    <AppBar style={darkModeStyle} position="fixed">
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Toolbar>
          <Typography variant="h4">YOUSSEF</Typography>
        </Toolbar>
        <Stack
          sx={{ display: { sm: "block", md: "none", lg: "none", xl: "none" } }}
          className={styles.sidenavcontainer}
        >
          <IconButton
            className={styles.iconbtn}
            onClick={() => setShowNav(true)}
          >
            <AllOutIcon />
          </IconButton>
          <Drawer
            className={styles.drawer}
            anchor="left"
            open={showNav}
            onClose={() => setShowNav(false)}
          >
            <Stack className={styles.sidenav} spacing={3}>
              <Link href="#about" underline="none" color={"white"}>
                About
              </Link>
              <Link href="#skills" underline="none" color={"white"}>
                Skills
              </Link>
              <Link href="#projects" underline="none" color={"white"}>
                Projects
              </Link>
              <Link href="#certificates" underline="none" color={"white"}>
                Certificates
              </Link>
            </Stack>
          </Drawer>
        </Stack>
        <Box
          className={styles.links}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <Link href="#about" underline="none" color={"white"}>
            About
          </Link>
          <Link href="#skills" underline="none" color={"white"}>
            Skills
          </Link>
          <Link href="#projects" underline="none" color={"white"}>
            Projects
          </Link>
          <Link href="#certificates" underline="none" color={"white"}>
            Certificates
          </Link>
        </Box>
      </Stack>
    </AppBar>
  );
};

export default Header;
