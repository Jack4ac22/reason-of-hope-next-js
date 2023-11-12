import { useRouter } from "next/router";

const BackToPreviousPage = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
// TODO: remove this component if there is no back in the router.back()
  return (
    <div className="position-fixed top-0 end-0 mt-5 opacity-25">
      <button className="btn btn-primary rounded-circle" onClick={goBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-return-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
          />
        </svg>
        عودة
      </button>
    </div>
  );
};

export default BackToPreviousPage;
