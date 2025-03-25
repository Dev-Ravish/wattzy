import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  try {
    const station = await prisma.station.findMany({
      include: {
        owner: true,
      },
    });

    if (!station) {
      return NextResponse.json({ error: "No Stations Available" }, { status: 404 });
    }

    return NextResponse.json(station, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || "Internal server error" }, { status: 500 });
  }
}

