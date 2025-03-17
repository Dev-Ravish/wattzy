"use client";

import { stationsData } from "@/lib/station-data";

export default function StationCard({ stationId }: { stationId: string }) {
  const stationData = stationsData.find(
    (station) => station.stationId === stationId
  );
  return (
    <div>
      {stationData && (
        <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-xl font-semibold">{stationData.name}</h1>
              <p className="text-sm text-gray-500">{stationData.address}</p>
              <p className="text-xs text-gray-500">
                {stationData.openingHours}
              </p>
            </div>
          </div>

          {stationData.chargingOptions.map((option, idx) => (
            <div key={idx} className="mt-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  <span className="text-xs">⚡</span>
                </div>
                <span className="text-sm font-medium">{option.capacity}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {option.timeSlots.map((slot, index) => (
                  <div
                    key={index}
                    className={`px-2 py-1 rounded text-xs ${
                      slot.isAvailable
                        ? "bg-gray-200 text-gray-700"
                        : "bg-gray-400 text-white"
                    }`}
                  >
                    {slot.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
