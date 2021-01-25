import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { getUserPosition } from '../../utils';
import paths from '../../router/paths';
import { HomeContainer, Actions, TextFieldContainer, SearchCard } from './styled';

export const Home = () => {
  const history = useHistory();
  const [location, setLocation] = useState('');

  const onSearchClick = async () =>{
    const data = location.trim();
    if(data && data.length > 0){
      history.push(`${paths.city}?location=${data}`)
    }
  } ;

  const onCurrentLocationClick = async () => {
    try{
      const { lon, lat } = await getUserPosition();
      history.push(`${paths.city}?lon=${lon}&lat=${lat}`);
    } catch (error) {
      console.error(error);
    }
  };

  const onLocationChange = ({ target: { value } }) => {
    setLocation(value);
  }

  const onKeyPress = ({ key }) => {
    if (key === 'Enter') onSearchClick();
  };

  return (
    <HomeContainer>
      <SearchCard>
        <TextFieldContainer>
          <TextField
            label="City"
            variant="outlined"
            onChange={onLocationChange}
            onKeyPress={onKeyPress}
            size='small'
            fullWidth
          />
        </TextFieldContainer>
        <Actions>
          <Button
            variant="outlined"
            color="primary"
            onClick={onCurrentLocationClick}
          >
            {'My location'}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={onSearchClick}
          >
            {'Search'}
          </Button>
        </Actions>
      </SearchCard>
    </HomeContainer>
  );
};
