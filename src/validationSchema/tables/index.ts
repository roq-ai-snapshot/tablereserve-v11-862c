import * as yup from 'yup';
import { reservationValidationSchema } from 'validationSchema/reservations';

export const tableValidationSchema = yup.object().shape({
  capacity: yup.number().integer().required(),
  layout: yup.string(),
  restaurant_id: yup.string().nullable().required(),
  reservation: yup.array().of(reservationValidationSchema),
});
