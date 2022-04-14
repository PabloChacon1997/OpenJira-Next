import { useContext } from 'react';
import NextLink from 'next/link';

import { UIContext } from '../../context/ui';

import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


export const Navbar = () => {

  const { opensideMenu } = useContext(UIContext);

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          onClick={opensideMenu}
        >
          <MenuIcon />
        </IconButton>
        <NextLink href='/' passHref>
          <Link underline='none' color='white'>
            <Typography variant='h6'>OpenJira</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}
