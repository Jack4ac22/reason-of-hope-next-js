'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Spinner from '@/components/course/spinner';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import SinglePropertyCard from '@/components/course/single-property';
import PropertySearchForm from '@/components/course/property-search-form';

export default function SearchResaultsPage() {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchType = searchParams.get('searchType');
  const searchQuery = searchParams.get('searchQuery');
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(`/api/properties/search?searchQuery=${searchQuery}&searchType=${searchType}`);
        if (!res.ok) {
          setProperties([]);
          throw new Error('An error occurred while fetching the data.');
        } else if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        }

        setProperties(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchSearchResults();
  }, [searchQuery, searchType]);

  return loading ? (<Spinner loading={loading} />) : (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px4 flex flex-col item-start sm:px-6 sm:mx-5 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <Link href="/properties" className='flex items-center text-blue-500 hover:underline mb-3'><FaArrowAltCircleLeft className='mr-2 mb-1' /> Back to Properties</Link>

          <h1 className="text-2xl font-bold text-gray-800 mb-4">Search Results</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-6">
            {properties.length === 0 ?
              <p>No properties found</p> :
              properties.map((property, index) => {
                return (<SinglePropertyCard property={property} key={property._id} />)
              })
            }
          </div >
        </div >
      </section >
    </>
  )
}