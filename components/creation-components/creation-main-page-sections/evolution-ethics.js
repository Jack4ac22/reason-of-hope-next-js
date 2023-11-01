import AutoplayingCarousel from "../../general-compenents/carousels/Autoplaying-carousels.js";
import Link from "next/link";
export default function EvolutionEthicsSection(props) {
  const articlesByCategoryEvolution = props.articlesByCategoryEvolution;
  return (
    <>
      {/*  التطور ونتائجه */}
      <section
        className="rounded-4 border border-5 mt-3"
        key={"evolution-ethics"}
      >
        <div className="container mt-5 ">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <AutoplayingCarousel
                articles={articlesByCategoryEvolution}
                id="evolution-ethics"
              />
            </div>
            <div className="col-md-6 mt-5">
              <div>
                <h3>التطور ونتائجه</h3>
                <p className="h5">
                  إن الإيمان بالتطور يحمل عواقب ويتطلب افتراضات يتم تبنيها على
                  أساس أنها من المسلّمات.
                </p>
                <p className="h5">
                  سيتم في هذا القسم التعامل مع الإفتراضات التطورية، بالإضافة إلى
                  إظهار النتائج التي ترتبط بشكل أو بآخر بتبني هذه المعتقدات.
                </p>
                <Link
                  href="/creation/evolution-ethics"
                  className=" h4 btn btn-info m-5"
                >
                  اقرأ مقالات هذه الفئة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
