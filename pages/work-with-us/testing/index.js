export default function TestingPage(props) {
  return <p>{JSON.stringify(props.data)}</p>;
}

export async function getServerSideProps() {
  const res = await fetch("https://detacontact-1-k1032287.deta.app", {
    headers: {
      "X-Space-App-Key": NEXT_PUBLIC_API_KEY,
    },
  });
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
