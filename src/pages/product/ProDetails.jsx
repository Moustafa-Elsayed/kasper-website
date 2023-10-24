import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const ProDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();
  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    // setLoading(true)
    axios.get(`${url}/${params.id}`).then((res) => {
      // setLoading(false)
      setData(res?.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Card
        elevation={5}
        sx={{
          maxWidth: "600px",
          borderRadius: "9px",
          margin: "130px auto 0",
          position: "relative",
        }}
        data-aos="fade-down"
      >
        <Button
          onClick={() => {
            navigate("/");
          }}
          startIcon={<ArrowBackIosNewIcon />}
          variant="text"
          color="primary"
          sx={{
            position: "absolute",
            top: "13px",
            left: "13px",
            zIndex: "222",
          }}
        >
          {t("Back")}
        </Button>

        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data.image}
            alt="green iguana"
            sx={{ paddingTop: "62px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {t(`${data.category}`)}
              
            </Typography>
            <Typography gutterBottom variant="body1">
              {t(`${data.description}`)}
              
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              sx={{ marginBottom: "10px" }}
            >
              {data.price}$
            </Typography>
            <Button variant="outlined" disabled>
              {t("Buy Now")}
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ProDetails;
