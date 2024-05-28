import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton'; // Add this import
import Badge from '@mui/material/Badge'; // Add this import
import Myprofile from '../molecules/my_profile';
import Hamburger from '../molecules/list';
import FullScreen from '../atoms/full_screen';
import Companylogo from '../atoms/company_logo';
import Search from '../atoms/search';
import Notification from '../atoms/notification';
import Dayin from '../atoms/dayin';
import Minimize from '../atoms/minimize';

function Header() {
  // Define classes if needed for styling
  const classes = {}; // Example: Define classes object

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div position="static" style={{ background: "white", color: 'black', boxShadow: 'none', padding: '0px 5px' }}>
        <Toolbar sx={{ flexGrow: 1, height: '10vh' }}>
          <Hamburger />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <FullScreen sx={{ display: { xs: 'none', sm: 'block' } }} />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Search />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Minimize />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: 'flex' } }}>
          <Box sx={{margin: 'auto'}} >
            <Dayin />
          </Box>
          <Box sx={{margin: 'auto 20px auto auto'}}> {/* Assuming classes is defined for styling */}
            <Badge badgeContent={7} color="error" classes={{ badge: classes.badge }}>
              <Notification />
            </Badge>
          </Box>
            <Companylogo />
          </Box>

         
        </Toolbar>
      </div>
    </Box>
  );
}

export default Header;