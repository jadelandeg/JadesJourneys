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
  title: string;
  text?: string;
  latitude: number;
  longitude: number;
  photos?: string[];
}

export interface Route {
  journeyId: number;
  colour?: string;
  title: string[];
  markers: [number, number][];
}

export const mockJourneys: Journey[] = [
  {
    id: 2,
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
    journeyId: 2,
    date: new Date("2025-01-31"),
    title: "Day 1 in Thailand, Flapping Ducks hostel",
    text: "Cheap hostel right in the centre of Bangkok",
    latitude: 13.76459,
    longitude: 100.49607,
  },
  {
    id: 2,
    journeyId: 2,
    date: new Date("2025-02-01"),
    title: "Day 2 in Thailand, leaving Bangkok",
    text: "Today we left the Flapping Ducks hostel and headed North, without any real plan",
    latitude: 14.3424,
    longitude: 100.5526,
  },
  {
    id: 3,
    journeyId: 2,
    date: new Date("2025-02-02"),
    title: "Day 2 in Thailand, finding a beautiful campsite",
    text: "A campsite with many happy locals and a swimming pool, what more could we want. And all for £4",
    latitude: 14.76941,
    longitude: 100.385388,
  },
];

function buildRoute(
  journeys: Journey[],
  journalEntries: JournalEntry[]
): Route[] {
  const routeBuilt: Route[] = [];

  journalEntries.forEach((journal, index) => {
    let journalIdFound = routeBuilt.find(
      (r) => r.journeyId === journal.journeyId
    );

    if (!journalIdFound) {
      const journey = journeys.find((j) => j.id === journal.journeyId);
      if (journey) {
        journalIdFound = {
          journeyId: journey.id,
          colour: journey.colour ?? "blue",
          title: [journal.title],
          markers: [[journal.latitude, journal.longitude]],
        };
        routeBuilt.push(journalIdFound);
      }
    } else {
      journalIdFound.markers.push([journal.latitude, journal.longitude]);
      journalIdFound.title.push(journal.title);
    }
  });

  console.log(routeBuilt);
  return routeBuilt;
}

export const route = buildRoute(mockJourneys, mockJournalEntry1);
