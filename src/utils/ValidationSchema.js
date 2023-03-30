import * as Yup from 'yup';

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().required(),
});
