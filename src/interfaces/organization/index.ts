import { DestinationInterface } from 'interfaces/destination';
import { HotelInterface } from 'interfaces/hotel';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  destination?: DestinationInterface[];
  hotel?: HotelInterface[];
  user?: UserInterface;
  _count?: {
    destination?: number;
    hotel?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
