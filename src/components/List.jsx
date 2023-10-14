import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cardpro from "./Cardpro";

export const Cardcontext = createContext();
function List() {
  const [product, setProduct] = useState([]);
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Cardcontext.Provider value={product}>
        <Cardpro />
      </Cardcontext.Provider>
    </>
  );
}

export default List;
