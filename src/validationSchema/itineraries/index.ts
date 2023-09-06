import * as yup from 'yup';

export const itineraryValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  total_days: yup.number().integer().required(),
  total_pax: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  destination_id: yup.string().nullable().required(),
});
