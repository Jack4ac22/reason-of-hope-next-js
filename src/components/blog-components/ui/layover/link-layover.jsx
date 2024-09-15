'use client';
import Iframe from 'react-iframe'
import { useEffect, useState } from 'react';


export default function LinkLayover({ layoverObject }) {
  // set a timer of threee seconds to hide the loading then unhide the Iframe
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Iframe
        url={layoverObject.link}
        width={`${loading ? ' 0px ' : '100%'}`}
        height={`${loading ? ' 0px ' : '100%'}`}
        className={` ${loading ? ' opacity-0 ' : ' opacity-100 h-[80vh]'} duration-100 `}
        loading='eager'
        scrolling='yes'
      />
      <div className={`${loading ? ' opacity-100 ' : ' opacity-0 h-0 w-0'} flex space-x-2 justify-center items-center bg-white h-screen dark:invert duration-200`}>
        <span className='sr-only'>
          Loading...
        </span>
        <span className="sr-only">...جاري التحميل</span>
        <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
      </div>
    </>

  );
}