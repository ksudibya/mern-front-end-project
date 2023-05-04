import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../App.css";
import { getMakeups } from "../services/makeup";

function Product() {
  
  const [posts, setMakeups] = useState([]);

  // function to get all makeup data
  const fetchMakeups = async () => {
    const allMakeups = await getMakeups();
    setMakeups(allMakeups);
  };

  useEffect(() => {
    fetchMakeups();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Make-Up App</h1>
      </header>
      <div>
        {posts.map((post) => {
          return (
            <div className="post-card" key={post._id}>
              <h1 className="post-title">{post.productType}</h1>
              <img src={post.image} alt={post.name}></img>
              <h2 className="post-title">{post.name}</h2>
              <p className="post-body">{post.description}</p>
              <a
                href={post.productLink}
                rel="noreferrer"
                target="_blank"
                className="post-link"
              >
                Link
              </a>
              <Link to={`/product/${post._id}/edit`}>Edit Makeup</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
