export const dynamic = 'force-dynamic';
import {
  getDatabase, getBlocks, getPageFromSlug,
} from '@/utils/blog/notion';
import Text from '@/components/notion/text';
import { renderBlock } from '@/components/notion/renderer';
import styles from '@/assets/styles/post.module.css';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import { revalidate } from '@/app/page';

export const revalidate = 3600 

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const database = await getDatabase();
//   try {
//     return database?.map((page) => {
//       const slug = page.properties.Slug?.formula?.string;
//       return ({ id: page.id, slug });
//     });
//   } catch (error) {
//     console.error('Error generating static params:', error);
//     return [];
//   }
// };



export default async function Page({ params }) {
  const page = await getPageFromSlug(params?.slug);
  if (!page) {
    console.error('Page not found:', params?.slug);
    notFound();
  }
  const blocks = await getBlocks(page?.id);

  if (!page || !blocks) {
    return <div />;
  }

  return (
    <div>
      <article className={styles.container}>
        <h1 className={styles.name}>
          <Text title={page.properties.Title?.title} />
        </h1>
        <section>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </section>
      </article>
    </div>
  );
}

// export const getStaticPaths = async () => {
//   const database = await getDatabase(databaseId);
//   return {
//     paths: database.map((page) => {
//       const slug = page.properties.Slug?.formula?.string;
//       return ({ params: { id: page.id, slug } });
//     }),
//     fallback: true,
//   };
// };

// export const getStaticProps = async (context) => {
//   const { slug } = context.params;
//   const page = await getPage(id);
//   const blocks = await getBlocks(id);

//   return {
//     props: {
//       page,
//       blocks,
//     },
//     revalidate: 1,
//   };
// };
