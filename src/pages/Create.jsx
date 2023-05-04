import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../App.css";
import { createMakeUp } from "../services/makeup";

function Product() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createMakeUp(name, description);
    navigate("/products", { replace: true });
  };

  return (
    <div className="App">
      <header>
        <h1>Create Make-Up App</h1>
      </header>
      <div>
        <form onSubmit={handleSubmit} className="form-section">
          <label for="name">Enter a title:</label>
          <input
            placeholder="Enter your title"
            name="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="description">Enter a description:</label>
          <textarea
            placeholder="Enter your description"
            name="description"
            className="form-control"
            id=""
            cols="10"
            rows="8"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="button" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Product;
