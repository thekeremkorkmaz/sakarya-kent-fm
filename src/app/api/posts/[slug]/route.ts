import prisma from "@/utils/connect";
import { NextResponse } from "next/server"

interface Params {
  slug: string;
}


export const GET = async (request: Request, { params }: { params: Params } ) => {

  const { slug } = params;


    try { 
      
      const post = await prisma.post.findUnique({
        where: {
          slug
        },
        // eğer relationları da dahil etmek istersen böyle yapcan
        include: {
          user: true
        }
      });

        return new NextResponse(
            JSON.stringify(post), { status: 200 }
        );
    }
    catch (err) {
        console.log(err);
        return new NextResponse(
          JSON.stringify({ message: "Something went wrong!" }),
          { status: 500 }
        );
      }
}