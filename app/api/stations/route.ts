import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const stationId = searchParams.get("stationId");

  if (!stationId) {
    return NextResponse.json({ error: "Invalid or missing stationId" }, { status: 400 });
  }

  try {
    const station = await prisma.station.findUnique({
      where: { id: stationId },
      include: {
        owner: true,
        bookings: true,
      },
    });

    if (!station) {
      return NextResponse.json({ error: "Station not found" }, { status: 404 });
    }

    return NextResponse.json(station, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || "Internal server error" }, { status: 500 });
  }
}

