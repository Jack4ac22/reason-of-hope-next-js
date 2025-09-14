'use client'
import { useFormState } from "react-dom";
import Link from "next/link";
import SuccessfullyContacted from "@/components/contact-us/successfully-contacted";

export default function ContactForm({ action }) {
  const [state, formAction] = useFormState(action, {});

  const getError = (fieldName) =>
    state?.errors?.find((error) => error.name === fieldName);

  return (
    <>
      {state?.response ? (
        <>
          <SuccessfullyContacted />
        </>
      ) : (
        <div
          className={`uni-background p-6 rounded-lg w-full h-full max-w-xl m-2 ${
            state?.errors ? 'border border-spacing-1 border-red-500' : ''
          }`}
        >
          <form action={formAction}>
            <div className="mb-4">
              <label
                className="block uni-text-color text-sm font-bold mb-2"
                htmlFor="name"
              >
                الإسم:
              </label>
              <input
                className={`shadow border rounded w-full py-2 px-3 uni-text-color leading-tight focus:outline-none focus:shadow-outline ${
                  getError('name') ? 'border-red-500' : ''
                }`}
                id="name"
                name="name"
                type="text"
                placeholder="الرجاء إدخال الإسم"
                aria-invalid={!!getError('name')}
              />
              {getError('name') && (
                <p className="text-red-500 text-xs mt-1">{getError('name').message}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block uni-text-color text-sm font-bold mb-2"
                htmlFor="email"
              >
                البريد الإلكتروني:
              </label>
              <input
                className={`shadow border rounded w-full py-2 px-3 uni-text-color leading-tight focus:outline-none focus:shadow-outline ${
                  getError('email') ? 'border-red-500' : ''
                }`}
                id="email"
                name="email"
                type="email"
                placeholder="الرجاء إدخال البريد الإلكتروني"
                aria-invalid={!!getError('email')}
              />
              {getError('email') && (
                <p className="text-red-500 text-xs mt-1">{getError('email').message}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block uni-text-color text-sm font-bold mb-2"
                htmlFor="title"
              >
                موضوع الرسالة:
              </label>
              <input
                className={`shadow border rounded w-full py-2 px-3 uni-text-color leading-tight focus:outline-none focus:shadow-outline ${
                  getError('title') ? 'border-red-500' : ''
                }`}
                id="title"
                name="title"
                type="text"
                placeholder="الرجاء إدخال موضوع الرسالة"
                aria-invalid={!!getError('title')}
              />
              {getError('title') && (
                <p className="text-red-500 text-xs mt-1">{getError('title').message}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block uni-text-color text-sm font-bold mb-2"
                htmlFor="message"
              >
                رسالتكم:
              </label>
              <textarea
                className={`shadow border rounded w-full py-2 px-3 uni-text-color h-44 focus:outline-none focus:shadow-outline ${
                  getError('message') ? 'border-red-500' : ''
                }`}
                id="message"
                name="message"
                placeholder="الرجاء إدخال رسالتكم"
                aria-invalid={!!getError('message')}
              ></textarea>
              {getError('message') && (
                <p className="text-red-500 text-xs mt-1">{getError('message').message}</p>
              )}
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
        </div>
      )}
    </>
  );
}
