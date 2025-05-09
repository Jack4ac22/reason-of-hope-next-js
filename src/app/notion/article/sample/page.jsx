export const dynamic = 'force-dynamic';

import { Fragment } from "react";
import { notFound } from "next/navigation";
import {
  getAllArticles
  , getAllTags
  , getCategories
  , getContributors
  , getFallacies
  , getPageFromSlug
  , getBlocks

} from "@/utils/blog/updated-notion-helper"

import Text from '@/components/notion/text';
import { renderBlock } from '@/components/notion/renderer';
import { revalidate } from "@/app/page";

revalidate(3600); 

export default async function MigrationPage() {
  const page = await getPageFromSlug("test");
  if (!page) {
    console.error('Page not found:');
    notFound();
  }

  const blocks = await getBlocks(page?.id);
  if (!page || !blocks) {
    return <div />;
  }

  return (
    <div>
      <h1>Migration is running</h1>
      <section>
        {blocks.map((block) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
      </section>
    </div>

  );
}