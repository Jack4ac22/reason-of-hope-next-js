"use client"
import Image from 'next/image';
import loadingImage from "@/assets/images/blog/page-images/loading.webp";

export default function LoadingPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center uni-background uni-text-color">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Loading...</h1>
        <p className="text-lg md:text-xl mt-4">
          الصفحة قيد التحميل، الرجاء الانتظار.
        </p>
        <div className="w-full flex justify-center mt-6">
          <Image src={loadingImage} alt='Loading' className='max-w-md rounded-xl' />
        </div>
      </div>
    </div>
  );
}
