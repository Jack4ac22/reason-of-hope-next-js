import Image from 'next/image';
export default function ImageLayover({ layoverObject }) {
  return (
    <div>
      <Image src={`/blog_images/${layoverObject.imageDetails.src}`} alt={layoverObject.imageDetails.alt}
        className="object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl w-full md:max-w-xl lg:max-w-4xl mx-auto"
        sizes="100vw"
        height={0}
        width={0} />
    </div>
  );
}