import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { logSchema } from "../../components/Schemas";
import axios from "axios";

const Newform = () => {
  const onSubmit = () => {
    console.log("submitted");
    postData();
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        cpassword: "",
      },
      validationSchema: logSchema,
      onSubmit,
    });

  const postData = () => {
    const body = {
      username: values.username,
      email: values.email,
      password: values.password,
      cpassword: values.cpassword,
    };
    console.log(body);
    axios
      .post("https://fakestoreapi.com/products", body)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="contact" style={{ paddingTop: "90px" }}>
      <Typography gutterBottom variant="h3" align="center">
        Sign-Up
      </Typography>

      <Card
        sx={{
          maxWidth: 500,
          margin: "0 auto",
          padding: "20 5 ",
          backgroundColor: "#dee2e626",
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit} action="">
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  id="username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                  placeholder="Enter User Name"
                  label="User Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  placeholder="Enter Your Email"
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  placeholder="Enter Your Password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  value={values.cpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.cpassword && Boolean(errors.cpassword)}
                  helperText={touched.cpassword && errors.cpassword}
                  placeholder="confirm Your Password"
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  required
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

export default Newform;
