'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { fetchProperties } from '@/util/properties-requests'

import Spinner from '@/components/course/spinner';
import SinglePropertyCard from '@/components/course/single-property';
import Pagination from '@/components/course/pagination';
import { set } from 'mongoose';



export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalitems, setTotalitems] = useState(0);

  useEffect(() => {
    const fetchPropertiesData = async () => {
      try {
        const res = await fetch(`/api/properties?page=${page}&pageSize=${pageSize}`);
        if (!res.ok) {
          throw new Error("Failed to fetch the data from the database");
        }
        const data = await res.json();
        setProperties(data.properties);
        setTotalitems(data.total);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPropertiesData();
  }, [page, pageSize])

  const handlePageChange = (newPage) => {
    setPage(newPage);
  }

  return loading ? <Spinner loading={loading} /> : (
    <>
      <section className="px-4 py-6">
        <Link href="/properties/add" className='rounded-md px-3 py-2 hover:bg-gray-900 hover:text-white'> Add Property</Link>
        <Link href="/properties-home" className='rounded-md px-3 py-2 hover:bg-gray-900 hover:text-white'> Property</Link>
        <div className="container-xl lg:container m-auto px-4 py-6">
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
      <Pagination page={page} pageSize={pageSize} totalitems={totalitems} onPageChange={handlePageChange} />
    </>
  )
}