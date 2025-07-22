'use client';
import { useFormState } from 'react-dom';
import { subscribeAction } from '@/utils/actions/subscribe-action';

export default function SubscribeForm() {
  const [state, formAction] = useFormState(subscribeAction, { ok: false, error: '' });

  return (
    <div
      className={`uni-background rounded-lg w-full h-full max-w-xl print:hidden ${state?.errors ? 'border border-spacing-1 border-red-500' : ''
        }`}
    >
      <form action={formAction} className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-2 space-y-3 md:space-y-0">
          <input
            dir='ltr'
            className={`shadow border rounded w-full uni-text-color leading-tight focus:outline-none focus:shadow-outline ${state.error ? 'border-red-500' : ''
              }`}
            id="email"
            name="email"
            type="email"
            placeholder="بريدك الألكتروني - your email"
            aria-invalid={!!state.error}
          />
          <button type="submit" disabled={state.pending} className={`
                  py-2 px-8
                  mx-auto 
                  focus:outline-1 hover:bg-mainBrand-600 bg-mainBrand-500 dark:bg-mainBrand-200 dark:hover:bg-mainBrand-100
                  border-0 rounded
                  text-white dark:text-black
                  `}>
            اشترك
          </button>
        </div>
        <div>
          {state.error && <p className="text-red-600">{state.error}</p>}
          {state.ok && <p className="text-green-600">تم الاشتراك، تفقد بريدك الألكتروني</p>}
        </div>
      </form>
    </div>
  );
}
