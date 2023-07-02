import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must be less than 50 characters')
    .required('Password is required'),
});

export const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Name must be at least 4 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email')
    .required('Email is required'),
  phone: Yup.string()
    .min(7, 'Phone number must be at least 7 digits')
    .max(10, 'Phone number must be less than 10 digits')
    .required('Phone number is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must be less than 50 characters')
    .required('Password is required'),
});

export const addProjectSchema = Yup.object().shape({
  title: Yup.string().min(3).max(250).required(),
  description: Yup.string().min(10).max(600).required(),
});
