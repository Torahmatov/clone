import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from '../redux/cartSlice';
import { RootState } from '../redux/store';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty</p>
      ) : (
        <div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mb-6"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
              <img src={item.image} alt={item.name} className="w-24 h-24" />
              <div className="ml-4">
                <h2 className="text-xl">{item.name}</h2>
                <p className="text-sm">Price: ${item.price}</p>
                <div className="flex items-center">
                  <button
                    className="px-2 bg-gray-300 rounded"
                    onClick={() => dispatch(decreaseQuantity({ id: item.id }))}>
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    className="px-2 bg-gray-300 rounded"
                    onClick={() => dispatch(increaseQuantity({ id: item.id }))}>
                    +
                  </button>
                </div>
              </div>
              <button
                className="ml-auto bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => dispatch(removeFromCart({ id: item.id }))}>
                Remove
              </button>
            </div>
          ))}
          <h2 className="text-2xl font-semibold">Total: ${totalAmount.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
