import {
  getDatabase, getBlocks, getPageFromSlug,
} from '@/utils/blog/updated-notion-helper';
import Text from '@/components/notion/text';
import { renderBlock } from '@/components/notion/renderer';
import styles from '@/assets/styles/post.module.css';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';
export default async function NotionArticleBody({ article }) {
  const blocks = await getBlocks(article?.id);
  return (
    <>
      {blocks.map((block) => (
        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
      ))}
    </>
  )
}