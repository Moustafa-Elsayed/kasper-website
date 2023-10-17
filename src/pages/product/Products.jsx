import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Button,
  CardActionArea,
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
        {data.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            {/* <Card
              elevation={5}
              sx={{
                marginTop:"20px",
                borderRadius: "9px",
                height: "100%",
                display:"flex",
                flexDirection:"column"
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  width="100%"
                  image={product.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    color="text.secondary"
                  >
                    {product.title}
                  </Typography>
                  <Typography variant="h5" color="intial">
                    {product.price}$
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "center" }}>
                  <Button size="small" color="primary" variant="contained">
                    Details
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card> */}
            <Card
              elevation={5}
              sx={{ maxWidth: "100%", borderRadius: "9px", height: "100%" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
                  <Button size="small" color="primary" variant="contained">
                    Details
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
