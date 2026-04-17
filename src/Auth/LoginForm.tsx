import { getUser, login } from '@/Redux/Auth/Action';
import { useAppDispatch } from '@/Redux/hooks';
import { Button, Grid,TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
type Props = {

};
const LoginForm:React.FC<Props> = () => {
  const navigate = useNavigate();
  // redux logic will be here
  const jwt = localStorage.getItem("jwt");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    }
    dispatch(login(userData));
    console.log("userData:", userData);
    console.log("jwt token:", jwt);
  }
  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
              Login
            </Button>
          </Grid>
        </Grid>
      </form>

      <div>
              <div>
                <p> if you don't have an account ? 
                <Button onClick= {()=> navigate("/register")} variant='text' color='primary'>
                  Register
                </Button> 
                 </p>
              </div>
            </div>

    </div>
  );
};

export default LoginForm;