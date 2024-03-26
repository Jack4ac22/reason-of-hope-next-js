import SinglePropertyCard from '@/components/course/single-property';
import { fetchProperties } from '@/util/properties-requests'
import Link from 'next/link';

export default async function PropertiesPage() {
  const properties_list = await fetchProperties();
  // sort properties by date
  properties_list.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  }
  );
  return (
    <>
      <section className="px-4 py-6">
        <Link href="/properties/add" className='rounded-md px-3 py-2 hover:bg-gray-900 hover:text-white'> Add Property</Link>
        <Link href="/properties-home" className='rounded-md px-3 py-2 hover:bg-gray-900 hover:text-white'> Property</Link>
        <div className="container-xl lg:container m-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-6">
            {properties_list.length === 0 ?
              <p>No properties found</p> :
              properties_list.map((property, index) => {
                return (<SinglePropertyCard property={property} key={property._id} />)
              })
            }
          </div >
        </div >
      </section >
    </>
  )
}