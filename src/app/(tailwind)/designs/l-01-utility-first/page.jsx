import warning from '@/assets/tailwind/warning.svg'
import Image from 'next/image'
export default function L1Page() {
  return (
    <>
      <div className='m-10'>
        <h1>Design L1</h1>
        <div className="flex items-center p-6 max-w-sm xm-auto bg-white rounded-xl shadow-lg space-x-4 mt-12">
          <Image src={warning} className='w-12 h-12' alt='warning image' />
          <div>
            <div className="text-xl font-medium text-black">
              Are you sure?
            </div>
            <p className="text-slate-500">
              You are about deleting this item
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

