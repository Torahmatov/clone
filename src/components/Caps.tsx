import React from "react";
import products from "../data/products";
import { Link } from "react-router-dom";

const Caps: React.FC = () => {
  const capsProducts = products.caps;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Caps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {capsProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="border p-4 rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-2"
              />
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Caps;
