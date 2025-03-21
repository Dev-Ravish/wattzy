import { use } from "react";
import SlotBooking from "@/components/slot-booking";

export default function Page({ params }: { params: Promise<{ stationId: string }> }) {
  const { stationId } = use(params); // Unwrap params

  return (
    <div>
      {stationId ? (
        <SlotBooking stationId={stationId} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
