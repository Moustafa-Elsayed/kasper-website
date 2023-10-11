import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Head from "./pages/navbar/Head";
import Newform from "./pages/form/Newform";
import Home from "./pages/home/Home";
import { useState } from "react";
// import Error from "./pages/error/Error";

function App() {
  const [open, setOpen] = useState("none");
  const [close, setClose] = useState("permanent");

  // const [data, setData] = useState("");
  // const getData = () => {
  //   const body = {
  //     title: "test product",
  //     price: 13.5,
  //     description: "lorem ipsum set",
  //     image: "https://i.pravatar.cc",
  //     category: "electronic",
  //   };
  //   axios.get("https://fakestoreapi.com/products/1").then((res) => {
  //     setData(res?.data);
  //   });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <>
      <Head open={open} setOpen={setOpen} close={close} setClose={setClose} />
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact" element={<Contact />} />
        <Route path="newform" element={<Newform />} />
      </Routes>
    </>
  );
}

export default App;
