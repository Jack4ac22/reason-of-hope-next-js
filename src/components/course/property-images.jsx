import Image from 'next/image'
import { Gallery, Item } from 'react-photoswipe-gallery'
export default function PropertyImagesComponent({ images }) {
  return (
    <Gallery withCaption>
      <section className="bg-blue-50 p-4">
        <div className="container m-auto">
          {images.length === 1 ? (
            <Item
              caption="Image caption"
              original={images[0]}
              thumbnail={images[0]}
              width="1024"
              height="768"
            >
              {({ ref, open }) => (<Image
                ref={ref}
                onClick={open}
                src={images[0]}
                alt=""
                className="object-cover h-[400px] mx-auto rounded-xl"
                width={0}
                height={0}
                sizes='100vw'
                priority={true}
              />)}
            </Item>
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
                  <Item
                    caption={`Image ${index + 1}`}
                    original={images[index]}
                    thumbnail={images[index]}
                    width="1024"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <Image
                        ref={ref}
                        onClick={open}
                        src={image}
                        alt=""
                        className="object-cover h-[400px] w-full rounded-xl"
                        width={0}
                        height={0}
                        sizes='100vw'
                        priority={true}
                      />
                    )}
                  </Item>
                </div>
              ))}
            </div>
          )
          }
        </div>
      </section>
    </Gallery>
  )
}