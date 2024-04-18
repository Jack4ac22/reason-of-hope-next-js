import connectDb from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/util/get-session-user";

export const dynamic = "force-dynamic";

// PUT /api/messages/:id
export const PUT = async (request, { params }) => {
  try {
    connectDb();
    const { id } = params;
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.user) {
      return new Response(
        JSON.stringify({
          message: "Access denied. Please sign in to send messages.",
        }),
        { status: 401 }
      );
    }
    const message = await Message.findById(id);
    if (!message) {
      return new Response(JSON.stringify({ message: "Message not found." }), {
        status: 404,
      });
    }
    // verify ownership of the message
    if (message.recipient.toString() !== sessionUser.userId) {
      return new Response(JSON.stringify({ message: "Access denied." }), {
        status: 401,
      });
    }
    // update the message to read or unread
    message.read = !message.read;
    await message.save();
    return new Response(JSON.stringify(message), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};

// DELETE /api/messages/:id
export const DELETE = async (request, { params }) => {
  try {
    connectDb();
    const { id } = params;
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.user) {
      return new Response(
        JSON.stringify({
          message: "Access denied.",
        }),
        { status: 401 }
      );
    }
    const message = await Message.findById(id);
    if (!message) {
      return new Response(JSON.stringify({ message: "Message not found." }), {
        status: 404,
      });
    }
    // verify ownership of the message
    if (message.recipient.toString() !== sessionUser.userId) {
      return new Response(JSON.stringify({ message: "Access denied." }), {
        status: 401,
      });
    }
    await message.deleteOne();
    return new Response(JSON.stringify({ message: "Message deleted." }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};
