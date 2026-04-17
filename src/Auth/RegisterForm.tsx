import { getUser, register } from '@/Redux/Auth/Action';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
type Props = {

};
const RegisterForm:React.FC<Props> = () => {
  //redux logic will be here
  const dispatch = useAppDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useAppSelector((store) => store);
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt,auth.jwt]);

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: formData.get("role"),
    }
    dispatch(register(userData));
    console.log("userData:", userData);
  }
  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Role"
                name="role"
              >
                <MenuItem value={"ROLE_ADMIN"}>Admin</MenuItem>
                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="given-name"
              type="password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      <div>
        <div>
          <p> if you have an account ? 
          <Button onClick= {()=> navigate("/login")} variant='text' color='primary'>
            Login
          </Button> 
           </p>
        </div>
      </div>

    </div>
  );
};

export default RegisterForm;