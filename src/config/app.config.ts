interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Travel Planner', 'IT Administrator', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'TravelCRM',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Input travel requirements',
    'View generated itinerary',
    'Edit generated itinerary',
    'View travel quote',
  ],
  ownerAbilities: [
    'Manage travel destinations',
    'Manage details of hotels, houseboats, vehicles, sightseeing, guides',
    'Create and edit travel itineraries',
    'Manage user profiles of staff members',
  ],
};
