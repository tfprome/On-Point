'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type CartItem = {
  id: number;
  title: string;
  img?: string;
  price: number;
  option?: string;
  quantity: number;
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
  }, []);

  // Recalculate total whenever cart changes
  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cartItems]);

  // Remove item from cart
  const handleRemove = (id: number, option?: string) => {
    const updatedCart = cartItems.filter(item => !(item.id === id && item.option === option));
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cartItems.map((item, index) => (
            <div
              key={`${item.id}-${item.option}-${index}`}
              className="flex items-center gap-6 border-b pb-4"
            >
              {item.img && (
                <Image src={item.img} alt={item.title} width={100} height={100} className="rounded" />
              )}

              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                {item.option && <p className="text-sm text-gray-600">Option: {item.option}</p>}
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>

              <button
                onClick={() => handleRemove(item.id, item.option)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-4">
            <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
