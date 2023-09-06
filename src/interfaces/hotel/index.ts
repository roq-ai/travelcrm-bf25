import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface HotelInterface {
  id?: string;
  name: string;
  description?: string;
  location: string;
  rating?: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface HotelGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  location?: string;
  organization_id?: string;
}
