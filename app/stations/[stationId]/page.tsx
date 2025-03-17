import SlotBooking from "@/components/slot-booking";

export default function Page({ params }: { params: { stationId: string } }) {
  return (
    <div>
      <SlotBooking stationId={params.stationId}      />
    </div>
  );
}
