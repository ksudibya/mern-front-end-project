import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMakeup, updateMakeup } from "../services/makeup";

export default function EditMakeup() {
  const [makeup, setMakeup] = useState({
    name: "",
    brand: "",
    productType: "",
    image: "",
    productLink: "",
    colours: [],
    description: "",
  });

  let navigate = useNavigate();
  
  let { id } = useParams();

  const fetchMakeup = async () => {
    const oneMakeup = await getMakeup(id);
    setMakeup(oneMakeup);
  };

  useEffect(() => {
    fetchMakeup();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMakeup((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateMakeup(id, makeup);
    navigate(`/product`, { replace: true });
  };

  return (
    <div>
      <h1>Update a Makeup</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your makeup name"
          name="name"
          
          value={makeup.name}
          onChange={handleChange}
        />
        <input
          placeholder="Enter your brand"
          name="brand"
          value={makeup.brand}
          onChange={handleChange}
        />
        <input
          placeholder="Enter your productType"
          name="species"
          value={makeup.productType}
          onChange={handleChange}
        />
        <input
          placeholder="Enter your image"
          name="image"
          value={makeup.image}
          onChange={handleChange}
        />
        <input
          placeholder="Enter your productLink"
          name="productLink"
          value={makeup.productLink}
          onChange={handleChange}
        />
        <input
          placeholder="Enter your Description"
          name="description"
          value={makeup.description}
          onChange={handleChange}
        />
        <button type="submit">Update Your Makeup</button>
      </form>
    </div>
  );
}
