import Image from 'next/image';
export default function ImageLayover({ layoverObject }) {
  return (
    <>
      <Image src={`/blog_images/${layoverObject.imageDetails.src}`} alt={layoverObject.imageDetails.alt}
        className="mx-auto object-contain rounded-t-xl w-full
        md:rounded-tr-none md:rounded-l-xl md:max-w-lg
        lg:max-w-4xl lg:max-h-[70vh] "
        sizes="100vw"
        height={0}
        width={0} />
    </>
  );
} 