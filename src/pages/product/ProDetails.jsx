import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ProDetails = () => {
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
          maxHeight: "",
          borderRadius: "9px",
          margin: "150px auto 0",
          position: "relative",
        }}
      >
        <Button
          onClick={() => {
            navigate("/");
          }}
          startIcon={<ArrowBackIosNewIcon />}
          variant="text"
          color="primary"
        sx={{position:"absolute",top:"13px",left:"13px",zIndex:"222"}}
        >
          Back
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
              {data.category}
            </Typography>
            <Typography gutterBottom variant="body1">
              {data.description}
            </Typography>
            <Typography variant="body2" color="primary">
              {data.price}$
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ProDetails;
