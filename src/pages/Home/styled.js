import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const HomeContainer = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #262543;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
  width: 20rem;
  justify-content: space-between;
`;

export const TextFieldContainer = styled.div`
  width: 20rem;
`;

export const SearchCard = styled(Card)`
  padding: 4rem;
`;
