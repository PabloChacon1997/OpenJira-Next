import { useContext } from 'react';

import { UIContext } from '../../context/ui';


import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';


const menuItems: string[] = ['Inbox', 'Starred','Send Email', 'Drafts'];

export const Sidebar = () => {

  const { sidemenuOpen, closesideMenu } = useContext(UIContext);


  return (
    <Drawer
      anchor='left'
      open={sidemenuOpen}
      onClose={closesideMenu}
    >
      <Box sx={{ width: 250 }}>
        <Box sx={{padding: '5px 10px'}}>
          <Typography variant='h4'>Menú</Typography>
        </Box>
        <List>
          {
            menuItems.map( (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  { index % 2 ?  <InboxIcon />: <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))
          }
        </List>
        <Divider />
        <List>
          {
            menuItems.map( (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  { index % 2 ?  <InboxIcon />: <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))
          }
        </List>
      </Box>
    </Drawer>
  )
}
