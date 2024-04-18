import connectDb from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/util/get-session-user";

export const dynamic = "force-dynamic";

// GET /api/messages
export const GET = async (req) => {
  try {
    await connectDb();
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.user) {
      return new Response(
        JSON.stringify({
          message: "Access denied.",
        }),
        { status: 401 }
      );
    }
    const { userId } = sessionUser;
    const unreadMessages = await Message.find({
      recipient: userId,
      read: false,
    })
      .sort({ createdAt: -1 })
      .populate("sender", "username email")
      .populate("property", "name");
    const readMessages = await Message.find({ recipient: userId, read: true })
      .sort({ createdAt: -1 })
      .populate("sender", "username email")
      .populate("property", "name");
    const messages = [...unreadMessages, ...readMessages];

    return new Response(JSON.stringify(messages), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};

// POST /api/messages
export const POST = async (req) => {
  try {
    await connectDb();
    const { name, email, phone, message, property, recipient } =
      await req.json();
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.user) {
      return new Response(
        JSON.stringify({
          message: "Access denied. Please sign in to send messages.",
        }),
        { status: 401 }
      );
    }
    const { user } = sessionUser;
    // can not set message to self as recipient
    if (user.id === recipient) {
      return new Response(
        JSON.stringify({ message: "Unable to send a message to yourself." }),
        { status: 400 }
      );
    }
    const newMessage = new Message({
      sender: user.id,
      recipient,
      property,
      name,
      email,
      phone,
      body: message,
    });
    await newMessage.save();
    return new Response(
      JSON.stringify({ message: "Message sent succesfully" }, newMessage),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};
