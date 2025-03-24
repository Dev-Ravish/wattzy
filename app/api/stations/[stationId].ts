import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { stationId } = req.query;
  
    if (typeof stationId !== 'string') {
      return res.status(400).json({ error: 'Invalid stationId' });
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
        return res.status(404).json({ error: 'Station not found' });
      }
  
      res.status(200).json(station);
    } catch (error:any) {
      res.status(500).json({ error: error?.message || 'Internal server error' });
    }
  }