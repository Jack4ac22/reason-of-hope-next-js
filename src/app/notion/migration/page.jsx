import { getTagsList, getCategoriesList, } from "@/utils/blog/articles-functions";
import { createTagIfNotExists, articlesProperties, getContributers, CreateContributerIfNotExists } from "@/utils/blog/migration-helper";
export default async function MigrationPage() {
  // const tags = getTagsList();
  // tags.map(tag => (createTagIfNotExists("1e3ea021d67780d0b68ed805e1667063", "Tag", tag)))
  // const categories = getCategoriesList();
  // categories.map(category => (createTagIfNotExists("1e3ea021d677803eb99fca22dd62a828", "Category", category)))
  // const articles = await getContributers();
  const contributers = await getContributers();
  contributers.map(contributer => (CreateContributerIfNotExists("1e3ea021d677805b92fbed42a680e47a", contributer.Name, contributer.URL)))
  return (
    <div>

      <h1>Migration is running</h1>
      {/* <div dir="ltr">{JSON.stringify(tags)}</div> */}
      {/* <div dir="ltr">{JSON.stringify(categories)}</div> */}
      {/* <div dir="ltr">{JSON.stringify(articles)}</div> */}
      <div dir="ltr">
        {
          contributers.map(contributer => (<div dir="ltr" key={contributer.name}>{JSON.stringify(contributer)}</div>))}
      </div>
    </div>

  );
}