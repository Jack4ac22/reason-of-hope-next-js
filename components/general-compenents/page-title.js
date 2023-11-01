import Head from "next/head";
export default function PageTitle(props) {
  const title = props.title ? props.title : "سبب الرجاء";
  const description = props.description
    ? props.description
    : "إن رجاءنا بالخلاص هو بنعمة الله (وحدها) بالإيمان (وحده) بالمسيح (وحده) من خلال الكتاب المقدس (وحده) لمجد الله (وحده).";
  const image = props.image ? props.image : "/blog-images/ROH.png";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Head>
      <div className="container text-center">
        <div className="row">
          <h1 className="col align-self-center m-5">{title}</h1>
        </div>
      </div>
    </>
  );
}
