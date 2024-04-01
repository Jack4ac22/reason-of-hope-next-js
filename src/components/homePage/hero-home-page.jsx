import PropertySearchForm from "@/components/course/property-search-form";

export default function HeroHomePage() {
  return (
    <>
      <section className="bg-blue-700 py-20 mb-4">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
          <div className="text-center">
            <h1
              className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              Together We fulfill the Great Commission
            </h1>
            <p className="my-4 text-xl text-white">
              Let Us work together to bring the Gospel message closer to those who never heard it, and to those who need to hear it again.
            </p>
          </div>
          <PropertySearchForm />
        </div>
      </section>
    </>
  )
}