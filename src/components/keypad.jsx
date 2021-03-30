import React from 'react';
import styled from 'styled-components';
import { ADD_CHARGE, CANCEL_CHARGE, COLOURS, MILLION } from '../constants';

import cancelSVG from '../../public/icons/close.svg';
import confirmSVG from '../../public/icons/checked.svg';
import KeyButton from './key-button';
import { useChargeContext } from '../contexts/charge-context';

const SKeyPadContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${COLOURS.border};
  height: calc(100% - 96px);
`;
const SKeyPadWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  div:nth-child(3n + 1) {
    border-right: 1px solid ${COLOURS.border};
    flex: 0 0 calc((100% / 3) - 1px);
  }
  div:nth-child(3n + 2) {
    border-right: 1px solid ${COLOURS.border};
    flex: 0 0 calc((100% / 3) - 1px);
  }
  div:nth-child(3n + 3) {
    flex: 0 0 calc(100% / 3);
  }
`;
const SSvgImage = styled.img`
  width: 16px;
`;

const keyButtonArray = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: <SSvgImage src={cancelSVG} />, action: CANCEL_CHARGE },
  { value: 0 },
  { value: <SSvgImage src={confirmSVG} />, action: ADD_CHARGE },
];

const KeyPad = () => {
  const {
    addFinalCharge,
    addCurrentChargeInput,
    currentChargeInput,
    clearCurrentChargeInput,
  } = useChargeContext();

  const handleButtonClick = (nextValue, action) => {
    if (action === ADD_CHARGE) {
      if (+currentChargeInput === 0) return;
      addFinalCharge(currentChargeInput / 100);
      clearCurrentChargeInput('');
    } else if (action === CANCEL_CHARGE) {
      clearCurrentChargeInput('');
    } else {
      if ((currentChargeInput + nextValue) / 100 > MILLION) return;
      addCurrentChargeInput(nextValue);
    }
  };

  return (
    <SKeyPadContainer>
      <SKeyPadWrapper>
        {keyButtonArray.map((content, i) => {
          return (
            <KeyButton key={i} content={content} onClick={handleButtonClick} />
          );
        })}
      </SKeyPadWrapper>
    </SKeyPadContainer>
  );
};

export default KeyPad;
