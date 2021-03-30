import React from 'react';
import styled from 'styled-components';
import AllCharges from './components/all-charges';
import Register from './components/register';
import { ChargeProvider } from './contexts/charge-context';

const SAppContainer = styled.div`
  padding: 16px;
`;

const App = () => {
  return (
    <SAppContainer>
      <ChargeProvider>
        <Register />
        <AllCharges />
      </ChargeProvider>
    </SAppContainer>
  );
};

export default App;
