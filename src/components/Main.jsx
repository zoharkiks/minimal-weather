import React from "react";
import { Icon} from '@iconify/react';
import chevronDoubleDown from '../../node_modules/@iconify-icons/mdi/chevron-double-down';

const Main = () => {
  return (
    <main className="main relative before:absolute before:inset-0 before:bg-black/50  h-screen flex flex-col justify-between bg-no-repeat bg-cover bg-center px-4 py-[2.5rem]"
    style={{
        backgroundImage: "url(" + "https://images.unsplash.com/photo-1512387331157-3e2a021998db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80" + ")",

    }}>
      
        <div className="relative flex flex-col ">
        <label htmlFor="location" className='text-white text-lg font-poppins '>Another Location:</label>
      <input id='location' className='w-[75%] font-poppins mt-2 bg-transparent border-b-2 border-white outline-none text-white' type="text" />
        </div>
   
   <div className=" relative flex flex-col  text-white font-poppins mb-20">
       <p><span className='text-[4rem]'>16° </span><span className='text-[3rem] font-medium' >Lohna</span></p>
       <span className='text-lg '>06:09 - Monday, 12 July'21</span>
       <span className='text-lg '>Cloudy</span>
       <span>Icon</span>
   </div>

   <Icon icon={chevronDoubleDown} className='animate-bounce h-12 w-12 text-white mx-auto'/>

    </main>
  );
};

export default Main;
