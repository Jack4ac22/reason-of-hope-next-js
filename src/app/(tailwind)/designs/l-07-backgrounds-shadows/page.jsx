export default function Page() {
  return (
    <>
      {/*  Background Classes  */}

      <div style={{ backgroundImage: "url('/tailwind/img2.jpg')" }} className="h-64 w-72 bg-no-repeat bg-cover bg-center">

      </div>

      {/* Gradients  */}
      <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      {/* Shadows  */}
      <div className="w-96 mt-4 ml-10 mb-8 mr-8 shadow-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi deleniti ratione molestias cumque, similique rerum! Reprehenderit iusto voluptates, explicabo dignissimos laudantium sint quidem deserunt autem, rerum dicta pariatur officiis?
      </div>
      <div className="w-96 mt-4 ml-10 mb-8 mr-8 shadow-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi deleniti ratione molestias cumque, similique rerum! Reprehenderit iusto voluptates, explicabo dignissimos laudantium sint quidem deserunt autem, rerum dicta pariatur officiis?
      </div>
      <div className="w-96 mt-4 ml-10 mb-8 mr-8 shadow-inner">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi deleniti ratione molestias cumque, similique rerum! Reprehenderit iusto voluptates, explicabo dignissimos laudantium sint quidem deserunt autem, rerum dicta pariatur officiis?
      </div>
      <div className="w-96 mt-4 ml-10 mb-8 mr-8 shadow-inner shadow-red-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi deleniti ratione molestias cumque, similique rerum! Reprehenderit iusto voluptates, explicabo dignissimos laudantium sint quidem deserunt autem, rerum dicta pariatur officiis?
      </div>
      <div className="w-96 mt-4 ml-10 mb-8 mr-8 shadow-xl shadow-blue-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi deleniti ratione molestias cumque, similique rerum! Reprehenderit iusto voluptates, explicabo dignissimos laudantium sint quidem deserunt autem, rerum dicta pariatur officiis?
      </div>
      {/* Mix Blend */}
      <div className="flex justify-center -space-x-24">
        <div className="bg-blue-400 mix-blend-multiply">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque quidem repellat enim aperiam modi inventore consectetur expedita. Repudiandae, qui.
        </div>
        <div className="bg-pink-300 mix-blend-multiply">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae quibusdam asperiores quia quae aspernatur obcaecati accusantium, possimus sit. Temporibus debitis quasi nobis animi ipsum corporis numquam fugit, fugiat sunt?</div>

      </div>

    </>
  )
}





// <!-- Background Size
//   bg-auto	    background-size: auto;
//   bg-cover	  background-size: cover;
//   bg-contain	background-size: contain;
// -->

// <!-- Background Repeat
//   bg-repeat	      background-repeat: repeat;
//   bg-no-repeat	  background-repeat: no-repeat;
//   bg-repeat-x	    background-repeat: repeat-x;
//   bg-repeat-y	    background-repeat: repeat-y;
//   bg-repeat-round	background-repeat: round;
//   bg-repeat-space	background-repeat: space;
// -->

// <!-- Background Position
//   bg-bottom	      background-position: bottom;
//   bg-center	      background-position: center;
//   bg-left	        background-position: left;
//   bg-left-bottom	background-position: left bottom;
//   bg-left-top	    background-position: left top;
//   bg-right	      background-position: right;
//   bg-right-bottom	background-position: right bottom;
//   bg-right-top	  background-position: right top;
//   bg-top	        background-position: top;
// -->

// <!-- Background Attachment
//   bg-fixed	  background-attachment: fixed;
//   bg-local	  background-attachment: local;
//   bg-scroll	  background-attachment: scroll;
// -->

// <!-- 
//   Shadows
//   shadow-sm	    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
//   shadow	      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
//   shadow-md	    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
//   shadow-lg	    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
//   shadow-xl	    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
//   shadow-2xl	  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
//   shadow-inner	box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
//   shadow-none	  box-shadow: 0 0 #0000;
//  -->
