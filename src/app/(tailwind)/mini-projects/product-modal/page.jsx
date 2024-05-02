import ProductModal from './product-modal';
export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-lightAccent-100 dark:bg-darkAccent-700">
        <div className="flex flex-col md:flex-row my-6 space-y-6 md:space-y-0 md:space-x-6 md:my-0 md:mx-6">
          <ProductModal />
        </div>
      </div>
    </>
  )
}