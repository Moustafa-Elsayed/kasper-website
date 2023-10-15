import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Container,
} from "@mui/material";
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
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {data.map((product) => (
          <Grid key={product.id} item  xs={6} sm={4} md={3}>
            <Card sx={{ marginBottom: "20px",marginTop:"30px" }}>
              <CardActionArea >
                <CardMedia
                  component="img"
                  height="140"
                  width="100%"
                  image={product.image}
                  alt="green iguana"
                />
                <CardContent sx={{minHeight:"180px"}}>
                  <Typography gutterBottom variant="body2" component="div"  >
                    {product.title}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    {product.price}$
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{justifyContent:"center"}}>
                <Button size="small" color="primary" variant="contained"  >
                  Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
