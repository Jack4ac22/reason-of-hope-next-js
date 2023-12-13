import Link from "next/link";
import AutoplayingCarousel from "../general-compenents/carousels/Autoplaying-carousels.js";

export default function CreationSectionMainPage(props) {
  return (
    <>
      <section key={"creation-section"}>
        <div className="container my-5 ">
          <div className="row justify-content-center">
            <div className="col-">
              <AutoplayingCarousel
                articles={props.articles}
                id="category_gospel"
                baseUrl="creation"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
