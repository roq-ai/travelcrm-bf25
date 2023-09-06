import * as yup from 'yup';

export const quoteValidationSchema = yup.object().shape({
  total_price: yup.number().integer().required(),
  itinerary_id: yup.string().nullable().required(),
});
