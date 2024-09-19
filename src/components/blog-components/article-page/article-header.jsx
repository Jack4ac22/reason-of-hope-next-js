import Link from 'next/link'
import ArticleDate from '@/components/blog-components/article-page/header-components/article-date'
import ArticleAuthors from '@/components/blog-components/article-page/header-components/article-authors'
import CreationLink from '@/components/blog-components/article-page/header-components/creation-link'
import AudioLinks from '@/components/blog-components/article-page/header-components/audio-links'
import MediaPlayersHeader from "@/components/blog-components/article-page/header-components/media-player";
import { Suspense } from 'react'
import MediaPlayersHeaderSkeleton from "@/components/blog-components/skeltons/media-player-header-skelton";

export default function ArticleHeader({ article }) {
  if (article.directory === "static-pages") return null
  return (
    <header>
      <div className="flex flex-col items-center">
        <h1 className="my-3 text-4xl font-extrabold">{article.title}</h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse items-center md:justify-between">
        <ArticleDate article={article} />
        <ArticleAuthors article={article} />
      </div>
      <Suspense fallback={<MediaPlayersHeaderSkeleton />}>
        <MediaPlayersHeader article={article} />
      </Suspense>
      <CreationLink article={article} />
      <AudioLinks article={article} />
    </header>
  );
}