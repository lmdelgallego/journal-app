import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
        <form action="">
          <Grid container>
            <Grid item xs={12} sx={{ mb: 2}}>
              <TextField label="Name" type="text" placeholder="John Dow" fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2}}>
              <TextField label="Email" type="email" placeholder="mail@company.com" fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2}}>
              <TextField label="Password" type="password" placeholder="Password" fullWidth />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={6} >
                <Button variant="contained" fullWidth>Sign Up</Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent="end">
              <Typography sx={{mr: 1}}>Already have an account?</Typography>
              <Link component={RouterLink } color="inherit" to="/auth/login">Login</Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}

export default RegisterPage