import React from 'react';
import styled from 'styled-components';
import { COLOURS } from '../constants';
import CurrentCharge from './current-charge';
import KeyPad from './keypad';

const SRegisterContainer = styled.div`
  max-width: 400px;
  height: 400px;
  border: 3px solid ${COLOURS.border};
  border-radius: 5px;
  box-shadow: 0px 0px 16px ${COLOURS.currentAmountBackground};
  margin-bottom: 16px;
`;

const Register = () => {
  return (
    <SRegisterContainer>
      <CurrentCharge />
      <KeyPad />
    </SRegisterContainer>
  );
};

export default Register;
