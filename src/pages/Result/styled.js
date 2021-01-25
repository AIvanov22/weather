import styled from 'styled-components';

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #262543;
`;

export const DaysCards = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

export const EmptyData = styled.p`
  color: white;
  font-size: 22px;
  padding: 1rem;
`;
