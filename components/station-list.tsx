import Link from "next/link";
import {stations} from "@/lib/data";

export default function StationList() {
  return (
    <div>
      <h1 className="font-bold">Nearby Charging Stations</h1>
      <div>
        {stations.map((station) => (
          <Link key={station.id} href={`/stations/${station.id}`}>
          <div key={station.id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <h2>{station.name}</h2>
            <p>{station.location}</p>
            <p>{station.distance} km away</p>
          </div>
          </Link>
        ))}
      </div>
      <div>
        <h1 className="font-bold">Your EV Vehicle</h1>
        <div>
          <p>Model: Tesla Model S</p>
          <p>Range: 500 km</p>
          <p>Current battery:
            <progress value="50" max="100"></progress>
          </p>
        </div>
      </div>
    </div>
  );
}
