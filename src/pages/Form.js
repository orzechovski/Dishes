import React, { useState } from "react";
import "../styles/Form.css";
const Form = () => {
  const [name, setName] = useState("");
  const [preparation_time, setPreparation_time] = useState("00:00:00");
  const [type, setType] = useState("pizza");
  const [number_of_slices, setNumber_of_slices] = useState(0);
  const [diameter, setDiamater] = useState(0);
  const [slices_of_bread, setSlices_of_bread] = useState(0);
  const [spiciness_scale, setSpiciness_scale] = useState(0);

  const showInputs = () => {
    if (type === "pizza")
      return (
        <>
          <input type="number" value={number_of_slices} onChange={(e) => setNumber_of_slices(e.target.value)} />
          <input type="number" value={diameter} onChange={(e) => setDiamater(e.target.value)} />
        </>
      );

    if (type === "soup") return <input type="range" min="0" max="10" step="1" value={spiciness_scale} onChange={setSpiciness_scale} />;

    if (type === "sandwich") return <input type="number" value={slices_of_bread} onChange={(e) => setSlices_of_bread(e.target.value)} />;
  };
  return (
    <form className="mainForm">
      <label htmlFor="">
        Dish name:
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label htmlFor="">
        Preperation time:
        <input
          type="time"
          step="1"
          value={preparation_time}
          onChange={(e) => {
            setPreparation_time(e.target.value);
          }}
        />
      </label>
      <label htmlFor="">
        Select dish type:
        <select name="" id="" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="pizza">pizza</option>
          <option value="soup">soup</option>
          <option value="sandwich">sandwich</option>
        </select>
      </label>
      <label htmlFor="">{showInputs(type)}</label>
      <button type="submit">Send order</button>
    </form>
  );
};

export default Form;
