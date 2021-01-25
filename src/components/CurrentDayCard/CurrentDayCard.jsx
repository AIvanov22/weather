import React from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CurrentDayCardContainer } from './styled';
import { FlexColumn, FlexRow } from '../../globalStyle';
import { getIcon } from '../../utils';

export const CurrentDayCard = ({ icon, address, temp, conditions, datetime, humidity, wspd, sealevelpressure, sunrise,
  sunset }) => {
  return (
    <CurrentDayCardContainer>
      <Typography component='p'>
        {address}
      </Typography>
      <Typography component='p'>
        {temp}&#8451;
      </Typography>
      <Typography component='p'>
        {moment(datetime).format('LL')}
      </Typography>
      <FontAwesomeIcon icon={getIcon(icon)} size='6x' color='#565479' />
      <Typography component='p'>
        {conditions}
      </Typography>
      <FlexRow>
        <FlexColumn>
          <Typography component='p'>
            {`Humidity: ${humidity}%`}
          </Typography>
          <Typography component='p'>
            {`Sunrise: ${moment(sunrise).format('LT')}`}
          </Typography>
        </FlexColumn>
        <FlexColumn>
          <Typography component='p'>
            {`Wind: ${wspd} m/s`}
          </Typography>
          <Typography component='p'>
            {`Sunset: ${moment(sunset).format('LT')}`}
          </Typography>
        </FlexColumn>
      </FlexRow>
      <Typography component='p'>
        {`Pressure: ${sealevelpressure} hPa`}
      </Typography>
    </CurrentDayCardContainer>
  );
};
