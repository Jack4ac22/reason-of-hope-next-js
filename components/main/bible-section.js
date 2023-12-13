import AutoplayingCarousel from "../general-compenents/carousels/Autoplaying-carousels.js";
import YouTube, { YouTubeProps } from "react-youtube";

export default function TheGospelSectionMainPage() {
  const opts = {
    width: "90%",
    height: "250",
    playerVars: {
      autoplay: 0,
      controls: 1,
      light: 1,
    },
  };
  return (
    <>
      <section>
        <div class="container my-5">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h3 class="display-4 fw-bold lh-1 text-body-emphasis">
                THe Gospel section
              </h3>
              <p class="lead">
                Gospel section description Gospel section description Gospel
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button
                  type="button"
                  class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Primary
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg px-4"
                >
                  Default
                </button>
              </div>
            </div>
            <div class="col-lg-4">
              <YouTube videoId={"98IhK5V53ks"} opts={opts} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
