import * as yup from 'yup';

export const waiterValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
