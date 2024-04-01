import connectDb from "@/config/database";
import User from "@/models/User";
import Property from "@/models/Property";
import { getSessionUser } from "@/util/get-session-user";

export const dynamic = "force-dynamic"; // force dynamic to resolve to a dynamic route and deployment failure.

// Get /api/bookmarks

export const GET = async () => {
  try {
    await connectDb();
    const sessionUser = await getSessionUser();
    if (!sessionUser.userId || !sessionUser) {
      return new Response("Unauthorized", { status: 401 });
    }
    const { userId } = sessionUser;
    const user = await User.findOne({ _id: userId });
    // console.log(user);
    const bookmarks = await Property.find({ _id: { $in: user.bookmarks } });
    // console.log(bookmarks);
    return new Response(JSON.stringify(bookmarks), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

// POST /api/bookmarks
// Body { propertyId: string }
// Response { message: string, alreadyBookmarked: boolean }
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
    let message;

    if (alreadyBookmarked) {
      user.bookmarks.pull(propertyId);
      message = "Property removed from bookmarks";
      alreadyBookmarked = false;
    } else {
      user.bookmarks.push(propertyId);
      message = "Property added to bookmarks";
      alreadyBookmarked = true;
    }
    await user.save();
    return new Response(JSON.stringify({ message, alreadyBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
