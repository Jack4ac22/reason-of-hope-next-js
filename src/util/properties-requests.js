const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// fetch all properties
async function fetchProperties() {
  try {
    // hanndle if domain is not available yet for deployment
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`, { Cache: "no-store" });
    if (!res.ok) {
      throw new Error("Faild to fetch the data from the database");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// fetch single property by id
async function fetchSingleProperty(id) {
  try {
    // hanndle if domain is not available yet for deployment
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);
    if (!res.ok) {
      throw new Error("Faild to fetch the data from the database");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
export { fetchProperties, fetchSingleProperty };
