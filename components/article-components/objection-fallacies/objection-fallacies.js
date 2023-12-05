export default function ObjectionFallacies(props) {
  const article = props.article;
  return (
    <>
      <hr />
      <div>
        <h3>الأخطاء المنطقية المُستخدمة في هذا الإعتراض:</h3>
        {article.fallacies.map((fallacy, index) => (
          <div key={index}>
            <h4>{fallacy}</h4>
            {/* <p>{fallacy.description}</p> */}
          </div>
        ))}
      </div>
    </>
  );
}
