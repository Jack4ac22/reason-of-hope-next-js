import Property from "@/models/Property";
import connectDb from "@/config/database";
// GET /api/properties
// return all properties

export const GET = async (request) => {
  try {
    await connectDb();
    const properties = await Property.find({});
    // console.log(properties)
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('something went wrong', { status: 500 });
  }
};
