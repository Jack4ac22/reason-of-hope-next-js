export default function Page() {
  return (
    <>

      {/* Flex and alignment */}
      <div className="flex items-start h-72 w-full bg-gray-100 border">
        <div className="p-10 border border-blue-300 bg-blue-100">1</div>
        <div className="p-10 border border-blue-300 bg-blue-100">2</div>
        <div className="p-10 border border-blue-300 bg-blue-100">3</div>
        <div className="p-10 border border-blue-300 bg-blue-100">4</div>
      </div>
      <div className="flex items-center h-72 w-full bg-gray-100 border">
        <div className="p-10 border border-blue-300 bg-blue-100">1</div>
        <div className="p-10 border border-blue-300 bg-blue-100">2</div>
        <div className="p-10 border border-blue-300 bg-blue-100">3</div>
        <div className="p-10 border border-blue-300 bg-blue-100">4</div>
      </div>
      <div className="flex items-end h-72 w-full bg-gray-100 border">
        <div className="p-10 border border-blue-300 bg-blue-100">1</div>
        <div className="p-10 border border-blue-300 bg-blue-100">2</div>
        <div className="p-10 border border-blue-300 bg-blue-100">3</div>
        <div className="p-10 border border-blue-300 bg-blue-100">4</div>
      </div>
      <div className="flex flex-col items-end h-72 w-full bg-gray-100 border">
        <div className="p-10 border border-blue-300 bg-blue-100">1</div>
        <div className="p-10 border border-blue-300 bg-blue-100">2</div>
        <div className="p-10 border border-blue-300 bg-blue-100">3</div>
        <div className="p-10 border border-blue-300 bg-blue-100">4</div>
      </div>

      <div className="flex items-center  justify-center h-72 w-full bg-gray-100 border">
        <div className="p-10 border border-blue-300 bg-blue-100">1</div>
        <div className="p-10 border border-blue-300 bg-blue-100">2</div>
        <div className="p-10 border border-blue-300 bg-blue-100">3</div>
        <div className="p-10 border border-blue-300 bg-blue-100">4</div>
      </div>
      <div className="flex items-between  justify-center h-72 w-full bg-gray-100 border">
        <div className="p-10 border border-blue-300 bg-blue-100">1</div>
        <div className="p-10 border border-blue-300 bg-blue-100">2</div>
        <div className="p-10 border border-blue-300 bg-blue-100">3</div>
        <div className="p-10 border border-blue-300 bg-blue-100">4</div>
      </div>
      <div className="flex flex-wrap items-between justify-end h-72 w-full bg-gray-100 border">
        <div className="p-10 border border-blue-300 bg-blue-100">1</div>
        <div className="p-10 border border-blue-300 bg-blue-100">2</div>
        <div className="p-10 border border-blue-300 bg-blue-100">3</div>
        <div className="p-10 border border-blue-300 bg-blue-100">4</div>
        <div className="p-10 border border-blue-300 bg-blue-100">6</div>
        <div className="p-10 border border-blue-300 bg-blue-100">7</div>
        <div className="p-10 border border-blue-300 bg-blue-100">8</div>
        <div className="p-10 border border-blue-300 bg-blue-100">9</div>
        <div className="p-10 border border-blue-300 bg-blue-100">10</div>
        <div className="p-10 border border-blue-300 bg-blue-100">11</div>
        <div className="p-10 border border-blue-300 bg-blue-100">12</div>

      </div>

      {/* Flex Column, Gap and Order */}

      {/* Grow and shrink */}
    </>
  )
}


// <!-- Justify Content
//       justify-start	      justify-content: flex-start;
//       justify-end	        justify-content: flex-end;
//       justify-center	    justify-content: center;
//       justify-between	    justify-content: space-between;
//       justify-around	    justify-content: space-around;
//       justify-evenly	    justify-content: space-evenly;
//     -->

// <!-- 
//       items-start	align-items: flex-start;
//       items-end	align-items: flex-end;
//       items-center	align-items: center;
//       items-baseline	align-items: baseline;
//       items-stretch	align-items: stretch;
//      -->

// <!-- Flex Direction
//       flex-row	        flex-direction: row;
//       flex-row-reverse	flex-direction: row-reverse;
//       flex-col	        flex-direction: column;
//       flex-col-reverse	flex-direction: column-reverse;
//     -->

// <!-- 
//       flex-wrap	        flex-wrap: wrap;
//       flex-wrap-reverse	flex-wrap: wrap-reverse;
//       flex-nowrap	      flex-wrap: nowrap;
//      -->

// <!-- Flex Properties
//       flex-none	    flex: none;     
//       Prevent item from growing or shrinking

//       flex-initial	flex: 0 1 auto; 
//       Allow item to shrink but not grow, taking into account its initial size

//       flex-auto	    flex: 1 1 auto; 
//       Allow item to grow and shrink, taking into account its initial size

//       flex-1	      flex: 1 1 0%;   
//       Allow item to grow and shrink as needed, ignoring its initial size
//     -->
