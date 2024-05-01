'use client';
import Image from "next/image";
import Link from "next/link";
import defaultProfileImage from '@/assets/images/profile.png'
import { useSession } from "next-auth/react";
import { useState, useEffect } from 'react';
import Spinner from "@/components/course/spinner";

import { toast } from "react-toastify";

export default async function ProfilePage() {
  const { data: session } = useSession();
  const profileImage = session?.user?.image
  const profileName = session?.user?.name
  const profileEmail = session?.user?.email

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUserProperties = async (userId) => {
      if (!userId) return;

      try {
        const response = await fetch(`/api/properties/user/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setProperties(data);
        }
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    }
    // fetch user properties when session is available 
    if (session) {
      fetchUserProperties(session.user.id);
    }
  }, [session])

  const handleDeleteProperty = (propertyId) => async () => {
    const confirmed = window.confirm('Are you sure you want to delete this property?');
    if (!confirmed) return;
    try {
      const response = await fetch(`/api/properties/${propertyId}`, { method: 'DELETE' });
      console.log(response);
      if (response.status === 200) {
        // remove property from state
        const updatedproperties = properties.filter((property) => property._id !== propertyId);
        setProperties(updatedproperties);
        toast.success('Property deleted successfully');
      } else {
        toast.error('Failed to delete property because of validation');
      }
    }
    catch (error) {
      console.log(error);
      toast.error('Failed to delete property because of error');
    }
  }
  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mx-20 mt-10">
              <div className="mb-4">
                <Image
                  className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                  src={profileImage || defaultProfileImage}
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <h2 className="text-2xl mb-4"><span className="font-bold block">Name: </span> {profileName}</h2>
              <h2 className="text-2xl"><span className="font-bold block">Email: </span> {profileEmail}</h2>
            </div>

            <div className="md:w-3/4 md:pl-4">
              <h2 className="text-xl font-semibold mb-4">Your Listings</h2>
              {!loading && properties.length === 0 && (<p>You have no listings yet</p>)}
              {loading ? <Spinner loading={loading} /> : (
                properties.map((property, index) => (
                  <div className="mb-10" key={property._id}>
                    <Link href={`/properties/${property._id}`}>
                      <Image
                        className="h-32 w-full rounded-md object-cover"
                        src={property.images[0] || defaultProfileImage}
                        alt={`${property.name} image`}
                        width={0}
                        height={0}
                        sizes='100vw'
                        priority={true}
                      />
                    </Link>
                    <div className="mt-2">
                      <p className="text-lg font-semibold">{property.name}</p>
                      <p className="text-gray-600">Address: {`${property.location.street} ${property.location.city} ${property.location.state}`}</p>
                    </div>
                    <div className="mt-2">
                      <Link href={`/properties/${property._id}/edit`}
                        className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={handleDeleteProperty(property._id)}
                        className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}