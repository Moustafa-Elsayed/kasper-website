import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <div className="contact" style={{padding:"90px"}}>
      <Typography gutterBottom variant="h3" align="center">
        Contact
      </Typography>
      <Card sx={{maxWidth:500,margin:"0 auto",padding:"20 5 ",backgroundColor:"#dee2e626"}}>
        <CardContent>
          <form action="">
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder="Enter First Name"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder="Enter Last Name"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  placeholder="Enter Your Email"
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  placeholder="Enter Your Phone"
                  label="phone"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  placeholder="Enter Your Message"
                  label="Message"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
