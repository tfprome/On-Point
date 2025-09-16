import React  from 'react';
import { menu } from '../data';
import Link from 'next/link';


const MenuPage = () => {
    return (
        
        <div className='lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center p-4 '>
              {menu.map((category)=>(
                   <Link href={`menu/${category.slug}`} key={category.id} style={{ backgroundImage: `url(${category.img})`}} className="w-full h-1/3 p-8 md:h-1/2 bg-cover bg-no-repeat bg-center flex items-center">
                    <div className={`text-${category.color}` } >
                    <h1 className='font-bold text-3xl'>{category.title}</h1>
                    <p className='text-sm my-8'>{category.desc}</p>
                    <button className={`p-2 rounded-md bg-${category.color} text-${category.color === "black" ? "white" : "red-500"}`}>Explore</button>
                    </div>
                   


                   </Link>
              ))}
        
        </div>
    );
};

export default MenuPage;