import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Create from "./pages/Create";
import EditMakeup from "./pages/EditOrDelete";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="App">
      {/* component to render navigation */}
      <Navigation />
      {/* function to  define route for all pages to be rendered */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="create" element={<Create />} />
        <Route path="/product/:id/edit" element={<EditMakeup />} />
      </Routes>
    </div>
  );
}

export default App;
