import Image from "next/image"
export default function EmailSubscription() {
  return (
    <>
      {/* card container */}
      <div className="dark:bg-zinc-800 bg-zinc-400 p-2 mx-6 rounded-2xl ">
        {/* flex container */}
        <div className="flex flex-col md:flex-row">
          {/* image */}
          {/* <Image src={Email} style={{ objectFit: 'contain' }}
            className="md:h-100 rounded-xl md:rounded-l-xl md:rounded-r-none transform hover:scale-[1.02] hover:-translate-x-1 hover:rounded-xl duration-500" /> */}
          <img src={'/tailwind/email-subscribe.jpg'} alt='email' className="object-cover h-72 md:h-80 rounded-xl md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl md:hover:-translate-x-1 duration-500" />
          {/* content */}
          <div className="flex flex-col items-center justify-center">
            <div className="p-6 md:p-12">
              <h2 className="font-serif text-xl font-medium text-center text-zinc-900 dark:text-white md:text-left">Get The alerts in your inbox</h2>
              <p className="max-w-xs m-y-4 text-xs leading-5 tracking-wide text-center md:text-left text-zinc-800 dark:text-zinc-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam itaque dolorum nostrum? Provident nihil expedita, porro facere pariatur iusto aliquid, sunt laboriosam optio ipsa dolorem?</p>
            </div>
            <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0 pb-4">
              <input type="email" placeholder="Enter your email address"
                className="p-2 px-4 rounded-md text-center text-zinc-700 dark:text-white bg-zinc-400 dark:bg-zinc-800
              border border-zinc-500 dark:border-zinc-200
              placeholder:text-sm placeholder:text-center placeholder:text-zinc-600 dark:placeholder:text-zinc-300 md:text-left
              placeholder:md:text-left focus:outline-none" />
              <button type="submit" className="p-2 px-5 rounded-md text-zinc-700 bg-lime-500 hover:bg-lime-700 hover:text-white transition duration-500">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}