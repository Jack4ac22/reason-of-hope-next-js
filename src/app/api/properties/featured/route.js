import Property from "@/models/Property";
import connectDb from "@/config/database";

// GET /api/properties/featured
// return all featured properties
export const GET = async () => {
  try {
    await connectDb();
    const properties = await Property.find({ is_featured: true });
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("something went wrong", { status: 500 });
  }
};
