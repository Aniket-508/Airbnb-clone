import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Auth0({
      clientId: "RJwqBJ3vyq8r5blPk6MPs1WkLDfFEQTZ",
      clientSecret: "XC55s93Kdoan-lHSRCK0aTKHGUypEcXVxrcuidobnHSI1y1VqZL0LI1snprD5nM2",
      domain: "dev-hnviggyh.us.auth0.com"
    }),
  ],
  pages: {
    signIn: "/signin",
  },
});