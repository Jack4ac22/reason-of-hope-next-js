import warning from '@/assets/tailwind/warning.svg'
import Image from 'next/image'
export default function L1Page() {
  return (
    <div className='m-9'>
      {/* <!-- Default colors --> */}
      {/* <!-- white, black, red, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, zinc, neutral, stone, amber,  --> */}

      {/* <!-- Text Colors --> */}
      <p className="text-black">testing black</p>
      <p className="text-white">testing white</p>
      <p className="text-red-500">testing red</p>
      <p className="text-green-500">testing green</p>
      <p className="text-blue-500">testing blue</p>
      <p className="text-orange-500">testing orange</p>
      <p className="text-yellow-500">testing yellow</p>
      <p className="text-purple-500">testing purple</p>
      <p className="text-lime-500">testing lime</p>
      <p className="text-emerald-500">testing emerald</p>
      <p className="text-teal-500">testing teal</p>
      <p className="text-cyan-500">testing cyan</p>
      <p className="text-indigo-500">testing indigo</p>
      <p className="text-violet-500">testing violet</p>
      <p className="text-fuchsia-500">testing fuchsia</p>
      <p className="text-pink-500">testing pink</p>


      {/* <!-- Background Colors --> */}
      <p className="bg-slate-500 text-white">test Background</p>
      <p className="bg-zinc-500 text-white">test Background</p>
      <p className="bg-neutral-500 text-white">test Background</p>
      <p className="bg-stone-500 text-white">test Background</p>
      <p className="bg-amber-500 text-white">test Background</p>

      {/* <!-- Text Underline --> */}

      <p className="underline decoration-yellow-800">test Background</p>
      <p className="underline decoration-red-400">test Background</p>

      {/* <!-- Border Colors --> */}
      <input className="border border-blue-300" />
      <input className="border border-red-600" />
      <input className="border border-green-500" />
      {/* <!-- Divide Colors --> */}
      <div className="divide-y divide-blue-400">
        <div>item 15</div>
        <div>item 15</div>
        <div>item 15</div>
        <div>item 15</div>
      </div>
      {/* <!-- Outline Colors --> */}
      <button className='outline outline-red-600' >outline</button>
      <button className='outline outline-blue-600' >outline</button>
      {/* <!-- Box Shadow Colors (Opacity defaults to 100, but you can set it)--> */}
      <button className="shadow-lg bg-cyan-500 shadow-cyan-500">shadow </button>
      <button className="shadow-lg bg-cyan-500 shadow-purple-500/80">shadow </button>
      {/* <!-- Accent Colors --> */}
      <input type="checkbox" className="accent-cyan-500" checked />
      <input type="checkbox" className="accent-purple-500" checked />
      {/* <!-- Arbitrary Colors --> */}
      <div className='bg-[#427fab]'>hello</div>
      <div className='bg-[rgb(255,12,12)]'>hello</div>
      <div className='bg-[lightblue]'>hello</div>
    </div>
  )
}

