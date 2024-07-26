import HeadingOne from "@/components/blog-components/mdx/heading-one";
import HeadingTwo from "@/components/blog-components/mdx/heading-two";
import HeadingThree from "@/components/blog-components/mdx/heading-three";
import ParapgraphMappingComponent from "@/components/blog-components/mdx/paragraph";
import LinkMappingComponent from "@/components/blog-components/mdx/link-mapping-component";
import ImageMappingComponent from "@/components/blog-components/mdx/image-component";

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'


export default function ArticleBody({ article }) {
  const customRenderers = {
    h1: (para = { node, ...props }) => <HeadingOne objectElement={para} />,
    h2: (para = { node, ...props }) => <HeadingTwo objectElement={para} />,
    h3: (para = { node, ...props }) => <HeadingThree objectElement={para} />,
    h4: ({ node, ...props }) => <h4 className="text-yellow-500 text-4xl">{props.children}</h4>,
    h5: ({ node, ...props }) => <h5 className="text-purple-500 text-4xl">{props.children}</h5>,
    h6: ({ node, ...props }) => <h6 className="text-pink-500 text-4xl">{props.children}</h6>,
    p: (para = { node, ...props }) => <ParapgraphMappingComponent objectElement={para} />,
    a: (para = { node, ...props }) => <LinkMappingComponent objectElement={para} />,
    img: (para = { node, ...props }) => <ImageMappingComponent objectElement={para} />,
  }
  return (
    <main className="m-4">
      <ReactMarkdown
        components={customRenderers}
        // rehypePlugins={[rehypeRaw]} 
        remarkPlugins={[remarkGfm]}>
        {article?.content}</ReactMarkdown>
    </main>
  )
}