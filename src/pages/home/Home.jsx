import { Container } from "@mui/material";
import Slider from "../../components/Slider";
import About from "../about/About";
import Products from "../product/Products";
import Services from "../services/Services";
import Card from "../product/Card";
import Pricing from "../pricing/Pricing";

const Home = () => {
  return (
    <>
      <Slider />
      <Container maxWidth="lg">
        <About />
        <Card />
        <Products />
        <Services />
        <Pricing />
      </Container>
    </>
  );
};

export default Home;
