import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useDispatch } from "react-redux"
import { checkAuth, startGoogleLogin } from "../../store/auth/thunks"

const LoginPage = () => {

  const dispatch = useDispatch()

  const { email, password, onInputChange } = useForm({
    email: 'lmdelgallego@gmail.com',
    password: '123456789'
  })

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(checkAuth(email, password))
  }

  const onGoogleLogin = () => {
    dispatch(startGoogleLogin())
  }

  return (
    <AuthLayout title="Login">
        <form onSubmit={onSubmit} >
          <Grid container>
            <Grid item xs={12} sx={{ mb: 2}}>
              <TextField label="Email" type="email" placeholder="mail@company.com"
              name="email" value={email} onChange={onInputChange} fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2}}>
              <TextField label="Password" type="password" placeholder="Password" name="password" value={password} onChange={onInputChange} fullWidth />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={6} >
                <Button type="submit" variant="contained" fullWidth>Login</Button>
              </Grid>
              <Grid item xs={12} sm={6} >
                <Button variant="contained" onClick={onGoogleLogin} fullWidth>
                  <Google/> <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent="end">
              <Link component={RouterLink } color="inherit" to="/auth/register">Register</Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}

export default LoginPage