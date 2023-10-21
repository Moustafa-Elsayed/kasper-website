import { Typography, Button } from "@mui/material";
import "./pricing.css";
import Grid from "@mui/material/Grid";

const Pricing = () => {
  return (
    <>
      <Typography
        variant="h2"
        color="initial"
        sx={{ marginTop: "50px", marginBottom: "50px", fontWeight: "bold" }}
      >
        <Typography
          variant=""
          color="initial"
          sx={{
            border: "1px solid #1976d2",
            padding: "9px",
            borderRadius: "5px",
            fontSize: { xs: "20px", sm: "px" },
            fontWeight: "bold",
          }}
        >
          PRICING
        </Typography>
        <Typography
          variant="body1"
          component="p"
          color="initial"
          sx={{ marginTop: "20px " }}
        >
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          <br />
          Mauris blandit aliquet elit, eget tincidunt.
        </Typography>
      </Typography>

      <Grid container spacing={0}>
        <Grid xs={12} sm={6} md={3} item>
          <div className="pricing">
            <div className="plan-content">
              <h3>Gold</h3>
              <span>29</span>
            </div>
            <ul className="plan-links">
              <li>Feature No 1</li>
              <li>Extra Feature</li>
              <li>Extra Feature No 2</li>
              <li>Feature</li>
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginBottom: "19px" }}
              >
                Buy Now
              </Button>
            </ul>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <div className="pricing">
            <div className="plan-content">
              <h3>Gold</h3>
              <span>29</span>
            </div>
            <ul className="plan-links">
              <li>Feature No 1</li>
              <li>Extra Feature</li>
              <li>Extra Feature No 2</li>
              <li>Feature</li>
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginBottom: "19px" }}
              >
                Buy Now
              </Button>
            </ul>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <div className="pricing">
            <div className="plan-content">
              <h3>Gold</h3>
              <span>29</span>
            </div>
            <ul className="plan-links">
              <li>Feature No 1</li>
              <li>Extra Feature</li>
              <li>Extra Feature No 2</li>
              <li>Feature</li>
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginBottom: "19px" }}
              >
                Buy Now
              </Button>
            </ul>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <div className="pricing">
            <div className="plan-content">
              <h3>Gold</h3>
              <span>29</span>
            </div>
            <ul className="plan-links">
              <li>Feature No 1</li>
              <li>Extra Feature</li>
              <li>Extra Feature No 2</li>
              <li>Feature</li>
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginBottom: "19px" }}
              >
                Buy Now
              </Button>
            </ul>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Pricing;
