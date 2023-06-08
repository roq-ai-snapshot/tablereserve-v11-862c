import { ReservationInterface } from 'interfaces/reservation';

export interface PreferenceInterface {
  id?: string;
  description: string;
  reservation_id: string;
  created_at?: Date;
  updated_at?: Date;

  reservation?: ReservationInterface;
  _count?: {};
}
