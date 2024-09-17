import Link from 'next/link'
import ArticleDate from '@/components/blog-components/article-page/header-components/article-date'
import ArticleAuthors from '@/components/blog-components/article-page/header-components/article-authors'
import CreationLink from '@/components/blog-components/article-page/header-components/creation-link'
import AudioLinks from '@/components/blog-components/article-page/header-components/audio-links'

export default function ArticleHeader({ article }) {
  return (
    <header>
      <div className="flex flex-col items-center">
        <h1 className="my-3 text-4xl font-extrabold">{article.title}</h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse items-center md:justify-between">
        <ArticleDate article={article} />
        <ArticleAuthors article={article} />
      </div>
      <hr className="my-6 h-0.5 border-t-0 invert uni-background" />
      <CreationLink article={article} />
      <AudioLinks article={article} />
      <hr className="my-6 h-0.5 border-t-0 invert uni-background" />
    </header>
  );
}