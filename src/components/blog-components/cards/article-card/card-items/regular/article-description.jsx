export default function ArticleDescription({ article }) {
  // check if article is an objection and has fallacies then add the fallacies to the description else make the description an empty string
  if (!article.description && article.directory === 'objections') {
    if (article?.fallacies?.length > 0) { article.description = "الأخطاء المنطقية التي ارتكبت في هذا الاعتراض هي: " + article.fallacies.map(fallacy => fallacy.split('-').join(' ')).join(', ') } else { "" }
  }
  const descriptionLength = 25;
  const isLongDescription = article?.description?.split(' ').length > descriptionLength
  if (!isLongDescription) {
    return (
      <div className="">
        <p className='text-md text-justify text-darkAccent-400 dark:text-white'>
          {article.description}
        </p>
      </div>
    )
  }
  return (
    <>
      <p className='my-2 text-md text-justify text-darkAccent-400 dark:text-white'>
        {article.description.split(' ').slice(0, descriptionLength).join(' ')}
        <span> ...</span>
      </p>
    </>
  )
}