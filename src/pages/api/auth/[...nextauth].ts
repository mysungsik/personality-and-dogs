import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions ={
  
}

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    }),
  ],
  secret: String(process.env.SECRET),
});
