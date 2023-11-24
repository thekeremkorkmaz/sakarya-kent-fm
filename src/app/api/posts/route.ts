import prisma from "@/utils/connect";
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {

  const {searchParams} = new URL(request.url);

  const page = searchParams.get('page');
  const cat = searchParams.get('cat');

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: (Number(page) - 1) * POST_PER_PAGE,
    where: {
      ...(cat && { catSlug: cat }),
    }
  }

    try { 
        const [posts, count] = await prisma.$transaction([
          prisma.post.findMany(query),
          prisma.post.count({
            where: query.where
          })
        ])
        return new NextResponse(
            JSON.stringify({ posts, count }), { status: 200 }
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