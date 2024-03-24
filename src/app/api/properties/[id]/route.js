import Property from "@/models/Property";
import connectDb from "@/config/database";
// GET /api/properties
// return all properties

export const GET = async (request, { params }) => {
  try {
    await connectDb();

    const property = await Property.findById(params.id);

    if (!property) {
      return new Response({ message: "Property not found" }, { status: 404 });
    }

    // console.log(properties)
    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("something went wrong", { status: 500 });
  }
};
