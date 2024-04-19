
import PropertySearchForm from '@/components/course/property-search-form';
import Properties from '@/components/course/properties';


export default async function PropertiesPage() {

  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px4 flex flex-col item-start sm:px-6 sm:mx-5 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      < Properties />
    </>
  )
}