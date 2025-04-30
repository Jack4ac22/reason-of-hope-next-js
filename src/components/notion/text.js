import styles from '@/assets/styles/index.module.css';
import Link from 'next/link';
import LinkMappingComponent from "@/components/blog-components/mdx/link-mapping-component";

function urlValidationForLocalId(url) {
  if (!url) {
    return url;
  }
  // if it starts with / and has only one / and contains # get the # abd what follows as it will be a local reference get the id and return it
  if (url.startsWith('/') && url.split('/').length === 2 && url.includes('#')) {
    return "#" +url.split('#')[1];
  }
  
}
export default function Text({ title }) {
  if (!title) {
    return null;
  }
  return title.map((value) => {
    const {
      annotations: {
        bold, code, color, italic, strikethrough, underline,
      },
      text,
    } = value;
    return (
      <span
        className={[
          bold ? styles.bold : '',
          code ? styles.code : '',
          italic ? styles.italic : '',
          strikethrough ? " line-through hover:underline hover:underline-offset-2 " : '',
          underline ? styles.underline : '',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
        key={text.content}
      >
        {text.link ? <Link href={urlValidationForLocalId(text.link.url)?? text.link.url}>{text.content}</Link> : text.content}
      </span>
    );
  });
}
