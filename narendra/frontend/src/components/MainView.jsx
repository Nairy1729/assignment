import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import tttttt from '../assets/weather-svgrepo-com.svg';
import { useCityContext } from '../contexts/CityContext';


const MainView = () => {

  const { setTrackedCities, trackedCities, searchResults, searchCity, setSearchResults, addCityToTracked, searchTerm, setSearchTerm  } = useCityContext();
  
  const [mainCityDash, setMainCityDash] = useState();

  useEffect(() => {
    if(trackedCities.length > 0){
        setMainCityDash(trackedCities[0][0].weatherData);
        console.log(trackedCities[0][0].weatherData)
    }
  }, [trackedCities])

//   const imageurl = "http:"+MainCityDash.current.condition.icon;

  return (
    <Box sx={{ borderRadius: '10px', backgroundColor: '#3f9ac7', padding: 2, color: 'white' }}>
      <Grid container spacing={2}>
        {mainCityDash && <Grid item xs={12} md={4} sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CardMedia
            component="img"
            image={"http:"+mainCityDash.current.condition.icon}
            alt="Weather Icon"
            sx={{ width: 200, height: 200, marginBottom: 2 }} 
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 2, position: 'absolute', bottom: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column' }}>
            <span>{mainCityDash.location.name}</span>
            <span style={{ fontSize: '0.75em', fontWeight: 'normal' }}>{mainCityDash.current.condition.text}</span>
        </Typography>

            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            {mainCityDash.current.temp_c}°C
            </Typography>
        </Box>
        </Grid>}


        {<Grid item xs={12} md={8}>
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}  
            centerMode={true}
            centerSlidePercentage={33.33} 
            showStatus={false}
            showIndicators={true}
          >
            <Card sx={{ backgroundColor: 'white', color: 'black', maxWidth: 300, position: 'relative' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    image={tttttt}
                    alt="Weather Icon"
                    sx={{ height: 200 }} 
                  />
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    28°C
                  </Typography>
                </Box>

                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    Monday
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ backgroundColor: 'white', color: 'black', maxWidth: 300, position: 'relative' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    image={tttttt}
                    alt="Weather Icon"
                    sx={{ height: 200 }} 
                  />
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    25°C
                  </Typography>
                </Box>

                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    Tuesday
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ backgroundColor: 'white', color: 'black', maxWidth: 300, position: 'relative' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    image={tttttt}
                    alt="Weather Icon"
                    sx={{ height: 200 }} 
                  />
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    30°C
                  </Typography>
                </Box>

                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    Wednesday
                  </Typography>
                </Box>
              </CardContent>
            </Card>

          </Carousel>
        </Grid>}
      </Grid>
    </Box>
  );
};

export default MainView;
