import Image from 'next/image'
export default function PropertyImagesComponent({ images }) {
  return (
    <section className="bg-blue-50 p-4">
      <div className="container m-auto">
        {images.length === 1 ? (
          <Image
            src={images[0]}
            alt=""
            className="object-cover h-[400px] mx-auto rounded-xl"
            width={0}
            height={0}
            sizes='100vw'
            priority={true}
          />
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index + image}
                className={`
                ${images.length === 3 && index === 2
                    ? 'col-span-2'
                    : 'col-span-1'
                  }
                `}>
                <Image
                  src={image}
                  alt=""
                  className="object-cover h-[400px] w-full rounded-xl"
                  width={0}
                  height={0}
                  sizes='100vw'
                  priority={true}
                />
              </div>
            ))}
          </div>
        )
        }
      </div>
    </section>

  )
}