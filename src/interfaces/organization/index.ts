import { RestaurantInterface } from 'interfaces/restaurant';
import { WaiterInterface } from 'interfaces/waiter';
import { UserInterface } from 'interfaces/user';

export interface OrganizationInterface {
  id?: string;
  name: string;
  owner_id: string;
  created_at?: Date;
  updated_at?: Date;
  restaurant?: RestaurantInterface[];
  waiter?: WaiterInterface[];
  user?: UserInterface;
  _count?: {
    restaurant?: number;
    waiter?: number;
  };
}
