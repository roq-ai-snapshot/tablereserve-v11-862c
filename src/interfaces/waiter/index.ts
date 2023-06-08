import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';

export interface WaiterInterface {
  id?: string;
  user_id: string;
  organization_id: string;
  created_at?: Date;
  updated_at?: Date;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}
