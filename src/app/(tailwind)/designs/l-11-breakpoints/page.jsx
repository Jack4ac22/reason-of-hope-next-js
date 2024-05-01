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
    <div className='h-screen bg-black sm:bg-green-800 md:bg-red-700 lg:bg-yellow-500 xl:bg-orange-900'>
      <p className='text-red-300'>Browser width: <span className='text-red-600 text-lg underline'>{width}</span>px</p>

    </div>
  );
}

// <!-- Breakpoint Classes
//   sm	640px	  @media (min-width: 640px) { ... }
//   md	768px	  @media (min-width: 768px) { ... }
//   lg	1024px	@media (min-width: 1024px) { ... }
//   xl	1280px	@media (min-width: 1280px) { ... }
//   2xl	1536px	@media (min-width: 1536px) { ... }
// -->