'use client'; 

import React, { useState,use} from 'react';
import Image from 'next/image';
import { pizzas, burgers, pastas } from '../../../data';

type Props = {
  params: Promise<{ category: string; id: string }>;
};

type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

const SingleProduct = ({ params }: Props) => {
  const { category, id } = use(params);
  const numericid = parseInt(id);
  let products: Product[] = [];

  if (category === 'burgers') {
    products = burgers;
  } else if (category === 'pastas') {
    products = pastas;
  } else if (category === 'pizzas') {
    products = pizzas;
  }

 

  const product = products.find((item) => item.id === numericid);

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  //const [cart, setCart] = useState<any[]>([]);

  if (!product) {
    return <div>Product not found</div>;
  }


  const basePrice = product.price;
  const additionalPrice = product.options?.[selectedOptionIndex]?.additionalPrice || 0;
  const totalPrice = (basePrice + additionalPrice) * quantity;

  // const handlecart=()=>{
  //   if (typeof window === 'undefined') return;
  //   const item={
  //      id: product.id,
  //      title: product.title,
  //      img: product.img,
  //      price: basePrice+additionalPrice,
  //      option: product.options?.[selectedOptionIndex]?.title,quantity 
  //   }
  
  
  const handlecart = () => {
    const item = {
      id: product.id,
      title: product.title,
      img: product.img,
      price: basePrice + additionalPrice,
      option: product.options?.[selectedOptionIndex]?.title,
      quantity,
    };
  
    // Read existing cart directly from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
  
    // Push new item into it
    existingCart.push(item);
  
    // Store updated cart
    localStorage.setItem('cart', JSON.stringify(existingCart));
  };
  return (
    <div className='h-screen flex flex-col gap-10 p-4 md:flex-row md: items-center'>
      <div className='p-2 flex items-center justify-center  w-[250px] h-[250px] md:w-[700px] md:h-[700px] lg:w-[500px] lg:h-[500px]'>
        {product.img && (
          <Image src={product.img} alt={product.title} height={200} width={200} className='object-cover'  />
        )}
      </div>

      <div className='p-4 text-red-500 md:max-w-sm lg:max-w-md'>
        <h1 className='font-bold text-2xl p-2'>{product.title}</h1>
        <div className='px-2'>{product.desc}</div>

        {/* Size options */}
        {product.options && (
          <div className='mt-4'>
            <h2 className='font-semibold mb-2'>Choose Size:</h2>
            <div className='flex gap-4'>
              {product.options.map((opt, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOptionIndex(index)}
                  className={`px-4 py-2 rounded border ${
                    selectedOptionIndex === index ? 'bg-red-500 text-white' : 'bg-white'
                  }`}
                >
                  {opt.title} (+${opt.additionalPrice})
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity control */}
        <div className='mt-4'>
          <h2 className='font-semibold mb-2'>Quantity:</h2>
          <div className='flex items-center gap-4'>
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className='px-3 py-1 border rounded'
            >
              -
            </button>
            
            <span className='font-bold'>{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className='px-3 py-1 border rounded'
            >
              +
            </button>
            <button className="bg-red-500 text-white rounded-md px-4 py-2 text-sm cursor-pointer" onClick={handlecart}>
                  Add to Cart
            </button>
          </div>
        </div>

        {/* Total Price */}
        <div className='font-bold text-xl mt-6'>
          Total: ${totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
