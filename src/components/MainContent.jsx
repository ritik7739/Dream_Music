import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { useDrag, useDrop } from 'react-dnd';
import update from 'immutability-helper';

const SongItem = ({ song, index, moveSong, isPlaying, onSelect }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'song',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'song',
    hover: (item) => {
      if (item.index !== index) {
        moveSong(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <ListItem
      ref={(node) => drag(drop(node))}
      sx={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: isPlaying ? '#CA0000' : 'transparent',
        width:"800px",
        margin:"0px",
        paddingLeft:"50px",
      }}
      onClick={() => onSelect(index)}
    > <Typography variant="body2" sx={{ color: '#fff',paddingRight:"32px" }}>
          {song.id}
       </Typography>
       <ListItemAvatar sx={{ paddingRight: '55px' }}>
           <Avatar src={song.image} />
       </ListItemAvatar>
      <ListItemText 
        primary={song.title}
      />
      <Typography variant="body2"  sx={{ color: '#fff', paddingRight:"20px"}}>
        {song.playingCount}
      </Typography>
      <Typography  variant="body2" sx={{ color: '#fff',paddingRight:"45px" ,marginLeft:"35px"}}>
        {song.time}
      </Typography>
      <Typography variant="body2"  sx={{ color: '#fff', paddingRight:"10px"}}>
        {song.album}
      </Typography>
    </ListItem>
  );
};

const MainContent = ({ songs, currentSongIndex, setCurrentSongIndex }) => {
  const [songList, setSongList] = useState(songs);

  const moveSong = (dragIndex, hoverIndex) => {
    const draggedSong = songList[dragIndex];
    setSongList(
      update(songList, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedSong],
        ],
      })
    );
  };

  const handleSelect = (index) => {
    setCurrentSongIndex(index);
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#520000',
          // visibility: 'hidden',
          padding: '8px 16px',
          borderRadius: '0px',
          color: '#fff',
          // width:"768px",
        }}
      >
        <Typography variant="h5" sx={{ margin: 0 }}>
          Popular
        </Typography>
        <Typography variant="h9" sx={{ marginRight: 40, cursor: 'pointer',opacity:"0.9" }}>
          See All
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          // justifyContent: 'space-between',
          // alignItems: '',
          backgroundColor: '#520000',
          padding: '8px 16px',
          borderRadius: '0px',
          color: '#fff',
          // width:"768px",
        }}
      >
        <Typography variant="h9" sx={{ paddingLeft:"40px",opacity:"0.9"}}>
          #
        </Typography>
        <Typography variant="h9" sx={{ margin: 0,opacity:"0.9", paddingLeft:"140px"}}>
          TITTLE
        </Typography>
        <Typography variant="h9" sx={{ margin: 0,opacity:"0.9", paddingLeft:"180px"}}>
          PLAYING
        </Typography>
        <Typography variant="h9" sx={{ margin: 0,opacity:"0.9", paddingLeft:"80px"}}>
          TIME
        </Typography>
        <Typography variant="h9" sx={{ margin: 0,opacity:"0.9", paddingLeft:"80px"}}>
          ALBUM
        </Typography>
      </Box>
      <List sx={{ listStyle: 'none', margin: 0, padding: '0px', cursor: 'pointer',color:'#fff', backgroundColor:"#520000"}}>
        {songList.map((song, index) => (
          <SongItem
            key={index}
            index={index}
            song={song}
            moveSong={moveSong}
            isPlaying={index === currentSongIndex}
            onSelect={handleSelect}
          />
        ))}
      </List>
    </Box>
  );
};

export default MainContent;