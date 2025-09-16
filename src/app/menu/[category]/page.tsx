import Link from 'next/link';
import React from 'react';
import {pizzas,pastas,burgers} from '../../data'
import Image from 'next/image';
import { use } from 'react';


type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Props = {
    params: Promise<{ category: string }>;
  };
  
  const getData = (category: string): Product[] => {
    switch (category) {
      case 'pizzas':
        return pizzas;
      case 'pastas':
        return pastas;
      case 'burgers':
        return burgers;
      default:
        return [];
    }
  };
  
  const CategoryPage = ({ params }: Props) => {
    const { category } = use(params);
  
    // Now use category safely:
    const data = getData(category);
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {data.map((item) => (
         <Link href={`/menu/${category}/${item.id}`} 
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition"
          >
            <div className="relative w-full h-48 mb-4">
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              )}
            </div>
            <div className="flex flex-col gap-2 items-start">
              <h2 className="font-bold text-lg text-red-500">{item.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">{item.desc}</p>
              <div className="flex justify-between items-center w-full">
                <span className="font-semibold text-red-500">${item.price}</span>
                <button className="bg-red-500 text-white rounded-md px-4 py-2 text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  };
  
  export default CategoryPage;