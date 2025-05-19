import ArticleDate from '@/components/blog-components/article-page/header-components/article-date'
import ArticleAuthors from '@/components/blog-components/article-page/header-components/article-authors'
import ArticleTranslators from '@/components/blog-components/article-page/header-components/article-translators'
import CreationLink from '@/components/blog-components/article-page/header-components/creation-link'
import AudioLinks from '@/components/blog-components/article-page/header-components/audio-links'
import MediaPlayersHeader from "@/components/blog-components/article-page/header-components/media-player";
import { Suspense } from 'react'
import MediaPlayersHeaderSkeleton from "@/components/blog-components/skeltons/media-player-header-skelton";
import ResourcesLinks from '@/components/blog-components/article-page/header-components/resources-links'
import ShareIt from '@/components/uneversal-items/share-it'

export default function ArticleHeader({ article }) {
  if (article.directory === "static-pages") return <>
    <MediaPlayersHeader article={article} />
    <ShareIt article={article} />
  </>
  return (
    <header className='sm:px-4'>
      <div className="flex flex-col items-center">
        <h1 className="my-3 text-4xl font-extrabold">{article.title}</h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse items-center md:justify-between">
        <ArticleDate article={article} />
        <div className='flex-col'>
          {/* <ArticleAuthors article={article} /> */}
          {/* <ArticleTranslators article={article} /> */}
        </div>
      </div>
      <Suspense fallback={<MediaPlayersHeaderSkeleton />}>
        <MediaPlayersHeader article={article} />
      </Suspense>
      <CreationLink article={article} />
      {/* <AudioLinks article={article} /> */}
      {/* <ResourcesLinks article={article} /> */}
      {/* <ShareIt article={article} /> */}
    </header>
  );
}