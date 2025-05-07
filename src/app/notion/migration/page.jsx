import { queryDatabasePaginated, getTags, getCategories, getContributersList, getFallaciesList } from "@/utils/blog/notion";
import { getTagsList, getCategoriesList, getArticlesList, } from "@/utils/blog/articles-functions";
import { createTagIfNotExists, getArticlesPropertiesFromMD, getContributersFromMD, CreateContributerIfNotExists, mapTagPages, mapCategoryPages, mapContributorPages, mapFallacyPage } from "@/utils/blog/migration-helper";
import { getArticles } from "@/utils/blog/updated-notion-helper";
export default async function MigrationPage() {
  // const tags = getTagsList();
  // tags.map(tag => (createTagIfNotExists("1e3ea021d67780d0b68ed805e1667063", "Tag", tag)))
  // const categories = getCategoriesList();
  // categories.map(category => (createTagIfNotExists("1e3ea021d677803eb99fca22dd62a828", "Category", category)))
  // const articles = await getContributersFromMD();
  // const contributers = await getContributersFromMD();
  // contributers.map(contributer => (CreateContributerIfNotExists("1e3ea021d677805b92fbed42a680e47a", contributer.Name, contributer.URL)))
  // const contributers = mapContributorPages (await getContributersList());
  // const tags = mapTagPages(await getTags());
  // const categories = mapCategoryPages(await getCategories());
  // const fallacies = mapFallacyPage(await getFallaciesList());
const allArticles =await getArticles();
console.log(allArticles[0].properties.Tags)
  return (
    <div>

      <h1>Migration is running</h1>
      {/* <div dir="ltr">{JSON.stringify(tags)}</div> */}
      {/* <div dir="ltr">{JSON.stringify(categories)}</div> */}
      {/* <div dir="ltr">{JSON.stringify(articles)}</div> */}
      {/* <div dir="ltr"> */}
      {/* {contributers.map(contributer => (<div dir="ltr" key={contributer.name}>{JSON.stringify(contributer)}</div>))} */}
      {/* </div> */}
      {/* <div dir="ltr">{JSON.stringify(contributers.length)}</div>
      <div >
        {contributers.map(contributer => (
          <div dir="ltr" key={contributer.id}>
            {JSON.stringify(contributer)}
          </div>
        ))}
      </div> */}
      {/* <div dir="ltr">{JSON.stringify(categories.length)}</div>
      <div >
        {categories.map(category => (
          <div dir="ltr" key={category.id}>
            {JSON.stringify(category)}
          </div>
        ))}
      </div>


      <div dir="ltr">{JSON.stringify(tags.length)}</div>
      <div >
        {tags.map(tag => (
          <div dir="ltr" key={tag.id}>
            {JSON.stringify(tag)}
          </div>
        ))}
      </div> */}


      {/* Fallacies */}
      {/* <div dir="ltr">{JSON.stringify(fallacies.length)}</div> */}

      {/* <div >
        {fallacies.map(fallacy => (
          <div dir="ltr" key={fallacy.id}>
            <p>{fallacy.id}</p>
            <p>{fallacy.title}</p>
            <p>{fallacy.description}</p>
            <p>{fallacy.video}</p>

          </div>
        ))}
      </div> */}
    </div>

  );
}