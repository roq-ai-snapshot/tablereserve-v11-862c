import * as yup from 'yup';
import { restaurantValidationSchema } from 'validationSchema/restaurants';
import { waiterValidationSchema } from 'validationSchema/waiters';

export const organizationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  owner_id: yup.string().nullable().required(),
  restaurant: yup.array().of(restaurantValidationSchema),
  waiter: yup.array().of(waiterValidationSchema),
});
