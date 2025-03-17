export interface TimeSlot {
    label: string;
    isAvailable: boolean;
  }
  
  export interface ChargingOption {
    capacity: string;
    timeSlots: TimeSlot[];
  }
  
  export interface StationData {
    stationId: string;
    name: string;
    address: string;
    openingHours: string;
    chargingOptions: ChargingOption[];
  }
  
  export const stationsData: StationData[] = [{
    stationId: "1",
    name: "Ravish EV chargio",
    address: "Jamuna Hostel, IIT madraa",
    openingHours: "Open 6 AM - 8:30 PM",
    chargingOptions: [
      {
        capacity: "20 KW",
        timeSlots: [
          { label: "6 - 6:30", isAvailable: true },
          { label: "6:30 - 7", isAvailable: true },
          { label: "7 - 7:30", isAvailable: false },
          { label: "7:30 - 8", isAvailable: true },
          { label: "8 - 8:30", isAvailable: false },
          { label: "8:30 - 9", isAvailable: true },
        ],
      },
      {
        capacity: "120 KW",
        timeSlots: [
          { label: "6 - 6:30", isAvailable: false },
          { label: "6:30 - 7", isAvailable: true },
          { label: "7 - 7:30", isAvailable: true },
          { label: "7:30 - 8", isAvailable: false },
          { label: "8 - 8:30", isAvailable: true },
        ],
      },
      {
        capacity: "150 KW",
        timeSlots: [
          { label: "6 - 6:30", isAvailable: true },
          { label: "6:30 - 7", isAvailable: true },
          { label: "7 - 7:30", isAvailable: true },
          { label: "7:30 - 8", isAvailable: false },
          { label: "8 - 8:30", isAvailable: true },
        ],
      },
    ],
  },

  {stationId: "2",
    name: "Shishir EV chargio",
    address: "Himalaya Lawn, IIT madraa",
    openingHours: "Open 6 AM - 8:30 PM",
    chargingOptions: [
      {
        capacity: "20 KW",
        timeSlots: [
          { label: "6 - 6:30", isAvailable: true },
          { label: "6:30 - 7", isAvailable: true },
          { label: "7 - 7:30", isAvailable: false },
          { label: "7:30 - 8", isAvailable: true },
          { label: "8 - 8:30", isAvailable: false },
          { label: "8:30 - 9", isAvailable: true },
        ],
      },
      {
        capacity: "120 KW",
        timeSlots: [
          { label: "6 - 6:30", isAvailable: false },
          { label: "6:30 - 7", isAvailable: true },
          { label: "7 - 7:30", isAvailable: true },
          { label: "7:30 - 8", isAvailable: false },
          { label: "8 - 8:30", isAvailable: true },
        ],
      },
      {
        capacity: "150 KW",
        timeSlots: [
          { label: "6 - 6:30", isAvailable: true },
          { label: "6:30 - 7", isAvailable: true },
          { label: "7 - 7:30", isAvailable: true },
          { label: "7:30 - 8", isAvailable: false },
          { label: "8 - 8:30", isAvailable: true },
        ],
      },
    ],
  },
  {
    stationId: "3",
    name: "Deeptansh EV chargio",
    address: "Himalaya Lawn, IIT madraa",
    openingHours: "Open 6 AM - 8:30 PM",
    chargingOptions: [
      {
        capacity: "20 KW",
        timeSlots: [
          { label: "6 - 6:30", isAvailable: true },
          { label: "6:30 - 7", isAvailable: true },
          { label: "7 - 7:30", isAvailable: false },
          { label: "7:30 - 8", isAvailable: true },
          { label: "8 - 8:30", isAvailable: false },
          { label: "8:30 - 9", isAvailable: true },
        ],
      },
      {
        capacity: "120 KW",
        timeSlots: [
          { label: "6 - 6:30", isAvailable: false },
          { label: "6:30 - 7", isAvailable: true },
          { label: "7 - 7:30", isAvailable: true },
          { label: "7:30 - 8", isAvailable: false },
          { label: "8 - 8:30", isAvailable: true },
        ],
      },
      {
        capacity: "150 KW",
        timeSlots: [
          { label: "6 - 6:30", isAvailable: true },
          { label: "6:30 - 7", isAvailable: true },
          { label: "7 - 7:30", isAvailable: true },
          { label: "7:30 - 8", isAvailable: false },
          { label: "8 - 8:30", isAvailable: true },
        ],
      },
    ],
  },
  {
    stationId: "4",
    name: "Ather EV chargio",
    address: "Research Lawn, IIT madraa",
    openingHours: "Open 6 AM - 8:30 PM",
    chargingOptions: [
      {
        capacity: "20 KW",
        timeSlots: [
          { label: "6 - 6:30", isAvailable: true },
          { label: "6:30 - 7", isAvailable: true },
          { label: "7 - 7:30", isAvailable: false },
          { label: "7:30 - 8", isAvailable: true },
          { label: "8 - 8:30", isAvailable: false },
          { label: "8:30 - 9", isAvailable: true },
        ],
      },
      {
        capacity: "120 KW",
        timeSlots: [
          { label: "6 - 6:30", isAvailable: false },
          { label: "6:30 - 7", isAvailable: true },
          { label: "7 - 7:30", isAvailable: true },
          { label: "7:30 - 8", isAvailable: false },
          { label: "8 - 8:30", isAvailable: true },
        ],
      },
      {
        capacity: "150 KW",
        timeSlots: [
          { label: "6 - 6:30", isAvailable: true },
          { label: "6:30 - 7", isAvailable: true },
          { label: "7 - 7:30", isAvailable: true },
          { label: "7:30 - 8", isAvailable: false },
          { label: "8 - 8:30", isAvailable: true },
        ],
      },
    ],
  },
];
  