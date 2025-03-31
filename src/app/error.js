"use client"
import Link from 'next/link';
import Image from 'next/image';
import errorImage from "@/assets/images/blog/page-images/error-page.webp";

export default function ErrorPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center uni-background uni-text-color">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">خطأ غير متوقع!</h1>
        <p className="text-lg md:text-xl mt-4">
          حدث خطأ غير متوقع. نعتذر عن الإزعاج، يرجى المحاولة مرة أخرى لاحقاً.
        </p>
        <p className="text-lg md:text-xl mt-2">
          يمكنكم العودة إلى <Link href="/" className='info-link-button px-2'>الصفحة الرئيسية</Link>.
        </p>
        <Link href="/" className="mt-6 inline-block bg-mainBrand hover:bg-lightAccent text-white dark:bg-lightAccent dark:hover:bg-mainBrand px-6 py-3 rounded-md text-lg transition duration-200">
          Go Back Home
        </Link>
        <div className="w-full flex justify-center mt-6">
          <Image src={errorImage} alt='Error image' className='max-w-md rounded-xl' />
        </div>
      </div>
    </div>
  );
}
