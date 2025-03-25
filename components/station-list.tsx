import Link from "next/link";
import type { Station, User } from "@prisma/client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function getStationsData(){
      const response = await axios.get("/api/allStations");
      return response.data;
}

interface StationListProps extends Station {
  owner: User
}
export default function StationList() {

  const { data: stations, isLoading, error } = 
  useQuery<StationListProps[]> ( {
    queryKey: ["stations"], 
    queryFn: () => getStationsData(),
  });
  console.log(stations);
  if(isLoading){
    return <div>Loading...</div>
  }
  if (error){
    return <div>Error loading station data</div>
  }
  return (
    <div>
      <h1 className="font-bold">Nearby Charging Stations</h1>
      <div>
        { stations && stations.map((station) => (
          <Link key={station.id} href={`/stations/${station.id}`}>
          <div key={station.id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <h2>{station.name}</h2>
            <p>{station.address}</p>
            <p>{station.ownerId}</p>
            <p>{station.isAvailable} km away</p>
            <p>{station.owner.name}</p>
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
