import { useState } from "react";

/* eslint-disable react/prop-types */
function Greeting() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const nameHandler = (value) => {
    setName(value);
  };
  const passHandler = (value) => {
    setPassword(value);
  };
  const gendHandler = (value) => {
    setGender(value);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ name, password, gender });
        }}
      >
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => {
            nameHandler(e.target.value);
          }}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            passHandler(e.target.value);
          }}
        />
        <br />
        <select
          onChange={(e) => {
            gendHandler(e.target.value);
          }}
        >
          <option value="male">male</option>
          <option value="female">femlae</option>
        </select>
        <br />
        <button>submite</button>
      </form>
    </>
  );
}

export default Greeting;
