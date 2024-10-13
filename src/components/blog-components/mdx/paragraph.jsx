import ImageMappingComponent from "@/components/blog-components/mdx/image-component"
export default function ParapgraphMappingComponent({ objectElement }) {
  const { node } = objectElement;
  if (node.children[0].tagName === "img") {
    const image = {
      src: `${node.children[0].properties.src}`,
      alt: node.children[0].properties.alt,
    };
    return <ImageMappingComponent objectElement={image} />;
  }
  return (
    <p className="uni-text-color indent-3 text-wrap">{objectElement.children}</p>
  )
}


