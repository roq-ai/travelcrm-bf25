import * as yup from 'yup';

export const hotelValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  location: yup.string().required(),
  rating: yup.number().integer().nullable(),
  organization_id: yup.string().nullable().required(),
});
