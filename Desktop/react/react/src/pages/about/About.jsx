import { Box, Typography, Grid } from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import EmailIcon from "@mui/icons-material/Email";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import "./About.css";

const About = () => {
  return (
    <>
      <Box
        sx={{ paddingTop: "120px ", position: "relative", margin: "0 auto" }}
      >
        <Typography variant="h3" color="initial" sx={{ marginBottom: "20px" }}>
          About us
        </Typography>

        <Typography
          variant="body1"
          color="initial"
          component="p"
          sx={{ marginBottom: "50px" }}
        >
          Curabitur arcu erat, accumsan id imperdiet et, <br /> porttitor at
          sem. Mauris blandit aliquet elit, eget tincidunt.
        </Typography>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img src=".\img\about.png" alt="" />
        </Box>
      </Box>
      <Box padding="0 30px">
        <Grid container spacing={0} bgcolor="#1976d2" padding="45px 55px">
          <Grid xs={12} md={3} l={3} item>
            <CoffeeIcon fontSize="large" sx={{ mb: "10px" }} />
            <Typography
              variant="h3"
              color="initial"
              sx={{ mb: "10px", color: "white" }}
            >
              1.236
            </Typography>
            <Typography component="p" color="initial" sx={{ mb: "10px" }}>
              Coffee Drinks
            </Typography>
          </Grid>
          <Grid xs={12} md={3} l={3} item>
            <DriveFileMoveIcon fontSize="large" sx={{ mb: "10px" }} />
            <Typography
              variant="h3"
              color="initial"
              sx={{ mb: "10px", color: "white" }}
            >
              256
            </Typography>
            <Typography component="p" color="initial" sx={{ mb: "10px" }}>
              Completed Projects
            </Typography>
          </Grid>
          <Grid xs={12} md={3} l={3} item>
            <EmailIcon fontSize="large" sx={{ mb: "10px" }} />
            <Typography
              variant="h3"
              color="initial"
              sx={{ mb: "10px", color: "white" }}
            >
              1,743
            </Typography>
            <Typography component="p" color="initial" sx={{ mb: "10px" }}>
              Mail Sent
            </Typography>
          </Grid>
          <Grid xs={12} md={3} l={3} item>
            <EmojiEventsIcon fontSize="large" sx={{ mb: "10px" }} />
            <Typography
              variant="h3"
              color="initial"
              sx={{ mb: "10px", color: "white" }}
            >
              17
            </Typography>
            <Typography component="p" color="initial" sx={{ mb: "10px" }}>
              Awards Received
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
