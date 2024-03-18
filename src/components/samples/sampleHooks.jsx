'use client';
import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation";
export default function SamplePage() {
  const router = useRouter();
  const { id } = useParams();
  const name = useSearchParams().get('name');
  const lastname = useSearchParams().get('lastname');
  const pathname = usePathname();
  return (
    <>
      <h1>Traslation By Id Page</h1>
      <button onClick={() => router.push('/')} className="bg-blue-500 p-2">Back Home {id}</button>
      <p>
        {name ?? ' '} {lastname ?? ''}
      </p>
      <p>{pathname ?? ''}</p>
    </>
  )
}