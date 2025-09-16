import React from 'react';
import Image from 'next/image';
import CountDown from './countdown';

const Offer = () => {
    return (
        
        <div className="bg-black flex flex-col gap-2 justify-center md:flex-row md:justify-between">
            <div className=' flex flex-col text-white gap-3 text-center justify-center p-5 items-center'>
                <h1 className='text-3xl font-bold'>Delicious Burger & French Fry</h1>
                <p>Progressively simplify effective e-toilers and process-centric methods
                   of empowerment. Quickly pontificate parallel.</p>
                   <CountDown/>
                <button className='text-white bg-red-600 rounded-2xl h-[5vh] w-[20vh]'>Order now</button>
            </div>
            <div className="w-full relative md:w-1/2 flex justify-center items-center">
                <Image src='/offerimage-removebg.png' alt='' height={250} width={250}></Image>
            </div>
        </div>
    );
};

export default Offer;