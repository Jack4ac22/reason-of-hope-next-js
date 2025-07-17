'use client';
import { useFormState } from 'react-dom';
import { redirect } from 'next/navigation';

export default function SubscriberDetailsForm({ token, initial, fun }) {
  async function save(_, fd) {
    const name = fd.get('name');
    const phone = fd.get('phone');
    await fun(token, { name, phone });
    redirect('/thank-you');         
  }

  const [state, formAction] = useFormState(save, {});

  return (
    <form action={formAction} className="space-y-4">
      <input name="email" value={initial.email} readOnly className="input bg-gray-100" />
      <input name="name" defaultValue={initial.name} placeholder="Your name" className="input" />
      <input name="phone" defaultValue={initial.phone} placeholder="Phone" className="input" />
      <button type="submit" className="btn">Save profile</button>
    </form>
  );
}
