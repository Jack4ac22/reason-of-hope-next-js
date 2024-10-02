import Link from "next/link";
import CardSlider from "../../ui/sliders/cards-slider";

export default function ListCard({ list_item }) {
  return (
    <>
      <div className='m-2 w-80 h-128 border rounded-md relative flex-col items-center bg-lightShade-200 dark:bg-lightShade-800'>
        <div className='w-full h-full flex-col items-center justify-around'>
          <p className="mt-2 mx-auto p-2 uni-text-color text-center text-2xl font-extrabold info-link-button max-w-max">
            <Link href={`/categories/${list_item.title}`}>{`${list_item.title.replaceAll('-', ' ')}`}</Link></p>
          <p className="uni-text-color">
            {new Intl.NumberFormat('ar-EG').format(list_item.count)} منشور
          </p>
          <CardSlider articles={list_item.articles} showNav={false} autoPlay={false}/>
        </div>
      </div>
    </>
  )
}