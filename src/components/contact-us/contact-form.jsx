'use client'
import { useFormState } from "react-dom";

export default function ContactForm({ action }) {
  const [state, formAction] = useFormState(action, {});
  return (
    <>
      <div className="uni-background p-6 rounded-lg w-full m-2">
        <form action={formAction}>
          <div className='mb-4'>
            <label
              className='block uni-text-color text-sm font-bold mb-2'
              htmlFor='name'
            >
              الإسم:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 uni-text-color leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              name="name"
              type='text'
              placeholder='الرجاء إدخال الإسم'
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block uni-text-color text-sm font-bold mb-2"
              htmlFor="email"
            >
              البريد الإلكتروني:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 uni-text-color leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="الرجاء إدخال البريد الإلكتروني"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block uni-text-color text-sm font-bold mb-2"
              htmlFor="email"
            >
              موضوع الرسالة:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 uni-text-color leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="title"
              name="title"
              placeholder="الرجاء إدخال موضوع الرسالة"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block uni-text-color text-sm font-bold mb-2"
              htmlFor="message"
            >
              رسالتكم:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 uni-text-color h-44 focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="الرجاء إدخال رسالتكم"
              required
            ></textarea>
          </div>
          <div>
            <button
              className={`
                  py-2 px-8
                  flex mx-auto 
                  focus:outline-1 hover:bg-mainBrand-600 bg-mainBrand-500 dark:bg-mainBrand-200 dark:hover:bg-mainBrand-100
                  border-0 rounded
                  text-white dark:text-black
                    `}
              type="submit"
            >
              إرسال
            </button>
          </div>
        </form>
      </div >
    </>
  )
}