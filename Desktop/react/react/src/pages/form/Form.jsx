import axios from "axios";
import { useState } from "react";
import "./Form.css";
function Form() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    if (!name) {
      setError("name is requried");
    } else {
      console.log({ name, password, gender });
    }
    postData();
  };

  const postData = () => {
    const body = {
      title: title,
      price: price,
      description: description,
      image: "https://i.pravatar.cc",
      category: category,
    };

    console.log(body);
    axios.post("https://fakestoreapi.com/products", body).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="form-data">
          <div className="content">
            <div className="inputs">
            
              <input
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <br />
            <div className="inputs">
            

              <input
                type="text"
                placeholder="price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <br />
            <div className="inputs">
              <label>description</label>

              <input
                type="text"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <br />
            </div>
            <div className="inputs">
              <label>category</label>

              <input
                type="text"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </div>
            <br />
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <>
        <p>{error}</p>
      </>
    </>
  );
}

export default Form;
