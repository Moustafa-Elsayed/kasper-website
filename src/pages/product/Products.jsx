import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";
const Products = () => {
  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res?.data);
    });
  }, []);
  console.log(data);
  return (
    <>
      {data.map((product) => (
        <Container key={product.id}>
          <Card sx={{ maxWidth: 220, marginBottom: "20px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                width="100%"
                image={product.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" variant="outlined">
                Details
              </Button>
            </CardActions>
          </Card>
        </Container>
      ))}
    </>
  );
};

export default Products;
