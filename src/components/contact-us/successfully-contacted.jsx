import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessfullyContacted() {
  return (
    <>
      <div className="flex flex-col items-center content-between
    uni-background p-6 rounded-lg w-full h-full max-w-xl m-2 border border-spacing-1 border-green-500 uni-text-color">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
        <p className='py-2'>تم إرسال رسالتكم بنجاح</p>
        <p className='py-2'>سنقوم بالرد عليكم في أقرب وقت ممكن</p>
        <Link href="/"
          className={`my-2 py-2 px-8 flex center mx-auto focus:outline-1 hover:bg-mainBrand-600 bg-mainBrand-500 dark:bg-mainBrand-200 dark:hover:bg-mainBrand-100 border-0 rounded text-white dark:text-black`}
        >
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </>
  );
}