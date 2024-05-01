export default function L10Page() {
  return (
    <>
      {/* Smooth Scroll Example  */}
      <a href="#section1">Go to section 1</a>
      <a href="#section2">Go to section 2</a>
      <a href="#section3">Go to section 3</a>
      <a href="#section4">Go to section 4</a>



      {/* Hover State Styling  */}
      <div id="section1" />
      <button className=" bg-black text-white py-3 px-5 rounded-lg m-3 ">Hover me</button>
      <button className=" bg-black text-white py-3 px-5 rounded-lg m-3 hover:bg-green-400 hover:text-blue-800">Hover me</button>
      <div id="section2" />
      {/* Focus State Styling  */}
      <button className=" bg-black text-white py-3 px-5 rounded-lg m-3 focus:bg-yellow-400 focus:text-blue-700">Hover me</button>

      {/* Active State Styling  */}
      <button className=" bg-black text-white py-3 px-5 rounded-lg m-3 active:bg-orange-400 active:text-blue-700">Hover me</button>

      {/* Styling based on parent state  */}
      <div id="section3" />
      <a href="" className="group block max-w-xs mx-auto rounded-lg my-3 p-6 bg-sky-100 shadow-lg space-y-3 hover:bg-sky-500">
        <h3 className="group-hover:text-white">card title</h3>
        <p className="group-hover:text-green-200">card description and body</p>

      </a>

      {/* Pseudo Classes  */}
      <ul>
        <li className="first:bg-red-200 even:bg-green-300 odd:bg-orange-400">Item 1</li>
        <li className="first:bg-red-200 even:bg-green-300 odd:bg-orange-400">Item 2</li>
        <li className="first:bg-red-200 even:bg-green-300 odd:bg-orange-400">Item 3</li>
        <li className="first:bg-red-200 even:bg-green-300 odd:bg-orange-400">Item 4</li>
        <li className="first:bg-red-200 even:bg-green-300 odd:bg-orange-400">Item 5</li>
        <li className="first:bg-red-200 even:bg-green-300 odd:bg-orange-400">Item 6</li>
      </ul>
      <div id="section4" />
      {/* Appearance  */}
      <select className="appearance-none">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      {/* Use appearance-none to reset any browser specific styling on an element. This utility is often used when creating custom form components.  */}
      <hr />
      {/* Cursor  */}
      <button className=" bg-black text-white py-3 px-5 rounded-lg m-3 ">Hover me</button>
      <p className="cursor-pointer">asdasd</p>
      <p className="cursor-wait">asdasd</p>
      <p className="cursor-text">asdasd</p>
      <p className="cursor-move">asdasd</p>
      <p className="cursor-help">asdasd</p>
      <p className="cursor-not-allowed">asdasd</p>
      <p className="cursor-none">asdasd</p>
      <p className="cursor-context-menu">asdasd</p>
      <p className="cursor-progress">asdasd</p>
      <p className="cursor-cell">asdasd</p>
      <p className="cursor-crosshair">asdasd</p>
      <p className="cursor-vertical-text">asdasd</p>
      <p className="cursor-alias">asdasd</p>
      <p className="cursor-copy">asdasd</p>
      <p className="cursor-no-drop">asdasd</p>
      <p className="cursor-grab">asdasd</p>
      <p className="cursor-grabbing">asdasd</p>
      <hr />
      {/* Resize  */}
      <textarea className="resize-none"></textarea>
      <textarea className="resize-y"></textarea>
      <textarea className="resize-x"></textarea>
      <textarea className="resize"></textarea>
      <hr />

      {/* User Select  */}
      <p className="select-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis.</p>
      <p className="select-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis.</p>
      <p className="select-all">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis.</p>
      <p className="select-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis.</p>
      <p className="select-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis.</p>


    </>
  )
}


// <!-- Cursor
//   cursor-auto	          cursor: auto;
//   cursor-default	      cursor: default;
//   cursor-pointer	      cursor: pointer;
//   cursor-wait	          cursor: wait;
//   cursor-text	          cursor: text;
//   cursor-move	          cursor: move;
//   cursor-help	          cursor: help;
//   cursor-not-allowed	  cursor: not-allowed;
//   cursor-none	          cursor: none;
//   cursor-context-menu	  cursor: context-menu;
//   cursor-progress	      cursor: progress;
//   cursor-cell	          cursor: cell;
//   cursor-crosshair	    cursor: crosshair;
//   cursor-vertical-text	cursor: vertical-text;
//   cursor-alias	        cursor: alias;
//   cursor-copy	          cursor: copy;
//   cursor-no-drop	      cursor: no-drop;
//   cursor-grab	          cursor: grab;
//   cursor-grabbing	      cursor: grabbing;
//   cursor-all-scroll	    cursor: all-scroll;
//   cursor-col-resize	    cursor: col-resize;
//   cursor-row-resize	    cursor: row-resize;
//   cursor-n-resize	      cursor: n-resize;
//   cursor-e-resize	      cursor: e-resize;
//   cursor-s-resize	      cursor: s-resize;
//   cursor-w-resize	      cursor: w-resize;
//   cursor-ne-resize	    cursor: ne-resize;
//   cursor-nw-resize	    cursor: nw-resize;
//   cursor-se-resize	    cursor: se-resize;
//   cursor-sw-resize	    cursor: sw-resize;
//   cursor-ew-resize	    cursor: ew-resize;
//   cursor-ns-resize	    cursor: ns-resize;
//   cursor-nesw-resize	  cursor: nesw-resize;
//   cursor-nwse-resize	  cursor: nwse-resize;
//   cursor-zoom-in	      cursor: zoom-in;
//   cursor-zoom-out	      cursor: zoom-out;
// -->
