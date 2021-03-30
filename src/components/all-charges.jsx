import React from 'react';
import styled from 'styled-components';
import { COLOURS, CURRENCY_SYMBOL } from '../constants';
import { useChargeContext } from '../contexts/charge-context';
import { getAmountTotal } from '../utils';

const SAllChargesContainer = styled.div`
  max-width: 220px;
  background: ${COLOURS.secondaryBackground};
  font-size: 16px;
  color: white;
  padding: 16px;
  border-radius: 5px;
  font-family: monaco, Consolas, Lucida Console, monospace;
`;
const SSymbol = styled.div`
  padding-right: 8px;
`;
const SChargeWrapper = styled.div`
  color: ${COLOURS.secondaryText};
  display: flex;
  justify-content: flex-end;
`;
const SDivider = styled.div`
  width: 100%;
  color: ${COLOURS.secondaryText};
  border-top: 1px solid white;
  margin: 4px 0;
`;

const AllCharges = () => {
  const { allCharges } = useChargeContext();

  return (
    <SAllChargesContainer>
      <div>
        {allCharges.map((charge, i) => {
          return (
            <SChargeWrapper key={i}>
              <SSymbol>{CURRENCY_SYMBOL}</SSymbol>
              {charge.toFixed(2)}
            </SChargeWrapper>
          );
        })}
      </div>
      {!!allCharges.length && <SDivider />}
      <SChargeWrapper>
        <SSymbol>{CURRENCY_SYMBOL}</SSymbol>
        {getAmountTotal(allCharges).toFixed(2)}
      </SChargeWrapper>
    </SAllChargesContainer>
  );
};

export default AllCharges;
