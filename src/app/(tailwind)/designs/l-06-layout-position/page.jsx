export default function Page() {
  return (
    <>
      {/* Positioning */}
      <div className="relative w-32 h-32 bg-red-200">
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-red-700"></div>
      </div>
      {/* Top left corner */}
      <div className="relative h-32 w-32 bg-yellow-200">
        <div className="absolute left-0 top-0 h-16 w-16 bg-yellow-300"></div>
      </div>
      {/* Top right corner */}
      <div className="relative h-32 w-32 bg-green-200">
        <div className="absolute right-0 top-0 h-16 w-16 bg-green-300"></div>
      </div>
      {/* Bottom left corner */}
      <div className="relative h-32 w-32 bg-orange-200">
        <div className="absolute left-0 bottom-0 h-16 w-16 bg-orange-300"></div>
      </div>
      {/* Bottom right corner */}
      <div className="relative w-32 h-32 bg-red-200">
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-red-700"></div>
      </div>
      {/* Span top edge */}
      <div className="relative w-32 h-32 bg-purple-200">
        <div className="absolute inset-x-0 top-0  h-16 bg-purple-700"></div>
      </div>

      {/* Span left edge */}
      <div className="relative w-32 h-32 bg-blue-200">
        <div className="absolute inset-y-0 left-0 bg-blue-700 w-16"></div>
      </div>
      {/* Span right edge */}
      <div className="relative w-32 h-32 bg-red-300">
        <div className="absolute inset-y-0 right-0 bg-red-500 w-16"></div>
      </div>
      {/* Span bottom edge */}
      <div className="relative w-32 h-32 bg-yellow-300">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-yellow-400"></div>
      </div>
      {/* Display Classes */}
      <div>
        {/* Span with random text */}
        <span className="inline-block font-bold"> inline-block element </span>
        <span className="hidden">hidden</span>
        <span className="inline"> inline span elelment</span>
        <span className="block">block</span>
        <span></span>
        <span></span>
      </div>
      {/* Z-Index */}

      <div className="relative h-36 bg-red-500">
        <div className="absolute w-24 h-24 bg-blue-100 left-10 z-40">1</div>
        <div className="absolute w-24 h-24 bg-blue-200 left-20">2</div>
        <div className="absolute w-24 h-24 bg-blue-300 left-40 z-10">3</div>
        <div className="absolute w-24 h-24 bg-blue-400 left-60">4</div>
        <div className="absolute w-24 h-24 bg-blue-500 left-80">5</div>
      </div>
      {/* Floats */}
      <div className="w-1/2 bg-black">
        <img src="/tailwind/img1.jpg" alt="" className="w-48 h-48 float-right m-4" />
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam neque accusamus mollitia laborum sequi illum id sed iste animi, ex temporibus, tempore et enim. Rerum dolore labore nam sequi! Expedita.</p>
      </div>
    </>
  )
}


// <!-- Position Classes
//       static	    position: static;
//       fixed	      position: fixed;
//       absolute	  position: absolute;
//       relative	  position: relative;
//       sticky	    position: sticky;
//     -->

// <!-- Display Classes
//       block	            display: block;
//       inline-block	    display: inline-block;
//       inline	          display: inline;
//       flex	            display: flex;
//       inline-flex	      display: inline-flex;
//       table	            display: table;
//       grid	            display: grid;
//       inline-grid	      display: inline-grid;
//       contents	        display: contents;
//       list-item	        display: list-item;
//       hidden	          display: none;
//     -->

// <!-- Z-Index
//       z-0	    z-index: 0;
//       z-10	  z-index: 10;
//       z-20	  z-index: 20;
//       z-30	  z-index: 30;
//       z-40	  z-index: 40;
//       z-50	  z-index: 50;
//       z-auto	z-index: auto;
//     -->

// <!-- Float
//       float-right	  float: right;
//       float-left	  float: left;
//       float-none	  float: none;
//     -->
