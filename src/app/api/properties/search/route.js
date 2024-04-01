import connectDb from "@/config/database";
import Property from "@/models/Property";

// GET /api/property/search
export const GET = async (request) => {
  try {
    await connectDb();
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get("searchQuery");
    const searchType = searchParams.get("searchType");
    const searchPattern = new RegExp(searchQuery, "i");
    let query = {
      $or: [
        { name: searchPattern },
        { description: searchPattern },
        { type: searchPattern },
        { "location.street": searchPattern },
        { "location.city": searchPattern },
        { "location.state": searchPattern },
      ],
    };
    // check for property type if it is not all
    if (searchType && searchType !== "All") {
      const typePattern = new RegExp(searchType, "i");
      query.type = typePattern;
    }
    const properties = await Property.find(query);
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "An error occurred." }), {
      status: 500,
    });
  }
};
