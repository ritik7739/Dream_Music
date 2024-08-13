// Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Box, Typography, Divider } from '@mui/material';
import { Home, TrendingUp, LibraryMusic, Explore, Settings, Logout } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Montserrat, sans-serif',
  },
});

const Sidebar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: 250,
          backgroundColor: '#121212',
          height: '100vh',
          padding: 2,
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontFamily: 'Poppins,Montserrat, sans-serif',
          position: 'sticky', // Make the sidebar sticky
          top: 0, 
        }}
      >
        {/* Logo and Heading */}
        <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <img
              src="/public/assets/images/musiclogo.png"
              alt="DreamMusic Logo"
              style={{ width: 30, height: 30, marginRight: 8 }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#E91E1E' }}>
              Dream
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
              Music
            </Typography>
          </Box>
        </Box>

        {/* Navigation Links */}
        <Box>
          <Typography variant="subtitle2" sx={{ color: '#888', marginBottom: 1 }}>
            MENU
          </Typography>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Home style={{ color: '#E91E1E' }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <TrendingUp style={{ color: '#E91E1E' }} />
              </ListItemIcon>
              <ListItemText primary="Trends" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LibraryMusic style={{ color: '#E91E1E' }} />
              </ListItemIcon>
              <ListItemText primary="Library" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Explore style={{ color: '#E91E1E' }} />
              </ListItemIcon>
              <ListItemText primary="Discover" />
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ backgroundColor: '#333' }} />

        {/* Settings and Logout at the Bottom */}
        <Box>
          <Typography variant="subtitle2" sx={{ color: '#888', marginBottom: 1 }}>
            GENERAL
          </Typography>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Settings style={{ color: '#E91E1E' }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Logout style={{ color: '#E91E1E' }} />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Sidebar;