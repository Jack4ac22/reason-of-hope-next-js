import Image from 'next/image';
export default function ImageLayover({ layoverObject }) {
  function sanitizestring(string) {
    const response = string.replaceAll("small", "").replaceAll("full", "")
    return response;
  }
  return (
    <figure>
      <Image src={`/blog_images/${layoverObject.imageDetails.src}`} alt={layoverObject.imageDetails.alt}
        className="rounded-xl mx-auto object-cover w-full md:rounded-l-xl md:max-w-lg lg:max-w-4xl lg:max-h-[70vh]"
        sizes="100vw"
        height={0}
        width={0} />
      <figcaption className="figure-caption text-break uni-text-color text-center p-2 rounded-b-xl uni-background">
        {sanitizestring(layoverObject.imageDetails.alt)}
      </figcaption>
    </figure>
  );
} 