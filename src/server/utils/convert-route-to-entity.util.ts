const mapping: Record<string, string> = {
  destinations: 'destination',
  hotels: 'hotel',
  itineraries: 'itinerary',
  organizations: 'organization',
  quotes: 'quote',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
