import ParapgraphMappingComponent from "@/components/blog-components/mdx/paragraph";
import LinkMappingComponent from "@/components/blog-components/mdx/link-mapping-component";
import ImageMappingComponent from "@/components/blog-components/mdx/image-component";

import { getAllArticlesData } from "@/utils/blog/articles-functions";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'


export default function Page({ params }) {
  const article = getAllArticlesData().filter(article => article.slug === params.slug)[0];
  const customRenderers = {
    h1: ({ node, ...props }) => <h1 className="text-green-500 text-4xl">{props.children}</h1>,
    h2: ({ node, ...props }) => <h2 className="text-red-500 text-4xl">{props.children}</h2>,
    h3: ({ node, ...props }) => <h3 className="text-blue-500 text-4xl">{props.children}</h3>,
    h4: ({ node, ...props }) => <h4 className="text-yellow-500 text-4xl">{props.children}</h4>,
    h5: ({ node, ...props }) => <h5 className="text-purple-500 text-4xl">{props.children}</h5>,
    h6: ({ node, ...props }) => <h6 className="text-pink-500 text-4xl">{props.children}</h6>,
    p: (para = { node, ...props }) => <ParapgraphMappingComponent objectElement={para} />,
    a: (para = { node, ...props }) => <LinkMappingComponent objectElement={para} />,
    img: (para = { node, ...props }) => <ImageMappingComponent objectElement={para} />,
  }
  return (
    <>

      <h1>{article?.title}</h1>
      <ReactMarkdown
        components={customRenderers}
        // rehypePlugins={[rehypeRaw]} 
        remarkPlugins={[remarkGfm]}>
        {article?.content}</ReactMarkdown>
    </>
  )
}