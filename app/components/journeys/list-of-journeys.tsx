export interface Journey {
  id: number;
  userId: number;
  title: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  colour?: string;
}

export interface JournalEntry {
  id: number;
  journeyId: number;
  date: Date;
  title?: string;
  text?: string;
  latitude: number;
  longitude: number;
  photos?: string[];
}

export const mockJourneys: Journey[] = [
  {
    id: 1,
    userId: 1,
    title: "cycling Thailand",
    description: "Mai Hong Son Loop",
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-03-30"),
    colour: "red",
  },
];

export const mockJournalEntry1: JournalEntry[] = [
  {
    id: 1,
    journeyId: 1,
    date: new Date("2025-02-01"),
    title: "Day 1 in Thailand, leaving Bangkok",
    text: "Today we left the Flapping Ducks hostel and headed North, without any real plan",
    latitude: 14.3424,
    longitude: 100.5526,
  },
  {
    id: 2,
    journeyId: 1,
    date: new Date("2025-02-02"),
    title: "Day 2 in Thailand, finding a beaut campsite",
    text: "A campsite with many happy locals and a swimming pool, what more could we want. And all for £4",
    latitude: 14.76941,
    longitude: 100.385388,
  },
];
