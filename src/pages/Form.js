import React, { useState } from "react";
import dishNameValidation from "../DishNameValidation";
import "../styles/Form.css";
const Form = () => {
  const [name, setName] = useState("");
  const [preparation_time, setPreparation_time] = useState("");
  const [type, setType] = useState("pizza");
  const [no_of_slices, setNumber_of_slices] = useState(1);
  const [diameter, setDiamater] = useState(0);
  const [slices_of_bread, setSlices_of_bread] = useState(1);
  const [spiciness_scale, setSpiciness_scale] = useState(1);
  const [isPosted, setisPosted] = useState(false);
  const [errors, setErros] = useState([]);

  const showInputs = () => {
    if (type === "pizza")
      return (
        <>
          <label>
            Slices of pizza:
            <input type="number" min="1" required value={no_of_slices} onChange={(e) => setNumber_of_slices(e.target.value)} />
          </label>
          <label>
            Pizza diameter:
            <input type="number" required value={diameter} onChange={(e) => setDiamater(e.target.value)} />
          </label>
        </>
      );

    if (type === "soup")
      return (
        <label>
          Spiciness of soup:
          <input type="range" required min="1" max="10" step="1" value={spiciness_scale} onChange={(e) => setSpiciness_scale(e.target.value)} />
        </label>
      );

    if (type === "sandwich")
      return (
        <label>
          Slices of bread:
          <input type="number" min="1" required value={slices_of_bread} onChange={(e) => setSlices_of_bread(e.target.value)} />
        </label>
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = dishNameValidation(name);
    const errors = validation.map((error) => <li key={error}>{error}</li>);
    setErros(errors);

    setisPosted(true);

    let order = {};
    if (errors.length === 0) {
      if (type === "pizza") order = { name, preparation_time, type, no_of_slices, diameter };
      if (type === "soup") order = { name, preparation_time, type, spiciness_scale };
      if (type === "sandwich") order = { name, preparation_time, type, slices_of_bread };

      fetch("https://frosty-wood-6558.getsandbox.com:443/dishes", {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          if (!response.ok) {
            console.log("ERROR: " + response.status);
          }
        })
        .then((data) => {
          setisPosted(false);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <form className="mainForm" onSubmit={handleSubmit}>
      <label>
        Dish name:
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Preperation time:
        <input
          type="time"
          required
          step="1"
          value={preparation_time}
          onChange={(e) => {
            setPreparation_time(e.target.value);
          }}
        />
      </label>
      <label>
        Select dish type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="pizza">pizza</option>
          <option value="soup">soup</option>
          <option value="sandwich">sandwich</option>
        </select>
      </label>
      {showInputs(type)}
      <button type="submit">{isPosted ? "Sending..." : "Send order"}</button>
      <div className="errors">{errors}</div>
    </form>
  );
};

export default Form;
