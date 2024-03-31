import Image from "next/image"

export default function PropertyHeaderImage({ image }) {
  return (
    <>
      <section>
        <div className="container-xl m-auto">
          <div className="grid grid-cols-1">
            <Image
              src={image}
              alt=""
              className="object-cover h-[400px] w-full"
              sizes='100vw'
              width={0}
              height={0}
              priority={true}
            />
          </div>
        </div>
      </section>
    </>
  )
}