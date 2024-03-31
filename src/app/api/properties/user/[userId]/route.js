import Property from "@/models/Property";
import connectDb from "@/config/database";

// GET /api/properties/iser/:userId
// return all user' properties
export const GET = async (request, { params }) => {
  try {
    await connectDb();

    const userId = params.userId;

    // check if userId is an object id
    if (!/^[0-9a-fA-F]{24}$/.test(userId)) {
      return new Response("Invalid User ID", { status: 400 });
    }

    if (!userId) {
      return new Response("User ID is required", { status: 400 });
    }
    const properties = await Property.find({ owner: userId });
    // console.log(properties)
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("something went wrong", { status: 500 });
  }
};
