const stations = [
  {
    id: 1,
    name: "Station 1",
    location: "Location 1",
    distance: 1.2,
    status: "Available",
  },
  {
    id: 2,
    name: "Station 2",
    location: "Location 2",
    distance: 2.3,
    status: "Available",
  },
  {
    id: 3,
    name: "Station 3",
    location: "Location 3",
    distance: 3.4,
    status: "Unavailable",
  },
  {
    id: 4,
    name: "Station 4",
    location: "Location 4",
    distance: 4.5,
    status: "Available",
  },
];

export default function StationList() {
  return (
    <div>
      <h1>Nearby Charging Stations</h1>
      <div>
        {stations.map((station) => (
          <div key={station.id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <h2>{station.name}</h2>
            <p>{station.location}</p>
            <p>{station.distance} km away</p>
            <p>Status: {station.status}</p>
          </div>
        ))}
      </div>
      <div>
        <h1>Your EV Vehicle</h1>
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
