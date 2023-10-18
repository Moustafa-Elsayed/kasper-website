import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate=useNavigate();
  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);

  useEffect(() => {
    // setLoading(true)
    axios.get(url).then((res) => {
      // setLoading(false)
      setData(res?.data);
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        color="initial"
        sx={{ marginTop: "20px", fontWeight: "bold" }}
      >
        Popular Products
      </Typography>
      <Grid container spacing={5}>
        {data.map((product) => {
          return (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Card
                elevation={5}
                sx={{ maxWidth: "100%", borderRadius: "9px", height: "100%" }}
              >
                <CardActionArea>
                  <CardMedia
                    marginTop="30px"
                    component="img"
                    height="140"
                    image={product.image}
                    alt="green iguana"
                    sx={{ paddingTop: "10px" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.price}
                    </Typography>
                    <Button size="small" color="primary" variant="contained"
                    onClick={()=>{
                      navigate(`/product/${product.id}`)
                    }}>
                      Details
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Products;
