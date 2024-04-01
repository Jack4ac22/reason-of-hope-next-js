'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PropertySearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("All");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "" && searchType === "All") {
      router.push("/properties-home");
    } else {
      const query = `?searchQuery=${searchQuery ?? ''}&searchType=${searchType ?? 'All'}`;
      router.push(`/properties/search-results${query}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center"

    >
      <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
        <label htmlFor="Translation" className="sr-only">Translation</label>
        <input
          type="text"
          id="Translation"
          placeholder="Enter your .... "
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="w-full md:w-2/5 md:pl-2">
        <label htmlFor="property-type" className="sr-only">Property Type</label>
        <select
          id="property-type"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Quiz">Quiz</option>
          <option value="People">People</option>
          <option value="Places">Places</option>
          <option value="events">events</option>
          <option value="Systematic Theology">Systematic Theology</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  )
}

