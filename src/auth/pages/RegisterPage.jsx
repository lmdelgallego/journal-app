import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startCreateUser } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: '',
};

const formValidations = {
  email: [ (value) => value.includes('@'), 'Please enter a valid email address' ],
  password: [ (value) => value.length >= 6, 'Password must be at least 6 characters long' ],
  displayName: [ (value) => value.length >= 1, 'Name is required' ],
}

// const formValidations = {
//   email: {
//     required: true,
//     pattern: /^\S+@\S+$/i,
//     message: 'Please enter a valid email address',
//   },
//   password: {
//     required: true,
//     minLength: 6,
//     message; 'Password must be at least 6 characters long',
//   },
//   displayName: {
//     required: true,
//     minLength: 6,
//     message; 'Name is required',
//   },
// }

const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { displayName, email, password, displayNameValid, emailValid, passwordValid, isFormValid, onInputChange, formState } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreateUser(formState))
  };

  return (
    <AuthLayout title='Register'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label='Full name'
              type='text'
              placeholder='John Dow'
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label='Email'
              type='email'
              placeholder='mail@company.com'
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid&& formSubmitted}
              helperText={emailValid}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label='Password'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid&& formSubmitted}
              helperText={passwordValid}
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button type='submit' variant='contained' fullWidth>
                Sign Up
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
