import { ItineraryInterface } from 'interfaces/itinerary';
import { GetQueryInterface } from 'interfaces';

export interface QuoteInterface {
  id?: string;
  total_price: number;
  itinerary_id: string;
  created_at?: any;
  updated_at?: any;

  itinerary?: ItineraryInterface;
  _count?: {};
}

export interface QuoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  itinerary_id?: string;
}
