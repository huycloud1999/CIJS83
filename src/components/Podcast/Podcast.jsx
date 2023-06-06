import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function Podcast() {
  const episodes = [
    { id: 1, title: 'Episode 1', duration: '30:00', imageUrl: 'episode1.jpg' },
    { id: 2, title: 'Episode 2', duration: '25:15', imageUrl: 'episode2.jpg' },
    { id: 3, title: 'Episode 3', duration: '40:22', imageUrl: 'episode3.jpg' },
  ];

  const handlePlayEpisode = (episodeId) => {
    console.log('Playing episode', episodeId);
  };

  return (
    <div className="podcast">
      <Typography variant="h4" component="h1" gutterBottom>
        Podcast
      </Typography>
      <Card variant="outlined">
        <CardMedia
          component="img"
          width="500"
          image="https://cdn.tgdd.vn/hoi-dap/1314184/Thumbnail/podcast-la-gi-co-gi-thu-vi-nghe-podcast-o-dau-thumb-1.jpg"
          alt="Podcast Cover"
        />
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom>
            Now Playing: Episode 1
          </Typography>
          <audio controls>
            <source src="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </CardContent>
        
      </Card>
      <List>
        {episodes.map((episode) => (
          <ListItem key={episode.id} button onClick={() => handlePlayEpisode(episode.id)}>
            <ListItemIcon>
              <Avatar>
                <PlayCircleOutlineIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText
              primary={episode.title}
              secondary={episode.duration}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Podcast;
