import connectDb from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/util/get-session-user";

export const dynamic = "force-dynamic";

// GET /api/messages/unread-count
export const GET = async (request) => {
  try {
    connectDb();
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.user) {
      return new Response(
        JSON.stringify({
          message: "Access denied. Please sign in to send messages.",
        }),
        { status: 401 }
      );
    }
    const { userId } = sessionUser;
    const unreadMessagesCount = await Message.countDocuments({
      recipient: userId,
      read: false,
    });

    return new Response(JSON.stringify({ count: unreadMessagesCount }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};
