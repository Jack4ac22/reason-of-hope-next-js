'use client';
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { FaBookmark } from "react-icons/fa";


export default function BookmarkButton({ property }) {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    };
    const checkIfBookmarked = async () => {
      try {
        const res = await fetch('/api/bookmarks/check', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ propertyId: property._id })
        });
        if (res.ok) {
          const { alreadyBookmarked } = await res.json();
          setIsBookmarked(alreadyBookmarked);
        }
      } catch (error) {
        console.error(error);
        toast.error('An error occurred while bookmarking the property');
      } finally {
        setLoading(false);
      }
    };
    checkIfBookmarked();
  }, [userId, property._id]);
  const handleClick = async () => {
    if (!userId) {
      toast.error('Please sign in to bookmark properties');
      return;
    }
    try {
      const res = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ propertyId: property._id })
      });
      if (res.ok) {
        const { message, alreadyBookmarked } = await res.json();
        toast.success(message);
        setIsBookmarked(alreadyBookmarked);
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while bookmarking the property');
    }
  }

  if (loading) {
    return (<button
      className="bg-gray-400 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
      <FaBookmark className="mr-2" /> Loading...
    </button>)
  }
  return (
    isBookmarked ? (<button
      className="bg-red-400 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center" onClick={handleClick}>
      <FaBookmark className="mr-2" /> Remove Bookmark
    </button>) : (
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center" onClick={handleClick}>
        <FaBookmark className="mr-2" /> Add Bookmark
      </button>
    ))
}