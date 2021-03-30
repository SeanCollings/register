import React from 'react';
import styled from 'styled-components';
import { COLOURS } from '../constants';

const SKeyButtonContainer = styled.div`
  color: ${COLOURS.primaryText};
  background: ${COLOURS.keyButtonBackground};
  font-size: 20px;
  text-align: center;
  border-bottom: 1px solid ${COLOURS.border};
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  position: relative;
`;
const SSpan = styled.span`
  top: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
`;

const KeyButton = ({ content, onClick = () => null }) => {
  return (
    <SKeyButtonContainer onClick={() => onClick(content.value, content.action)}>
      <SSpan>{content.value}</SSpan>
    </SKeyButtonContainer>
  );
};

export default KeyButton;
