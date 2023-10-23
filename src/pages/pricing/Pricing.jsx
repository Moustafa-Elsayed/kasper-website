import { Typography, Button } from "@mui/material";
import "./pricing.css";
import Grid from "@mui/material/Grid";
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();

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
          {t("PRICING")}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          color="initial"
          sx={{ marginTop: "20px " }}
        >
          {t("Curabitur arcu erat,")} {t("accumsan id imperdiet et,")} {t("porttitor at sem.")}
          <br />
          {t("Mauris blandit aliquet elit, eget tincidunt.")}
        </Typography>
      </Typography>

      <Grid container spacing={0}>
        <Grid xs={12} sm={6} md={3} item>
          <div className="pricing">
            <div className="plan-content">
              <h3>{t("Gold")}</h3>
              <span>29</span>
            </div>
            <ul className="plan-links">
              <li>{t("Feature No 1")}</li>
              <li>{t("Extra Feature")}</li>
              <li>{t("Extra Feature No 2")}</li>
              <li>{t("Feature")}</li>
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginBottom: "19px" }}
              >
                {t("Buy Now")}
              </Button>
            </ul>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <div className="pricing">
            <div className="plan-content">
              <h3>{t("Gold")}</h3>
              <span>29</span>
            </div>
            <ul className="plan-links">
              <li>{t("Feature No 1")}</li>
              <li>{t("Extra Feature")}</li>
              <li>{t("Extra Feature No 2")}</li>
              <li>{t("Feature")}</li>
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginBottom: "19px" }}
              >
                {t("Buy Now")}
              </Button>
            </ul>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <div className="pricing">
            <div className="plan-content">
              <h3>{t("Gold")}</h3>
              <span>29</span>
            </div>
            <ul className="plan-links">
              <li>{t("Feature No 1")}</li>
              <li>{t("Extra Feature")}</li>
              <li>{t("Extra Feature No 2")}</li>
              <li>{t("Feature")}</li>
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginBottom: "19px" }}
              >
                {t("Buy Now")}
              </Button>
            </ul>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <div className="pricing">
            <div className="plan-content">
              <h3>{t("Gold")}</h3>
              <span>29</span>
            </div>
            <ul className="plan-links">
              <li>{t("Feature No 1")}</li>
              <li>{t("Extra Feature")}</li>
              <li>{t("Extra Feature No 2")}</li>
              <li>{t("Feature")}</li>
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginBottom: "19px" }}
              >
                {t("Buy Now")}
              </Button>
            </ul>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Pricing;
