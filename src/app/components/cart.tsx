import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CartIcon = () => {
    return (
        
      <div className='flex items-center'>
         <Image src='/cart.png' alt='' height={20} width={20}/>
         <Link className='px-2' href='/cart'>Cart</Link>
        
      </div>
    );
};

export default CartIcon;