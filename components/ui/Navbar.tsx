import { useContext } from 'react';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UIContext } from '../../context/ui';
import NextLink from 'next/link'; // Renamed "Link" to "NextLink" to differentiate it from the MUI Link.

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton size='large' edge='start' onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href={'/'} passHref>
          <Link underline='none' color='white'>
            <Typography variant='h6'>OpenJira EA</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
