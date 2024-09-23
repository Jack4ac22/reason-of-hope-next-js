import HeadingOne from "@/components/blog-components/mdx/heading-one";
import HeadingTwo from "@/components/blog-components/mdx/heading-two";
import HeadingThree from "@/components/blog-components/mdx/heading-three";
import HeadingFour from "@/components/blog-components/mdx/heading-four";
import HeadingFive from "@/components/blog-components/mdx/heading-five";
import HeadingSix from "@/components/blog-components/mdx/heading-six";
import OrderedList from "@/components/blog-components/mdx/ordered-list";
import UnOrderedList from "@/components/blog-components/mdx/unordered-list";
import ListItem from "@/components/blog-components/mdx/list-item";
import ParapgraphMappingComponent from "@/components/blog-components/mdx/paragraph";
import LinkMappingComponent from "@/components/blog-components/mdx/link-mapping-component";
import ImageMappingComponent from "@/components/blog-components/mdx/image-component";
import HorivontalRule from "@/components/blog-components/mdx/horizental-rule";
import BQuoteComponent from "@/components/blog-components/mdx/black-quote-component";
import TableMappingComponent from "@/components/blog-components/mdx/table-mapping-component";


import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'


export default function ArticleBody({ article }) {
  const customRenderers = {
    h1: (para = { node, ...props }) => <HeadingOne objectElement={para} />,
    h2: (para = { node, ...props }) => <HeadingTwo objectElement={para} />,
    h3: (para = { node, ...props }) => <HeadingThree objectElement={para} />,
    h4: (para = { node, ...props }) => <HeadingFour objectElement={para} />,
    h5: (para = { node, ...props }) => <HeadingFive objectElement={para} />,
    h6: (para = { node, ...props }) => <HeadingSix objectElement={para} />,
    ol: (para = { node, ...props }) => <OrderedList objectElement={para} />,
    ul: (para = { node, ...props }) => <UnOrderedList objectElement={para} />,
    li: (para = { node, ...props }) => <ListItem objectElement={para} />,
    p: (para = { node, ...props }) => <ParapgraphMappingComponent objectElement={para} />,
    a: (para = { node, ...props }) => <LinkMappingComponent objectElement={para} />,
    img: (para = { node, ...props }) => <ImageMappingComponent objectElement={para} />,
    hr: (para = { node, ...props }) => <HorivontalRule objectElement={para} />,
    q: (para = { node, ...props }) => <BQuoteComponent objectElement={para} />,
    table: (para = { node, ...props }) => <TableMappingComponent objectElement={para} />,
  }
  return (
    <div className="article-body">
      <ReactMarkdown
        components={customRenderers}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}>
        {article?.content}</ReactMarkdown>
    </div>
  )
}