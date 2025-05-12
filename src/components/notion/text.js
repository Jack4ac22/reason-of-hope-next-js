import styles from '@/assets/styles/index.module.css';
import Link from 'next/link';
import LinkMappingComponent from "@/components/blog-components/mdx/link-mapping-component";

function urlValidationForLocalId(url) {
  if (!url) {
    return url;
  }
  // if it starts with / and has only one / and contains # get the # abd what follows as it will be a local reference get the id and return it
  if (url.startsWith('/') && url.split('/').length === 2 && url.includes('#')) {
    return "#" + url.split('#')[1];
  }
  else return url;
}
// isLatinText is a function that will  check if the text does not conntain arabic caracters so it returns true
function isLatinText(text) {
  const arabicRegex = /[\u0600-\u06FF]/;
  return !arabicRegex.test(text);
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
    const isLatin = isLatinText(text.content);
    return (
      <span
        className={[
          bold ? " boldfont-bold " : '',
          code ? " font-mono bg-DarkAcentS-200 px-1 py-0.5 rounded-sm " : '',
          italic ? " italic " : '',
          strikethrough ? " line-through hover:underline hover:underline-offset-2 " : '',
          underline ? " underline underline-offset-auto " : '',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
        key={text.content}
        dir={isLatin ? 'ltr' : 'rtl'}
      >
        {text.link ?
          <>
            {/* <Link href={urlValidationForLocalId(text.link.url) ?? text.link.url}>{text.content}</Link> */}
            <LinkMappingComponent objectElement={{ href: urlValidationForLocalId(text.link.url), children: text.content }} />
          </>
          : text.content}
      </span>
    );
  });
}
