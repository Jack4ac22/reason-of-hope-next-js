import connectDb from "@/config/database";
import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // invoked on success of signin
    async signIn({ profile }) {
      // steps:
      // 1. connect to db
      await connectDb();
      // 2. check if user exists
      const userExists = await User.findOne({ email: profile.email });
      // 3. if not, create user
      if (!userExists) {
        // if usename is long use substring to get the first 20 characters
        const username =
          profile.name.length > 20
            ? profile.name.substring(0, 20)
            : profile.name;
        await User.create({
          email: profile.email,
          username: username,
          image: profile.picture,
        });
      }
      // 4. return true if user exists to allow sign in else return false
      return true;
    },
    // modify the sessio
    async session({ session }) {
      // steps:
      // 1. get iser from database
      const user = await User.findOne({ email: session.user.email });
      // console.log("user", user);
      // 2. assign the user id to the session maybe other items to the session as well
      session.user.id = user._id.toString();
      // console.log("session", session);
      // 3. return the session object
      return session;
    },
  },
};
