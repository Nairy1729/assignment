import React from 'react';
import { Grid, Card, CardContent, Typography, Box, CardMedia } from '@mui/material';
import ttttt from '../assets/weather-svgrepo-com (1).svg';
import { useCityContext } from '../contexts/CityContext';

const cardsData = [
  { text: 'Feel like', temperature: '28°C', icon: ttttt },
  { text: 'Cloud', temperature: '22°C', icon: ttttt },
  { text: 'Rain', temperature: '20°C', icon: ttttt },
  { text: 'Humidity', temperature: '26°C', icon: ttttt },
  { text: 'Ultravoilet', temperature: '30°C', icon: ttttt },
  { text: 'Cloudy', temperature: '18°C', icon: ttttt },
];

const Highlights = () => {
    
  const { setTrackedCities, trackedCities, searchResults, searchCity, setSearchResults, addCityToTracked, searchTerm, setSearchTerm  } = useCityContext();

  return (
    <Box sx={{ padding: 0, backgroundColor:'white' }}>
      <Grid container spacing={2}>
        {cardsData.map((card, index) => (
          <Grid
            item
            key={index}
            xs={12}     
            sm={6}       
            md={4}      
          >
            <Card sx={{ height: '4rem', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  image={card.icon}
                  alt={card.text}
                  sx={{ width: 30, height: 30, marginRight: 2 }} 
                />
                <Typography variant="h6">{card.text}</Typography>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {card.temperature}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Highlights;
