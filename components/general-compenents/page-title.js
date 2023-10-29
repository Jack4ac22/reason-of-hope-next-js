export default function PageTitle(props) {
  const title = props.title;
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <h1 class="col align-self-center m-5">{title}</h1>
        </div>
      </div>
    </>
  );
}
