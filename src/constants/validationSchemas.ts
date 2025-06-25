import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().min(4),
  email: yup.string().email(),
  password: yup.string().min(6),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().min(6),
});
