import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
        <form action="">
          <Grid container>
            <Grid item xs={12} sx={{ mb: 2}}>
              <TextField label="Email" type="email" placeholder="mail@company.com" fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2}}>
              <TextField label="Password" type="password" placeholder="Password" fullWidth />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={6} >
                <Button variant="contained" fullWidth>Login</Button>
              </Grid>
              <Grid item xs={12} sm={6} >
                <Button variant="contained" fullWidth>
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