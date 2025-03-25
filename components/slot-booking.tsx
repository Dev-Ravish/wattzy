"use client";

import type { Station } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BookingSlot from "./slots";

async function fetchStationData(stationId: string) {
  const { data } = await axios.get(`/api/stations?stationId=${stationId}`);
  return data;
}

export default function StationCard({ stationId }: { stationId: string }) {
  const {
    data: stationData,
    isLoading,
    error,
  } = useQuery<Station>({
    queryKey: ["stationData", stationId],
    queryFn: () => fetchStationData(stationId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading station data</div>;
  console.log(stationData)
  return (
    <div>
      {stationData && (
        <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-xl font-semibold">{stationData.name}</h1>
              <p className="text-sm text-gray-500">{stationData.address}</p>
              <p className="text-xs text-gray-500">
                {stationData.isAvailable ? "Available" : "Not Available"}
              </p>
            </div>
          </div>
          <BookingSlot stationId={stationId} />
        </div>
      )}
    </div>
  );
}
