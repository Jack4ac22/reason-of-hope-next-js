'use client';
import { useFormState } from 'react-dom';
import { subscribeAction } from '@/utils/actions/subscribe-action';

export default function SubscribeForm() {
  const [state, formAction] = useFormState(subscribeAction, { ok: false, error: '' });

  return (
    <form action={formAction} className="space-y-4">
      <input name="email" type="email" placeholder="Your email" required className="input" />
      <button type="submit" className="btn">Subscribe</button>
      {state.error && <p className="text-red-600">{state.error}</p>}
      {state.ok && <p className="text-green-600">Check your inbox to confirm.</p>}
    </form>
  );
}
