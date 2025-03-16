import SlotBooking from "@/components/slot-booking";

export default function Page({ params }: { params: { stationId: string } }) {
  return (
    <div>
      <SlotBooking />
      {params.stationId}
    </div>
  );
}
