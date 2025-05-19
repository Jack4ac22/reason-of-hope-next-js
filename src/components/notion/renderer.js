import { Fragment } from 'react';
import { Suspense } from 'react';
import Link from 'next/link';

import Iframe from 'react-iframe'
import YoutubeListEmbeded from "@/components/notion/notion-components/notion-mapping/youtube-list";
import YoutubeListSkeleton from "@/components/blog-components/skeltons/YoutubeListSkeleton";

import Text from './text';
import styles from '@/assets/styles/post.module.css';

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
import ImageMappingComponent from "@/components/blog-components/mdx/image-component";
import HorivontalRule from "@/components/blog-components/mdx/horizental-rule";
import BQuoteComponent from "@/components/blog-components/mdx/black-quote-component";
import TableMappingComponent from "@/components/blog-components/mdx/table-mapping-component";
import PdfViewer from './notion-components/notion-mapping/pdf-viewer';

export function renderBlock(block, index) {
  const { type, id } = block;
  const value = block[type];
  const id_no_dashes = id?.replace(/-/g, '') || id;

  switch (type) {
    case 'paragraph':
      return (
        <p className="uni-text-color indent-3 text-wrap" key={id} id={id_no_dashes}>
          <Text title={value.rich_text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1 id={id_no_dashes} className="mt-2 mb-4 mx-2 text-mainBrand-500 text-4xl" key={id}>
          <Text title={value.rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2 id={id_no_dashes} className="mt-2 mb-4 mx-2 text-mainBrand-600 text-2xl" key={id}>
          <Text title={value.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3 id={id_no_dashes} className="mt-1 mb-2 mx-3 text-mainBrand-600 text-xl">
          <Text title={value.rich_text} />
        </h3>
      );
    case 'heading_4':
      return (
        <h4 id={id_no_dashes} className="mt-1 mb-2 mx-4 text-mainBrand-600 text-lg">
          <Text title={value.rich_text} />
        </h4>
      )
    case 'heading_5':
      return (
        <h5 id={id_no_dashes} className="mt-1 mb-2 mx-5 text-mainBrand-600 text-lg">
          <Text title={value.rich_text} />
        </h5>
      )
    case 'bulleted_list': {
      return <ul key={id} id={id_no_dashes} className='list-disc list-inside mr-3'>{value.children.map((child) => renderBlock(child))}</ul>;
    }
    case 'numbered_list': {
      return <ol key={id} id={id_no_dashes} className="list-decimal list-inside md:m-5" style={{ listStyleType: 'arabic-indic' }}>{value.children.map((child, index) => renderBlock(child, index))}</ol>;
    }
    case 'bulleted_list_item':
      return (
        <li key={block.id} id={id_no_dashes} className="list-disc">
          <Text title={value.rich_text} />
          {/* eslint-disable-next-line no-use-before-define */}
          {!!value.children && renderNestedList(block)}
        </li>);
    case 'numbered_list_item':
      return (
        <li key={block.id} id={id_no_dashes} className="oldstyle-nums">
          <Text title={value.rich_text} />
          {/* eslint-disable-next-line no-use-before-define */}
          {!!value.children && renderNestedList(block)}
        </li>
      );
    case 'to_do':
      return (
        <div key={id}>
          <label htmlFor={id}>
            <input type="checkbox" id={id_no_dashes} defaultChecked={value.checked} />
            {' '}
            <Text title={value.rich_text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details key={id}>
          <summary>
            <Text title={value.rich_text} />
          </summary>
          {block.children?.map((child) => (
            <Fragment key={child.id}>{renderBlock(child)}</Fragment>
          ))}
        </details>
      );
    case 'child_page':
      return (
        <div className={styles.childPage}>
          {/* <strong>{value?.title}</strong> */}
          {block.children.map((child) => renderBlock(child))}
        </div>
      );
    case 'image': {
      const src = value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <>
          <ImageMappingComponent objectElement={{ src, alt: caption }} />
          {/* <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure> */}
        </>
      );
    }
    case 'divider':
      return <hr key={id} id={id_no_dashes} />;
    case 'quote':
      return <blockquote key={id} id={id_no_dashes}>{value.rich_text[0].plain_text}</blockquote>;
    case 'code':
      return (
        <pre className={styles.pre} id={id_no_dashes}>
          <code className={styles.code_block} key={id}>
            {value.rich_text[0].plain_text}
          </code>
        </pre>
      );
    case 'file': {
      const srcFile = value.type === 'external' ? value.external.url : value.file.url;
      const splitSourceArray = srcFile.split('/');
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const captionFile = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure>
          <div className={styles.file}>
            📎
            {' '}
            <Link href={srcFile} passHref>
              {lastElementInArray.split('?')[0]}
            </Link>
          </div>
          {captionFile && <figcaption>{captionFile}</figcaption>}
        </figure>
      );
    }
    case 'pdf': {
      const srcFile = value.type === 'external' ? value?.external?.url : value?.file?.url;
      const captionFile = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <Suspense fallback={<p>Loading PDF...</p >}>
          <PdfViewer key={id} url={srcFile} title={captionFile} />
        </Suspense>
      );
    }
    case 'bookmark': {
      const href = value.url;
      return (
        <a href={href} target="_blank" rel="noreferrer noopener" className={styles.bookmark} id={id_no_dashes}>
          {href}
        </a>
      );
    }
    case 'table': {
      return (
        <table className={styles.table} id={id_no_dashes}>
          <tbody>
            {block.children?.map((child, index) => {
              const RowElement = value.has_column_header && index === 0 ? 'th' : 'td';
              return (
                <tr key={child.id}>
                  {child.table_row?.cells?.map((cell, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <RowElement key={`${cell.plain_text}-${i}`}>
                      <Text title={cell} />
                    </RowElement>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    case 'column_list': {
      return (
        <div className={styles.row} id={id_no_dashes}>
          {block.children.map((childBlock) => renderBlock(childBlock))}
        </div>
      );
    }
    case 'column': {
      return <div id={id_no_dashes}>{block.children.map((child) => renderBlock(child))}</div>;
    }
    case 'embed': {
      const embeded_src = value.url;
      return (
        <div>EMBEDED</div>)
    }
    case 'video': {
      const videoUrl = value?.external?.url;
      const videoCaption = value?.caption[0]?.plain_text;
      const videoType = value?.type;
      return (
        <Suspense fallback={<YoutubeListSkeleton />}>
          <div key={id} id={id_no_dashes}>
            <YoutubeListEmbeded videoUrl={videoUrl} videoCaption={videoCaption} videoType={videoType} />
          </div>
        </Suspense>
      );
    }
    default:
      return `❌ Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type
        })`;
  }
}

export function renderNestedList(blocks) {
  const { type, id } = blocks;
  const value = blocks[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === 'numbered_list_item';

  if (isNumberedList) {
    return <ol id={id_no_dashes} className='list-decimal list-inside '>{value.children.map((block) => renderBlock(block))}</ol>;
  }
  return <ul id={id_no_dashes} className='list-disc list-inside mr-5'>{value.children.map((block) => renderBlock(block))}</ul>;
}
