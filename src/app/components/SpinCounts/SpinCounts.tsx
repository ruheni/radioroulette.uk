"use client";

import { styled } from 'styled-components';
import { CountUp } from 'use-count-up';
import useSpins from '@/hooks/api/useSpins';
import { useState } from 'react';

const SpinCount = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`

const DesktopSpinCount = styled(SpinCount)`
  @media screen and (max-width: 500px) {
    display: none;
  }
`

const SpinCountLabel = styled.span`
  margin-right: 10px;
  font-weight: 400;
  font-size: 15px;
`;

const SpinCountDisplay = styled.div`
  padding: 6px 10px;
  min-width: 70px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colours.purpleDark};
  text-align: center;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    min-width: 120px;
    font-size: 16px;
  }
`;

export default function SpinCounts() {
  const {
    data,
  } = useSpins();

  return (
    <div style={{ display: 'flex' }}>
      <DesktopSpinCount>
        <SpinCountLabel>Today</SpinCountLabel>
        <SpinCountDisplay>
          <CountUp
            isCounting
            start={0}
            end={data?.daily}
            duration={1}
            thousandsSeparator=','
          />
        </SpinCountDisplay>
      </DesktopSpinCount>
      <SpinCount>
        <SpinCountLabel>All-time</SpinCountLabel>
        <SpinCountDisplay>
          <CountUp
            isCounting
            start={0}
            end={data?.total}
            duration={1.5}
            thousandsSeparator=','
          />
        </SpinCountDisplay>
      </SpinCount>
    </div>
  )
}