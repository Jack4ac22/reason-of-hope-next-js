import Link from "next/link";

const ScrollToTopButton = () => {
  return (
    <div className="fixed-bottom text-start m-4  opacity-25">
      <Link href="#navbar" className="btn btn-primary">
        إلى الأعلى
      </Link>
    </div>
  );
};

export default ScrollToTopButton;
