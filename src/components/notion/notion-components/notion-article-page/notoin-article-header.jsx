import {mapAllContributors} from "@/utils/blog/notion-mapper";

import NotionArticleDate from '@/components/notion/notion-components/notion-article-page/header-components/notion-article-date';
import NOtionArticleAuthors from '@/components/notion/notion-components/notion-article-page/header-components/notion-article-authors';
import NotionArticleTranslators from '@/components/notion/notion-components/notion-article-page/header-components/notion-article-translators';
import NotionCreationLink from '@/components/notion/notion-components/notion-article-page/header-components/notion-creation-link';
import NotionMediaPlayersHeader from "@/components/notion/notion-components/notion-article-page/header-components/notion-media-player";
import { Suspense } from 'react'
import MediaPlayersHeaderSkeleton from "@/components/blog-components/skeltons/media-player-header-skelton";
import NotionResourcesLinks from '@/components/notion/notion-components/notion-article-page/header-components/notion-resources-links';

import ShareIt from '@/components/uneversal-items/share-it'

export default async function NotionArticleHeader({ article }) {
  if (article.mainCategory === "static-pages") return <>
    <NotionMediaPlayersHeader article={article} />
    <ShareIt article={article} />
  </>
  const allContributers = await mapAllContributors();
  return (
    <header className='sm:px-4'>
      <div className="flex flex-col items-center">
        <h1 className="my-3 text-4xl font-extrabold">{article.title}</h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse items-center md:justify-between">
        <NotionArticleDate article={article} />
        <div className='flex-col'>
          <NOtionArticleAuthors article={article} contributers= {allContributers} />
          <NotionArticleTranslators article={article} contributers= {allContributers} />
        </div>
      </div>
      <Suspense fallback={<MediaPlayersHeaderSkeleton />}>
        <NotionMediaPlayersHeader article={article} />
      </Suspense>
      <NotionCreationLink article={article} />
      <NotionResourcesLinks article={article} />
      <ShareIt article={article} />
    </header>
  );
}