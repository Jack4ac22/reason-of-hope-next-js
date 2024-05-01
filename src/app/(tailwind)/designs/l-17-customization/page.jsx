'use client'
import { useState, useEffect } from 'react';

export default function Page() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Update the width state whenever the window is resized
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Call the handleResize function to update the width state initially
    handleResize();

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount and clean up on unmount

  return (
    <div className='h-screen bg-primary sm:bg-green-800 md:bg-red-700 lg:bg-yellow-500 xl:bg-orange-900'>
      <p className='text-red-300'>Browser width: <span className='text-red-600 text-lg underline'>{width}</span>px</p>
      <div className='grid grid-cols-70/30'>
      </div>
      <div className="bg-lightShade w-200 h-[200px] border max-w-sm mx-auto m-3 rounded-tl-4xl">item 1</div>
      <div className="bg-lightAccent w-100 h-[200px] border max-w-sm mx-auto m-3 rounded-tl-4xl">item 2</div>
      <div className="bg-mainBrand w-100 h-[200px] border max-w-sm mx-auto m-3 rounded-tl-4xl">item 3</div>
      <div className="bg-darkAccent w-100 h-[200px] border max-w-sm mx-auto m-3 rounded-tl-4xl">item 4</div>
      <div className="bg-darkShade w-100 h-[200px] border max-w-sm mx-auto m-3 rounded-tl-4xl text-lightShade">item 5</div>
    </div>
  );
}
