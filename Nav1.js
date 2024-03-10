import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static" color="inherit">
        <Toolbar>
          
          <Link to="/S">LogIn</Link>
          &nbsp;&nbsp;
          <Link to="/L">Back</Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}