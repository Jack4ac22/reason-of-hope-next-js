'use client';
import { useFormState } from 'react-dom';
import { redirect } from 'next/navigation';

export default function SubscriberDetailsForm({ token, initial, fun }) {
  async function save(_, fd) {
    const name = fd.get('name');
    const phone = fd.get('phone');
    await fun(token, { name, phone });
  }

  const [state, formAction] = useFormState(save, {});
  const getError = (fieldName) =>
    state?.errors?.find((error) => error.name === fieldName);
  return (
    <>
      {state?.response ? (
        <>
          {/* <SuccessfullyContacted /> */}
        </>
      ) : (
        <div
          className={`uni-background p-6 rounded-lg w-full h-full max-w-xl m-2 ${state?.errors ? 'border border-spacing-1 border-red-500' : ''
            }`}
        >
          <form action={formAction} className="space-y-4">
            <div className="mb-4">
              <label
                className="block uni-text-color text-sm font-bold mb-2"
                htmlFor="email"
              >
                البريد الإلكتروني:
              </label>
              <input
                name="email"
                value={initial.email}
                readOnly
                id="email"
                type="email"
                aria-disabled={true}
                disabled
                className={`shadow border rounded w-full py-2 px-3 uni-text-color leading-tight focus:outline-none focus:shadow-outline ${getError('name') ? 'border-red-500' : ''
                  }`} />
            </div>
            <div className='mb-4'>
              <label
                className="block uni-text-color text-sm font-bold mb-2"
                htmlFor="name"
              >
                الإسم:
              </label>
              <input
                defaultValue={initial.name}
                className={`shadow border rounded w-full py-2 px-3 uni-text-color leading-tight focus:outline-none focus:shadow-outline ${getError('name') ? 'border-red-500' : ''
                  }`}
                id="name"
                name="name"
                type="text"
                placeholder="الرجاء إدخال الإسم"
                aria-invalid={!!getError('name')} />
            </div>
            <div className='mb-4'>
              <label
                className="block uni-text-color text-sm font-bold mb-2"
                htmlFor="phone"
              >
                رقم الجوال:
              </label>
              <input
                id="phone"
                name="phone"
                defaultValue={initial.phone}
                placeholder="Phone"
                type="tel"
                className='shadow border rounded w-full py-2 px-3 uni-text-color leading-tight focus:outline-none focus:shadow-outline' />
            </div>
            <button type="submit" className={`
                  py-2 px-8
                  mx-auto 
                  focus:outline-1 hover:bg-mainBrand-600 bg-mainBrand-500 dark:bg-mainBrand-200 dark:hover:bg-mainBrand-100
                  border-0 rounded
                  text-white dark:text-black
                  `}>Save profile</button>
          </form>
        </div>
      )}
    </>
  );
}
