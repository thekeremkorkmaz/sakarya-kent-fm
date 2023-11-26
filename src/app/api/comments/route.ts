import prisma from "@/utils/connect";
import { NextResponse } from "next/server"
import { getAuthSession } from "../auth/[...nextauth]/options";

interface Params {
  slug: string;
}

// GET ALL COMMENTS OF A POST

export const GET = async (request: Request) => {

  const { searchParams } = new URL(request.url);
  const postSlug = searchParams.get("postSlug");


  try {

    const commnets = await prisma.commnet.findMany({
      where: {
        ...(postSlug && { postSlug })
      },
      // eğer relationları da dahil etmek istersen böyle yapcan
      include: {
        user: true
      }
    });

    return new NextResponse(
      JSON.stringify(commnets), { status: 200 }
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


// POST A COMMENT OF A POST

export const POST = async (request: Request) => {
  try {
    const session = await getAuthSession();

    if (!session || !session.user) {
      return new NextResponse(
        JSON.stringify({ message: "You are not authorized!" }),
        { status: 401 }
      );
    }

    const body = await request.json();
    const comment = await prisma.commnet.create({
      data: {
        ...body,
        userEmail: session.user.email,
      },
    });

    return new NextResponse(
      JSON.stringify(comment),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
