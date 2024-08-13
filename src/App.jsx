import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ArtistInfo from './components/ArtistInfo';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Box, Container } from '@mui/material';
import MainContent from './components/MainContent';
import NowPlaying from './components/NowPlaying';
import songs from './components/Song'; 

const App = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSong = songs[currentSongIndex];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  return (
    <Box display="flex">
      <Sidebar />
      <Container sx={{ paddingLeft: '0 !important', paddingRight: '0 !important' }}>
        <ArtistInfo />
        <DndProvider backend={HTML5Backend}>
          <MainContent
            songs={songs}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
          />
          <NowPlaying
            currentSong={currentSong}
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </DndProvider>
      </Container>
    </Box>
  );
};

export default App;
