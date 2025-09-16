"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const Slider = () => {
  const data = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: "/slider.jpg",
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in Dhaka",
      image: "/slider2.jpg",
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      image: "/slider3.jpg",
    },
  ];


  const [currentslide, setCurrentslide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() =>
      setCurrentslide((prev) => (prev === data.length - 1 ? 0 : prev + 1))
      , 4000)
    return () => clearInterval(interval);
  })

  return (

    <div className='flex flex-col h-[calc(100vh-6rem)] md:flex-row mt-5  bg-fuchsia-50'>
      <div className='h-1/2 flex flex-1 flex-col justify-center items-center p-10 gap-10'>
        <h1 className='text-4xl text-red-500 font-bold text-center'>{data[currentslide].title}</h1>
        <button className='rounded text-white text-xl p-3 bg-red-500' >Learn More</button>
      </div>
      <div className='h-1/2 flex flex-1 justify-center items-center relative '>
        <Image src={data[currentslide].image} alt='' fill className='object-cover' />
      </div>
    </div>
  );
};

export default Slider;