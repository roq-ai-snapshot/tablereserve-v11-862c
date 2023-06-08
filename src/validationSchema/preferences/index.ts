import * as yup from 'yup';

export const preferenceValidationSchema = yup.object().shape({
  description: yup.string().required(),
  reservation_id: yup.string().nullable().required(),
});
