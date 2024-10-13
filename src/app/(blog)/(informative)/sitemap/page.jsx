import { getAllArticlesData } from "@/utils/blog/articles-functions";
import { updateSitemap } from "@/utils/blog/sitemap"
import { redirect } from "next/navigation";

export default function Page() {
  redirect(updateSitemap())
    ;
}