import { ItineraryInterface } from 'interfaces/itinerary';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface DestinationInterface {
  id?: string;
  name: string;
  description?: string;
  location: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  itinerary?: ItineraryInterface[];
  organization?: OrganizationInterface;
  _count?: {
    itinerary?: number;
  };
}

export interface DestinationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  location?: string;
  organization_id?: string;
}
