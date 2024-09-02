'use client'
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";

export default function ContactForm({ action }) {
  const [state, formAction] = useFormState(action, {});
  return (
    <>
      {/* TODO: make the success as a component and style it. */}
      {/* TODO: seperate the inputs into compoentnts and introduce the error message to it beased on the name. */}
      {state?.response ? (
        <div className="uni-background p-6 rounded-lg w-full h-full 2max-w-xl m-2 border border-spacing-1 border-green-500 uni-text-color">
          <p>تم إرسال رسالتكم بنجاح</p>
          <p>سنقوم بالرد عليكم في أقرب وقت ممكن</p>
          <button
            className={`py-2 px-8 flex mx-auto focus:outline-1 hover:bg-mainBrand-600 bg-mainBrand-500 dark:bg-mainBrand-200 dark:hover:bg-mainBrand-100 border-0 rounded text-white dark:text-black`}
            onClick={() => redirect("/")}
          >
            العودة للصفحة الرئيسية
          </button>
        </div>

      ) : (
        <div className={`uni-background p-6 rounded-lg w-full h-full 2max-w-xl m-2 ${state?.errors ? 'border border-spacing-1 border-red-500 ' : ''}`}>
          <form action={formAction}>
            {state?.errors && (
              <ul className="form-errors">
                {state?.errors.map((error) => (
                  <li key={error}>{error.message}</li>
                ))}
              </ul>
            )}
            <div className='mb-4'>
              <label
                className='block uni-text-color text-sm font-bold mb-2'
                htmlFor='name'
              >
                الإسم:
              </label>
              <input
                className='shadow border rounded w-full py-2 px-3 uni-text-color leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                name="name"
                type='text'
                placeholder='الرجاء إدخال الإسم'
                aria-invalid={false}
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
                placeholder="الرجاء إدخال موضوع الرسالة" />
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
      )}
    </>
  )
}