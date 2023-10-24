import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import AddToHomeScreenIcon from "@mui/icons-material/AddToHomeScreen";
import { useTranslation } from "react-i18next";
import "./services.css";
const Services = () => {
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
          {t("SERVICES")}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          color="initial"
          sx={{ marginTop: "20px " }}
        >
          {t("Curabitur arcu erat,")} {t("accumsan id imperdiet et,")}{" "}
          {t("porttitor at sem.")}
          <br />
          {t("Mauris blandit aliquet elit, eget tincidunt.")}
        </Typography>
      </Typography>

      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ marginBottom: "10px", marginTop: "10px" }}
        >
          <Typography
            className="content-box"
            variant="h5"
            component="h2"
            sx={{ color: "blue", marginBottom: "10px" }}
          >
            <AcUnitIcon /> {t("Vorem amet intuitive")}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="initial"
            sx={{ width: "80%", margin: "0 auto" }}
          >
            {t("Curabitur arcu erat,")} {t("accumsan id imperdiet et,")}{" "}
            {t("porttitor at sem.")}
            {t("Mauris blandit aliquet elit, eget tincidunt.")}
          </Typography>
        </Grid>
        <Grid
          xs={12}
          md={6}
          item
          sx={{ marginBottom: "10px", marginTop: "10px" }}
        >
          <Typography
            variant="h5"
            className="content-box"
            component="h2"
            sx={{ color: "blue", marginBottom: "10px" }}
          >
            <AccountCircleIcon /> {t("Vorem amet intuitive")}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="initial"
            sx={{ width: "80%", margin: "0 auto" }}
          >
            {t("Curabitur arcu erat,")} {t("accumsan id imperdiet et,")}{" "}
            {t("porttitor at sem.")}
            {t("Mauris blandit aliquet elit, eget tincidunt.")}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ marginBottom: "10px", marginTop: "10px" }}
        >
          <Typography
            variant="h5"
            className="content-box"
            component="h2"
            sx={{ color: "blue", marginBottom: "10px" }}
          >
            <AddAlertIcon /> {t("Vorem amet intuitive")}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="initial"
            sx={{ width: "80%", margin: "0 auto" }}
          >
            {t("Curabitur arcu erat,")} {t("accumsan id imperdiet et,")}{" "}
            {t("porttitor at sem.")}
            {t("Mauris blandit aliquet elit, eget tincidunt.")}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ marginBottom: "10px", marginTop: "10px" }}
        >
          <Typography
            variant="h5"
            className="content-box"
            sx={{ color: "blue", marginBottom: "10px" }}
          >
            <AddToHomeScreenIcon /> {t("Vorem amet intuitive")}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ width: "80%", margin: "0 auto" }}
          >
            {t("Curabitur arcu erat,")} {t("accumsan id imperdiet et,")}{" "}
            {t("porttitor at sem.")}
            {t("Mauris blandit aliquet elit, eget tincidunt.")}
          </Typography>
        </Grid>
      </Grid>
      {/* <Typography variant="body2" color="initial">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
        debitis hic eum consectetur culpa atque mollitia quisquam nobis suscipit
        nostrum accusamus sint vero dolorem officiis doloribus, voluptates
        minima, velit incidunt?
      </Typography> */}
    </>
  );
};

export default Services;
