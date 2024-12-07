import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Product } from '../data/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border p-4 rounded-lg">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-lg font-medium text-gray-700 mb-4">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
