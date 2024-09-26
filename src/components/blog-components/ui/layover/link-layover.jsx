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
        className={` ${loading ? ' hidden ' : ' block h-fill'} duration-100  rounded-b-xl`}
        loading='eager'
        scrolling='yes'
      />
      {/* loading animation */}
      <div className={`${loading ? ' block ' : ' hidden '} flex space-x-5 justify-center items-center  duration-300 h-full`}>
        <span className="sr-only">...جاري التحميل</span>
        <div className='h-8 w-8 bg-darkShade-500 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-8 w-8 bg-darkShade-500 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-8 w-8 bg-darkShade-500 rounded-full animate-bounce'></div>
      </div>
    </>
  );
}