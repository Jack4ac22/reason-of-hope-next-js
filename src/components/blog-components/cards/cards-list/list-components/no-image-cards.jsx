import ListCard from "@/components/blog-components/cards/article-card/list-card"

export default function NoImageDisplayedCards({ list, order, perPage, page }) {
  // check if the perpage exist and a number else use 6 as default
  if (!perPage || isNaN(perPage)) {
    perPage = 6;
  }
  if(!order || typeof order !== "string") {
    order = "title_asc";
  }
  if (order === "least") {
    list.sort((a, b) => new Date(a.count) - new Date(b.count));
  } else if (order === "most") {
    list.sort((a, b) => new Date(b.count) - new Date(a.count));
  } else if (order === "title_asc") {
    list.sort((a, b) => a.title.localeCompare(b.title));
  } else if (order === "title_dsc") {
    list.sort((a, b) => b.title.localeCompare(a.title));
  }
  list = list.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="flex flex-wrap justify-center md:justify-evenly items-center content-center w-full m-2">
      {list.map((item, index) => (
        <ListCard key={`${index}_${item}`} list_item={item} />
      ))}
    </div>
  );
}