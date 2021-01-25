import React from 'react';
import moment from 'moment';
import { Typography } from '@material-ui/core';
import { getIcon } from '../../utils';
import { DayCardContainer } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DayCard = ({ datetime, icon, temp, conditions }) => {
  return (
    <DayCardContainer>
      <Typography component='p'>
        {moment(datetime).format('LL')}
      </Typography>
      <FontAwesomeIcon icon={getIcon(icon)} size='3x' color='#565479' />
      <Typography component='p'>
        {temp}&#8451;
      </Typography>
      <Typography component='p'>
        {conditions}
      </Typography>
    </DayCardContainer>
  );
};
