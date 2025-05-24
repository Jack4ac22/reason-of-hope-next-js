'use client';
import { useEffect, useState } from 'react';
import PdfViewer from '@/components/uneversal-items/pdf-viewer';


export default function PdfLayover({ layoverObject }) {
  console.info(layoverObject)
  // set a timer of threee seconds to hide the loading then unhide the Iframe
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
     <PdfViewer url={`/publications/${layoverObject.pdfDetails.link}`} title={layoverObject.pdfDetails.title} className={` ${loading ? ' hidden focus-none ' : ' block h-fill'} duration-100  rounded-b-xl`} />
      {/* loading animation */}
      <div className={`${loading ? ' block ' : ' hidden '} flex space-x-5 justify-center items-center  duration-300 h-full`} role="alert" aria-busy="true">
        <span className="sr-only">...جاري التحميل</span>
        <div className='h-8 w-8 bg-darkShade-500 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-8 w-8 bg-darkShade-500 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-8 w-8 bg-darkShade-500 rounded-full animate-bounce'></div>
      </div>
    </>
  );
}