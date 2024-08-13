import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, IconButton, Avatar, Slider } from '@mui/material';
import { PlayArrow, Pause, SkipNext, SkipPrevious, Repeat, Shuffle } from '@mui/icons-material';
import { Howl } from 'howler';

const NowPlaying = ({ currentSong, isPlaying, onPlayPause, onNext, onPrevious }) => {
  const [progress, setProgress] = useState(0);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    if (currentSong) {
      if (soundRef.current) {
        soundRef.current.unload();  // Unload previous sound if it exists
      }

      soundRef.current = new Howl({
        src: [currentSong.src],
        onplay: () => {
          requestAnimationFrame(updateProgress);
        },
        onend: () => {
          if (isRepeat) {
            soundRef.current.play();
          } else if (isShuffle) {
            onNext();  // Implement shuffle logic here
          }
        },
        onseek: () => {
          requestAnimationFrame(updateProgress);
        },
      });

      if (isPlaying) {
        soundRef.current.play();
      }
    }

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [currentSong, isPlaying]); // Removed isRepeat and isShuffle from dependency array

  const updateProgress = () => {
    if (soundRef.current) {
      const seek = soundRef.current.seek() || 0;
      setProgress((seek / soundRef.current.duration()) * 100);

      if (soundRef.current.playing()) {
        requestAnimationFrame(updateProgress);
      }
    }
  };

  const handleSliderChange = (event, newValue) => {
    if (soundRef.current) {
      const seekTime = (soundRef.current.duration() * newValue) / 100;
      soundRef.current.seek(seekTime);
      setProgress(newValue);
    }
  };

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  return (
    <Box 
      sx={{ 
        padding: 2, 
        backgroundColor: '#CA0000', 
        borderRadius: 5, 
        color: "#fff", 
        position: 'fixed',  
        right: 20,          
        bottom: 20,         
        width: 230,         
        zIndex: 1000        
      }}
    >
      <Typography variant="h6" mb={2} pl={7}>Now Playing</Typography>
      
        <Avatar src={"/public/assets/images/NowPlaying.jpg"} sx={{ width: 220, height: 100,marginRight: 5, 
            borderRadius: 1  }} />
        <Box>
          <Typography variant="body1" sx={{ marginTop:5,marginLeft:8,fontWeight:700,fontSize: '1.5rem' }}>{currentSong.title}</Typography>
          <Typography variant="body2" sx={{ color: '#ddd',marginLeft:7 }}>{currentSong.artist}</Typography>
        </Box>
     
      <Box mt={2} mb={2}>
        <Slider 
          value={progress}
          onChange={handleSliderChange}
          sx={{
            color: '#fff', 
            '& .MuiSlider-thumb': { color: '#fff' }, 
            '& .MuiSlider-track': { color: '#fff' }, 
            '& .MuiSlider-rail': { color: '#ddd' }
          }}
        />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="caption">{formatTime(soundRef.current ? soundRef.current.seek() : 0)}</Typography>
        <Typography variant="caption">{formatTime(soundRef.current ? soundRef.current.duration() : 0)}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <IconButton onClick={toggleRepeat}>
          <Repeat sx={{ color: isRepeat ? '#fff' : '#777' }} />
        </IconButton>
        <IconButton onClick={onPrevious}>
          <SkipPrevious sx={{ color: '#fff' }} />
        </IconButton>
        <IconButton onClick={onPlayPause}>
          {isPlaying ? <Pause sx={{ color: '#fff' }} /> : <PlayArrow sx={{ color: '#fff' }} />}
        </IconButton>
        <IconButton onClick={onNext}>
          <SkipNext sx={{ color: '#fff' }} />
        </IconButton>
        <IconButton onClick={toggleShuffle}>
          <Shuffle sx={{ color: isShuffle ? '#fff' : '#777' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export default NowPlaying;
