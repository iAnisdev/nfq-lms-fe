import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  callbacks: {
    // @ts-ignore
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@nfq.com")
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
    // @ts-ignore
    session({ session, token, user }) {
      return session // The return type will match the one returned in `useSession()`
    },
  }
};


// @ts-ignore
export default NextAuth(authOptions)