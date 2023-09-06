import { QuoteInterface } from 'interfaces/quote';
import { UserInterface } from 'interfaces/user';
import { DestinationInterface } from 'interfaces/destination';
import { GetQueryInterface } from 'interfaces';

export interface ItineraryInterface {
  id?: string;
  start_date: any;
  end_date: any;
  total_days: number;
  total_pax: number;
  user_id: string;
  destination_id: string;
  created_at?: any;
  updated_at?: any;
  quote?: QuoteInterface[];
  user?: UserInterface;
  destination?: DestinationInterface;
  _count?: {
    quote?: number;
  };
}

export interface ItineraryGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  destination_id?: string;
}
