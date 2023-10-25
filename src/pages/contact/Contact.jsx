import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { basicShema } from "../../components/Schemas";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const onSubmit = () => {
    console.log("submitted");
    postData();
  };
  const { handleBlur, errors, touched, handleChange, values, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      },
      validationSchema: basicShema,
      onSubmit,
    });
  const postData = () => {
    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      message: values.message,
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
        {t("Contact")}
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
          <form action="" onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  value={values.firstName}
                  name="firstName"
                  id={t("firstName")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("Enter First Name")}
                  label={t("First Name")}
                  variant="outlined"
                  fullWidth
                  required
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  name="lastName"
                  id={t("lastName")}
                  value={values.lastName}
                  placeholder={t("Enter Last Name")}
                  label={t("Last Name")}
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  required
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  name="email"
                  id={t("email")}
                  type="email"
                  value={values.email}
                  placeholder={t("Enter Your Email")}
                  label={t("E-mail")}
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  required
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  name="phone"
                  id={t("phone")}
                  placeholder={t("Enter Your Phone")}
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label={t("phone")}
                  variant="outlined"
                  fullWidth
                  required
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  name="message"
                  id={t("message")}
                  placeholder={t("Enter Your Message")}
                  value={values.message}
                  label={t("Message")}
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  multiline
                  rows={3}
                  error={touched.message && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  {t("Submit")}
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
