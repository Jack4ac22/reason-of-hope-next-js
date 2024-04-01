import connectDb from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/util/get-session-user";

export const dynamic = "force-dynamic"; // force dynamic to resolve to a dynamic route and deployment failure.

export const POST = async (req, res) => {
  try {
    await connectDb();
    const { propertyId } = await req.json();
    const sessionUser = await getSessionUser();
    // session or sessionUser??
    if (!sessionUser.userId || !sessionUser) {
      return new Response("Unauthorized", { status: 401 });
    }
    const { userId } = sessionUser;
    // fetch the user from the database
    const user = await User.findOne({ _id: userId });

    //  check if user already bookmarked the property
    let alreadyBookmarked = user.bookmarks.includes(propertyId);

    return new Response(JSON.stringify({ alreadyBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
