import PDFLink from "@/components/blog-components/cards/single-card/links/pdf-link";
import EpubLink from "@/components/blog-components/cards/single-card/links/epub-link";
import AppleBooksLink from "@/components/blog-components/cards/single-card/links/apple-books-link";
import GoogleBooksLink from "@/components/blog-components/cards/single-card/links/google-books-link";

export default function ResourcesIcons({ article }) {
  if (article.resources?.length > 0 || article.audio?.length > 0) {
    return (
      <div className="flex flex-col items-center justify-center bg-opacity-80 bg-lightShade w-full hover:bg-opacity-100">
        <span className="mt-2 text-darkShade text-sm font-semibold">مُتوفِّر بالصيغ التالية: </span>
        <div className="group bottom-0 flex flex-nowrap overflow-x-scroll
    w-full my-2 text-nowrap">
          {
            article.resources?.map((resource, index) => {
              if (resource.title === "pdf") { return (<PDFLink key={`${index}_${resource.title}`} resource={resource} />) }
              if (resource.title === "epub") { return (<EpubLink key={`${index}_${resource.title}`} resource={resource} />) }
              if (resource.title === "appleBooks") { return (<AppleBooksLink key={`${index}_${resource.title}`} resource={resource} />) }
              if (resource.title === "googleBooks") { return (<GoogleBooksLink key={`${index}_${resource.title}`} resource={resource} />) }
            })
          }
        </div>
      </div>
    );
  }
  else { return null }
}