import Grid from "@mui/material/Grid";
import "./footer.css";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <Box container marginBottom="20px" marginTop="60px" className="footer">
      <Grid container spacing={2}>
        <Grid xs={12} sm={12} md={3} lg={4} item>
          <div>
            <h3>COMPANY</h3>
            <a href="">
              <p>ABOUT US</p>
            </a>
            <a href="">
              <p>BLOG</p>
            </a>
            <a href="">
              <p>CAREERS</p>
            </a>
          </div>
        </Grid>
        <Grid xs={12} sm={12} md={3} lg={4} item>
          <div>
            <h3>RESOURSES</h3>
            <a href="">
              <p>FAQ</p>
            </a>
            <a href="">
              <p>SYSYTEMS</p>
            </a>
            <a href="">
              <p>CAREERS</p>
            </a>
          </div>
        </Grid>
        <Grid xs={12} sm={12} md={3} lg={4} item>
          <div>
            <h3>SOCIAL</h3>
            <a href="">
              <FacebookIcon />
            </a>
            <a href="">
              <YouTubeIcon />
            </a>
            <a href="">
              <InstagramIcon />
            </a>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
