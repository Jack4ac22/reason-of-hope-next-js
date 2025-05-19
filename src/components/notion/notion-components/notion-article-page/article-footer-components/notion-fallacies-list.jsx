"use client"

import { mapAllFallacies } from "@/utils/blog/notion-mapper";
import Link from "next/link";
import YoutubeListEmbeded from "@/components/notion/notion-components/notion-mapping/youtube-list";
export default async function NotionFallaciesList({ article, allFallacies = [] }) {


  if (!article?.fallacies || article?.fallacies?.length == 0) {
    return null
  }

  const filteredFallacies = allFallacies.filter(fallacy => article.fallacies.includes(fallacy.id));
  return (
    <section id="fallacies-section" className="uni-text-color border-y-2 border-spacing-2 m-4">
      <h3 className="article-footer-headings">الأخطاء المنطقية المُستخدمة في هذا الإعتراض</h3>
      <ol className="list-decimal" >
        {filteredFallacies.map((fallacy, index) => (
          <li key={`${fallacy}-${index}`}>
            <h4 className="objection-title">
              {fallacy.title}
            </h4>
            <p className="objection-description">
              {fallacy.description}
            </p>
            {fallacy.article && (
              <Link
                href={`/${fallacy.article}`}
                className="info-link-button print:hidden">
                اقرأ المزيد عن {fallacy.article}
              </Link>
            )}
            {fallacy.video && (
              <div className="objection-video">
                <div className="w-96">
                  <YoutubeListEmbeded videoUrl={fallacy.video} videoType="external" />
                </div>
              </div>)}
          </li>
        ))}
      </ol>
    </section>
  );
}