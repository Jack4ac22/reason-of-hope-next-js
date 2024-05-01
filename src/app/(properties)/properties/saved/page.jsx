'use client';
import { useState, useEffect } from "react";
import SinglePropertyCard from '@/components/course/single-property'
import Spinner from "@/components/course/spinner";
import { toast } from 'react-toastify'
export default function SavedPropertyPage() {

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const res = await fetch('/api/bookmarks');
        if (res.ok) {
          const savedProperties = await res.json();
          setProperties(savedProperties);
        } else {
          toast.error('An error occurred while fetching saved properties');
        }

      } catch (error) {
        console.error(error);
        toast.error('An error occurred while fetching saved properties');
      }
      finally {
        setLoading(false);
      }
    }
    fetchSavedProperties();
  }, []);

  if (loading) {
    return <Spinner loading={loading} />
  }
  return (
    <>
      <section className="px-4 py-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Saved Properties</h1>
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
    </>
  )
}