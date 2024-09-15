import Image from 'next/image';
export default function ImageLayover({ layoverObject }) {
  return (
    <figure>
      <Image src={`/blog_images/${layoverObject.imageDetails.src}`} alt={layoverObject.imageDetails.alt}
        className="mx-auto object-contain rounded-t-xl w-full
        md:rounded-tr-none md:rounded-l-xl md:max-w-lg
        lg:max-w-4xl lg:max-h-[70vh] "
        sizes="100vw"
        height={0}
        width={0} />
      <figcaption className="figure-caption text-break uni-text-color text-center p-2 rounded-b-xl uni-background">
        {layoverObject.imageDetails.alt}
      </figcaption>
    </figure>
  );
} 