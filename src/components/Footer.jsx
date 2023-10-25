import "./Footer.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "@mui/material";
const Footer = () => {
  return (
    <Box marginBottom="20px" marginTop="60px" className="footer">
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <div className="socail">
            <h2>WE ARE SOCIAL</h2>
            <Link href="https://www.facebook.com/?locale=ar_AR">
              <FacebookIcon
                sx={{ color: "blue", fontSize: "30px", padding: "10px" }}
              />
            </Link>

            <Link href="https://www.instagram.com/">
              <InstagramIcon
                sx={{ color: "red", fontSize: "30px", padding: "10px" }}
              />
            </Link>
            <Link href="https://twitter.com/?lang=ar">
              <TwitterIcon
                sx={{ color: "black", fontSize: "30px", padding: "10px" }}
              />
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="copy">
            <h2>
              © 2023 <span>Kasper</span> All Right Reserved
            </h2>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
