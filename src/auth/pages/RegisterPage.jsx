import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
  email: 'lmdelgallego@google.com',
  password: '123456789',
  displayName: 'Luis Del Gallego',
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
  const { displayName, email, password, displayNameValid, onInputChange, formState } = useForm(formData, formValidations);

  console.log(displayNameValid);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
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
              error={displayNameValid}
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
