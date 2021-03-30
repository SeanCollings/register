import React from 'react';
import styled from 'styled-components';
import { COLOURS, CURRENCY_SYMBOL } from '../constants';
import { useChargeContext } from '../contexts/charge-context';

const SCurrentChargeContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: ${COLOURS.currentAmountBackground};
  font-size: 32px;
  color: ${COLOURS.primaryText};
  padding: 32px 16px;
  justify-content: flex-end;
  display: flex;
  line-height: 1;
  font-family: monaco, Consolas, Lucida Console, monospace;
`;
const SSymbol = styled.div`
  padding-right: 16px;
`;

const CurrentCharge = () => {
  const { currentChargeInput } = useChargeContext();
  const currentCharge = !currentChargeInput
    ? '0.00'
    : (currentChargeInput / 100).toFixed(2);

  return (
    <SCurrentChargeContainer>
      <SSymbol>{CURRENCY_SYMBOL}</SSymbol>
      <div>{currentCharge}</div>
    </SCurrentChargeContainer>
  );
};

export default CurrentCharge;
