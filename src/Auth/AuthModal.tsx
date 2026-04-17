import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '@/Redux/hooks';
import { useEffect } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
};
type Props = {
  handleClose: () => void;
  open: boolean;
};

export default function AuthModal({handleClose, open}: Props) {
  const location = useLocation();
  const { auth } = useAppSelector((store) => store);

  useEffect(() => {
    // 3. If user is successfully fetched/logged in, close the modal automatically
    if (auth.user) {
      handleClose();
    }
  }, [auth.user]);

  return (
    <div>
      <Modal  
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname === "/login" ? <LoginForm/> : <RegisterForm/>  }
        
        </Box>
      </Modal>
    </div>
  );
}
