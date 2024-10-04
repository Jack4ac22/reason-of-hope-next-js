import Link from 'next/link';
import Image from 'next/image';
import image from "@/assets/images/blog/page-images/404-cover-page.webp";

export default function Custom404() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center uni-background uni-text-color">
      <div className="text-center px-4">
        <h1 className="text-7xl md:text-9xl font-bold">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mt-4 mx-auto">
          عذراً, الصفحة التي قُمتم بطلبها غير موجودة!
        </h2>
        <p className="text-lg md:text-xl mt-2">
          نعتذر عن الخطأ  ولكن الصفحة التي تبحثون عنها غير موجودة، ربما قد تم تغيير عنوانها أو أنكم قمتكم باستخدام عنوان خاطئ
        </p>
        <p className="text-lg md:text-xl mt-2">
          يمكنكم العودة إلى <Link href="/" className='info-link-button px-2'>الصفحة الرئيسية</Link>.
        </p>
        <Link href="/" className="mt-6 inline-block bg-mainBrand hover:bg-lightAccent text-white dark:bg-lightAccent dark:hover:bg-mainBrand px-6 py-3 rounded-md text-lg transition duration-200">
          Go Back Home
        </Link>
        <div className="w-full flex justify-center">
          <Image src={image} alt='not found image' className='max-w-md rounded-xl' />
        </div>
      </div>
    </div>
  );
}
