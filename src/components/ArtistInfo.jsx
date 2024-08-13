import React from 'react';
import { Typography, Box, AppBar, Toolbar, InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';
import VerifiedIcon from '@mui/icons-material/Verified';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#7b0000', padding: '10px 0'}}>
      <Toolbar sx={{ justifyContent: 'space-between', paddingLeft: 0, paddingRight: 0 }}>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>Music</Typography>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>Podcast</Typography>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>Live</Typography>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>Radio</Typography>
        </Box>
        <InputBase
          placeholder="Michael Jackson"
          sx={{
            color: '#fff',
            backgroundColor: '#4e0000',
            padding: '6px 12px',
            borderRadius: 2,
            maxWidth: '300px',
            width: '100%',
            marginRight: "350px",
          }}
          endAdornment={<Search sx={{ color: '#fff', marginRight: '8px' }} />}
        />
      </Toolbar>
    </AppBar>
  );
};

const ArtistInfo = ({ artist }) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          position: 'relative',
          height: '350px',
          display: 'flex',
          alignItems: 'flex-end', // Align content at the bottom
          justifyContent: 'center',
          backgroundColor: '#7b0000', // Solid color background
          overflow: 'hidden',
          paddingLeft: 0, // Remove padding-left
          paddingRight: 0, // Remove padding-right if needed
        }}
      >
        {/* Avatar image */}
        <Box
          sx={{
            backgroundImage: `url(${artist.image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100%', // Adjust height as needed
            width: '100%',
            marginBottom: '15px', // Overlap the background slightly
            marginLeft: '-60px',
            zIndex: 2, // Place it in front of the background
          }}
        />

        {/* Background image below the avatar */}
        <Box
          sx={{
            backgroundImage: `url(${artist.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom', // Position it at the bottom center
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            width: '500px',
            padding: '50px',
            marginLeft: '100px',
            marginBottom: '15px',
            height: '50%', // Adjust the height as needed to cover only the bottom part
            zIndex: 1, // Layer it below the avatar
            paddingBottom: '15px', // Overlap the avatar slightly
            borderRadius: '50px', // Add rounded corners
          }}
        />

        {/* Text content */}
        <Box
          sx={{
            paddingBottom: '30px',
            position: 'absolute',
            transform: 'translateX(-20%)',
            zIndex: 3, // Ensure it stays above both the avatar and the background
            textAlign: 'left',
            marginBottom: '45px',
            width: '50%',
          }}
        > 
          <Typography variant="body2" sx={{ color: '#ddd', fontSize: '18px' }}>
            <VerifiedIcon sx={{ verticalAlign: 'middle', marginRight: '4px', color: '#00c5ff' }} />
            Verified Artist
          </Typography>
          <Typography variant="h4" sx={{ color: '#fff', fontWeight: 600 }}>{artist.name}</Typography>
          <Typography variant="body2" sx={{ color: '#ddd', fontSize: '18px' }}>{artist.listeners} monthly listeners</Typography>
        </Box>
      </Box>
    </>
  );
};

const App = () => {
  const artist = {
    name: 'Michael Jackson',
    listeners: '27.852.501',
    image: '/assets/images/avtar.png', // Path to the avatar image
    backgroundImage: '/assets/images/background-img.png' // Path to the background image
  };

  return <ArtistInfo artist={artist} />;
};

export default App;
