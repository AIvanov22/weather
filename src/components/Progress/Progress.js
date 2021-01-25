import React from 'react';
import { ProgressContainer } from './styled';
import { CircularProgress } from '@material-ui/core';

export const Progress = () => {
  return (
    <ProgressContainer>
      <CircularProgress />
    </ProgressContainer>
  );
};
