/* eslint-disable no-undef */
import { Box, Typography, Grid, Container } from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import EmailIcon from "@mui/icons-material/Email";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{ paddingTop: "120px ", position: "relative", margin: "0 auto" }}
        >
          <Typography
            variant="h2"
            color="initial"
            sx={{
              marginBottom: "30px",
              fontSize: { xs: "2.5rem", sm: "3rem" },
              fontWeight: "bold",
            }}
          >
            <Typography
              variant=""
              color="initial"
              sx={{
                border: "1px solid #1976d2",
                padding: "9px",
                borderRadius: "5px",
              }}
            >
              {t("About us")}
            </Typography>
          </Typography>

          <Typography
            variant="body1"
            color="initial"
            component="p"
            sx={{ marginBottom: "50px", fontSize: { xs: "14px", sm: "16px" } }}
          >
            {t("Curabitur arcu erat, accumsan id imperdiet et,")} <br /> porttitor at
            sem. Mauris blandit aliquet elit, eget tincidunt
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img src=".\img\about.png" alt="" data-aos="fade-right" />
          </Box>
        </Box>
        <Box className="about-sec">
          <Grid container spacing={0} bgcolor="#1976d2" padding="45px 0">
            <Grid xs={12} md={3} l={3} item data-aos="flip-left">
              <CoffeeIcon fontSize="large" sx={{ mb: "10px" }} />
              <Typography
                variant="h3"
                color="initial"
                sx={{ mb: "10px", color: "white" }}
              >
                1.236
              </Typography>
              <Typography component="p" color="initial" sx={{ mb: "10px" }}>
                {t("Coffee Drinks")}
              </Typography>
            </Grid>
            <Grid xs={12} md={3} l={3} item data-aos="flip-left">
              <DriveFileMoveIcon fontSize="large" sx={{ mb: "10px" }} />
              <Typography
                variant="h3"
                color="initial"
                sx={{ mb: "10px", color: "white" }}
              >
                256
              </Typography>
              <Typography component="p" color="initial" sx={{ mb: "10px" }}>
                {t("Completed Projects")}
              </Typography>
            </Grid>
            <Grid xs={12} md={3} l={3} item data-aos="flip-left">
              <EmailIcon fontSize="large" sx={{ mb: "10px" }} />
              <Typography
                variant="h3"
                color="initial"
                sx={{ mb: "10px", color: "white" }}
              >
                1,743
              </Typography>
              <Typography component="p" color="initial" sx={{ mb: "10px" }}>
                {t("Mail Sent")}
              </Typography>
            </Grid>
            <Grid xs={12} md={3} l={3} item data-aos="flip-left">
              <EmojiEventsIcon fontSize="large" sx={{ mb: "10px" }} />
              <Typography
                variant="h3"
                color="initial"
                sx={{ mb: "10px", color: "white" }}
              >
                17
              </Typography>
              <Typography component="p" color="initial" sx={{ mb: "10px" }}>
                {t("Awards Received")}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default About;
