import GitHubProvider from "next-auth/providers/github";
import GooglePrivder from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter"
import  prisma  from "@/utils/connect";
import { getServerSession } from "next-auth";

const options = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    GooglePrivder({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    })
  ],
  pages: {
    signIn: '/login',
  }
};

// auth bilgilerini almak için kullanılır.
export const getAuthSession = () => getServerSession(options);

export default options;
