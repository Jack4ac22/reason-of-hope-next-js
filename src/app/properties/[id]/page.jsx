'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchSingleProperty } from '@/util/properties-requests'
import Link from "next/link";
import { FaArrowLeft } from 'react-icons/fa'
import PropertyHeaderImage from '@/components/course/property-header-image'
import PropertyDetails from '@/components/course/property-details'
import Spinner from '@/components/course/spinner'
import PropertyImagesComponent from '@/components/course/property-images'
import BookmarkButton from '@/components/course/bookmark-button'
import ShareButtons from '@/components/course/share-buttons'
import ContactForm from '@/components/course/contact-form'

export default async function PropertiesPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      // console.log("Fetching property data");
      if (!id) {
        return;
      }

      try {
        const property = await fetchSingleProperty(id);
        setProperty(property);
        // console.log("Property fetched:", property);
      } catch (error) {
        // console.log("Error while fetching peroperty:", error);
      } finally {
        setLoading(false);

      }
    }
    if (!property) {
      fetchPropertyData();
      // console.log("Fetching property data -1 ");
    }
  }, [id], property);
  return (
    <>

      {loading && <Spinner loading={loading} />}
      {!property && !loading && <h1 className="text-center text-2xl font-bold">Property not found</h1>}
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                <FaArrowLeft className="mr-2" /> Back to Properties
              </Link>
            </div>
          </section>
          <section className="bg-blue-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <PropertyDetails property={property} />
                {/* <!-- Sidebar --> */}
                <aside className="space-y-4">
                  <BookmarkButton property={property} />
                  <ShareButtons property={property} />
                  <ContactForm property={property} />
                </aside>
              </div>
            </div >
          </section >
          <PropertyImagesComponent images={property.images} />

        </>
      )
      }
    </>
  )
}