import React from 'react';
import Image from 'next/image';
import Menu from './menu';
import Link from 'next/link';

const Navbar = () => {

   const user=false;
    return (
      <div className='h-9 flex items-center justify-between px-20 py-10'>
        
          <div className='md:hidden'><Image src='/logo.png' alt='logo' height={70} width={40}/></div>


          <div className='hidden md:flex  text-red-500 flex-1 gap-4'>
           <Link href='/'>Homepage</Link>
           <Link href='/menu'>Menu</Link>
           <Link href='/contact'>Contact</Link>
        </div>

          <div className='md:hidden'><Menu/></div>
          <div className='hidden md:flex md:text-4xl text-red-500 font-bold ml-70 flex-1 items-center'>On Point</div>

          <div className='hidden md:flex  text-red-500 flex-1 justify-end gap-3'>
            <span>123 456 789</span>
            <Link href='/cart'>Cart</Link>
            {user? <Link href='/orders'>orders</Link>:<Link href='/login'>login</Link>}
          </div>
          


      </div>  
       
          
    );
};

export default Navbar;