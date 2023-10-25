import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "../../redux/productReducer";
import { useTranslation } from "react-i18next";
const Products = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading , setLoading] = useState(false);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const ReduxData = useSelector((state) => state.product.data);


  useEffect(() => {
    // setLoading(true)
    axios.get(url).then((res) => {
      // setLoading(false)
      setData(res?.data);
      dispatch(storeData(res?.data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(ReduxData,"from product");
  return (
    <>
      <Typography
        variant="h4"
        color="initial"
        sx={{ marginTop: "50px", marginBottom: "50px", fontWeight: "bold" }}
      >
        <Typography
          variant=""
          color="initial"
          sx={{
            padding: "5px",
            border: "1px solid #1976d2",

            borderRadius: "5px",
          }}
        >
          {t("Popular Products")}
        </Typography>
      </Typography>
      {loading===true?
      <>
      loading ...
      </>  :
    <Grid container spacing={5}>
        {data.map((product) => {
          return (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Card
                elevation={5}
                sx={{ maxWidth: "100%", borderRadius: "9px", height: "100%" }}
                onClick={() => {
                  navigate(`/product/${product.id}`);
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt="green iguana"
                    sx={{ paddingTop: "10px" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {t(`${product.category}`)}
                      
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginBottom: "5px" }}
                    >
                      {product.price}$
                    </Typography>
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      onClick={() => {
                        navigate(`/product/${product.id}`);
                      }}
                    >
                      {t("Details")}
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>  
    
    }
      
    </>
  );
};

export default Products;
