import React, { useState } from "react";
import "../styles/Form.css";

const Form = ({ getSearchCity }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchCity(city);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <input
        type="text"
        placeholder="Search..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </form>
  );
};

export default Form;
