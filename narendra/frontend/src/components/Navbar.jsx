import React, { useEffect, useState } from 'react';
import { useCityContext } from '../contexts/CityContext';
import { Search as SearchIcon } from '@mui/icons-material';

export default function NavigationBar() {
  const { setTrackedCities, trackedCities, searchResults, searchCity, setSearchResults, addCityToTracked, searchTerm, setSearchTerm  } = useCityContext();
  const [searchInput, setSearchInput] = useState('');

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    searchCity(e.target.value); // Trigger the searchCity function from context
  };

  // Handle city selection
  const handleCitySelect = (city) => {
    const tosend = {
        "name": city.name,
        "country": city.country
    }
    console.log(tosend)
    addCityToTracked(tosend); // Add the city to tracked cities
    setSearchInput(''); // Clear search input after selection
  };    

  useEffect(() => {
    console.log(searchInput)
    console.log(typeof searchResults)
  })

  return (
    <nav style={{ backgroundColor: 'white', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Weather Dashboard</div>

      <div style={{ position: 'relative', width: '300px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: '5px',
            padding: '5px',
          }}
        >
          <SearchIcon />
          <input
            type="text"
            placeholder="Search city…"
            value={searchInput}
            onChange={handleSearchChange}
            style={{ width: '100%', padding: '0.5rem', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
          />
        </div>

        {/* Display search results with weather info */}
        {searchInput && searchResults.length > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: 'white',
              border: '1px solid #ccc',
              width: '100%',
              zIndex: 10000,
            }}
          >
            {searchResults.map((city) => (
              <div
                key={city.name}
                style={{ padding: '0.5rem', cursor: 'pointer', borderBottom: '1px solid #eee' }}
                onClick={() => handleCitySelect(city)}
              >
                <strong>{city.name}</strong> ({city.country})
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <span>Tracked Cities: {searchResults.length}</span>
      </div>
    </nav>
  );
}
