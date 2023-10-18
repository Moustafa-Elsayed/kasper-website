import "./App.css";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Newform from "./pages/form/Newform";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/root/Root";
import ProDetails from "./pages/product/ProDetails";
// import ProDetails from "./pages/product/ProDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sign" element={<Newform />} />
        <Route path="product/:id" element={<ProDetails />} />
      </Route>
    )
  );
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
