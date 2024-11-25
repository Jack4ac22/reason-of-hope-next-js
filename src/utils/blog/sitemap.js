import { getAllArticlesData } from "./articles-functions";
import fs from "fs";
import path from "path";
import host from "@/assets/blog/metadata/metadata-variables";

export function updateSitemap(filename = "sitemap-1.xml") {
  try {
    const allArticles = getAllArticlesData(true);
    const folderPath = "public";
    const filePath = path.join(folderPath, filename);
    const foldered_pages = [
      { path: "devotions", priority: "0.8", changefreq: "weekly" },
      { path: "logic", priority: "0.7", changefreq: "weekly" },
      { path: "studies", priority: "0.7", changefreq: "weekly" },
      { path: "words", priority: "0.7", changefreq: "weekly" },
      { path: "all", priority: "0.7", changefreq: "weekly" },
      { path: "creation", priority: "0.9", changefreq: "weekly" },
      {
        path: "creation/biblical-world",
        priority: "0.9",
        changefreq: "weekly",
      },
      {
        path: "creation/creation-gospel",
        priority: "0.9",
        changefreq: "weekly",
      },
      { path: "creation/dino-dating", priority: "0.9", changefreq: "weekly" },
      {
        path: "creation/evolution-ethics",
        priority: "0.9",
        changefreq: "weekly",
      },
      { path: "creation/modern-science", priority: "1", changefreq: "weekly" },
      { path: "gospel", priority: "1", changefreq: "weekly" },
      { path: "objections", priority: "0.9", changefreq: "weekly" },
      { path: "objections/sectoin-1", priority: "0.8", changefreq: "weekly" },
      { path: "objections/sectoin-2", priority: "0.8", changefreq: "weekly" },
      { path: "objections/sectoin-3", priority: "0.8", changefreq: "weekly" },
      { path: "objections/sectoin-4", priority: "0.8", changefreq: "weekly" },
      { path: "objections/sectoin-5", priority: "0.8", changefreq: "weekly" },
      { path: "publicatoins", priority: "1", changefreq: "weekly" },
      { path: "publicatoins/books", priority: "1", changefreq: "weekly" },
      { path: "publicatoins/cults", priority: "1", changefreq: "weekly" },
      { path: "publicatoins/studies", priority: "1", changefreq: "weekly" },
      { path: "about", priority: "0.5", changefreq: "yearly" },
      { path: "contact", priority: "0.5", changefreq: "yearly" },
      { path: "ourfaith", priority: "1", changefreq: "yearly" },
    ];

    const sitemapContent = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${foldered_pages
              .map(
                (page) =>
                  `<url><loc>${host}/${
                    page.path
                  }</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>${
                    page.changefreq || never
                  }</changefreq><priority>${
                    page?.priority || "0.7"
                  }</priority></url>`
              )
              .join("\n")}}

  ${allArticles
    .map(
      (article) =>
        `<url><loc>${host}/${article.directory}/${
          article.slug
        }</loc><lastmod>${new Date(
          article.date
        ).toISOString()}</lastmod><changefreq>monthly</changefreq><priority>${
          article?.priority || "0.7"
        }</priority></url>`
    )
    .join("\n")}
  </urlset>`;

    fs.writeFileSync(filePath, sitemapContent, "utf8");
    console.log("sitemap is updated");
    return filename;
  } catch (error) {
    console.error(error);
    return "/";
  }
}
