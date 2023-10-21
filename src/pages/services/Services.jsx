import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import AddToHomeScreenIcon from "@mui/icons-material/AddToHomeScreen";
import "./services.css";
const Services = () => {
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
          SERVICES
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
            <AcUnitIcon /> Vorem amet intuitive
          </Typography>
          <Typography variant="body1" component="p" color="initial" sx={{width:"80%",margin:"0 auto"}}>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Curabitur aliquet quam.
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
            <AccountCircleIcon /> Vorem amet intuitive
          </Typography>
          <Typography variant="body1" component="p" color="initial" sx={{width:"80%",margin:"0 auto"}}>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Curabitur aliquet quam.
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
            <AddAlertIcon /> Vorem amet intuitive
          </Typography>
          <Typography variant="body1" component="p" color="initial" sx={{width:"80%",margin:"0 auto"}}>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Curabitur aliquet quam.
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
            <AddToHomeScreenIcon /> Vorem amet intuitive
          </Typography>
          <Typography variant="body1" color="initial" sx={{width:"80%",margin:"0 auto"}}>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Curabitur aliquet quam.
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
