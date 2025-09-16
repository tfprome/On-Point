'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import { featuredproducts } from './../data';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Optional icon library

const Featured = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='relative w-screen overflow-hidden text-red-500'>
      <h1 className='flex justify-center items-center p-5 text-3xl'>
        Featured Products
      </h1>

      {/* Scroll Buttons */}
      <button
        className='absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 hidden md:block'
        onClick={() => scroll('left')}
      >
        <ChevronLeft />
      </button>
      <button
        className='absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 hidden md:block'
        onClick={() => scroll('right')}
      >
        <ChevronRight />
      </button>

      <div
        ref={scrollRef}
        className='flex snap-x snap-mandatory scroll-smooth overflow-x-auto space-x-4 px-4 scrollbar-hide'
      >
        {featuredproducts.map((item) => (
          <div
            key={item.id}
            className='flex-shrink-0 snap-center w-[80vw] sm:w-[40vw] md:w-[25vw] lg:w-[25vw] p-4'
          >
            <div className='flex flex-col justify-between items-center h-full min-h-[420px] bg-white shadow-md rounded-lg p-4 hover:bg-fuchsia-50'>
              {item.img && (
                <div className='p-4 hover:rotate-[30deg] transition-all duration-500'>
                  <Image
                    src={item.img}
                    alt={item.title}
                    height={200}
                    width={200}
                  />
                </div>
              )}
              <div className='flex flex-col gap-4 text-center flex-grow'>
                <h1 className='font-bold text-red-500'>{item.title}</h1>
                <p className='text-gray-700'>{item.desc}</p>
                <span className='text-xl font-bold text-red-500'>
                  ${item.price}
                </span>
              </div>
              <button className='rounded-md bg-red-500 hover:bg-red-400 text-white p-2 w-full mt-4'>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
