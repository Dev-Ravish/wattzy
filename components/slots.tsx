"use client";

import { useEffect, useState } from "react";
import { format, addMinutes, startOfMinute, isBefore } from "date-fns";

interface Slot {
  label: string;
  start: Date;
  isAvailable: boolean;
}

export default function BookingSlot({stationId}: {stationId: string}) {
  const [slots, setSlots] = useState<Slot[]>([]);

  useEffect(() => {
    const now = new Date();
    const startMinute = startOfMinute(now);
    const currentMinutes = now.getMinutes();

    // If current time is not on a 15-minute boundary, shift to next
    const offset = currentMinutes % 15 === 0 ? 0 : 15 - (currentMinutes % 15);
    const adjustedStart = addMinutes(startMinute, offset);

    const totalSlots = 96;
    const newSlots: Slot[] = [];

    for (let i = 0; i < totalSlots; i++) {
      const slotStart = addMinutes(adjustedStart, i * 15);
      const slotEnd = addMinutes(slotStart, 15);

      newSlots.push({
        label: `${format(slotStart, "H:mm")} - ${format(slotEnd, "H:mm")}`,
        start: slotStart,
        isAvailable: true, // You can add logic to fetch actual availability
      });
    }

    setSlots(newSlots);
  }, []);

  return (
    <div className="p-4">
      <div className="text-green-600 font-semibold text-lg mb-2">20 KW</div>
      <div className="flex flex-wrap gap-2 max-w-5xl">
        {slots.map((slot, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-full shadow text-sm ${
              slot.isAvailable ? "bg-white text-gray-800" : "bg-gray-400 text-white"
            }`}
            onClick={() => {
                alert(`Slot at ${format(slot.start, "H:mm")} selected for station ${stationId}`);
            }}
            
          >
            {slot.label}
          </button>
        ))}
      </div>
    </div>
  );
}