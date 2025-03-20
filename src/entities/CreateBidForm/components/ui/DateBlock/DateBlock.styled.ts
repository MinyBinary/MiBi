import TimeAndDateIcon from 'shared/assets/icons/time/time-and-date.svg?react';
import { Input } from 'shared/components/ui';
import { Durations, EColors } from 'shared/styles/style-variables';
import { BreakPointsV2 } from 'shared/styles/style-variables/breakpoints';
import styled from 'styled-components';

export const DateBlock = styled.div`
  position: relative;
  display: flex;
`;

export const DisabledInput = styled(Input)`
  pointer-events: none;
`;

export const StyledTimeAndDateIcon = styled(TimeAndDateIcon)`
  position: absolute;
  right: 16px;
  bottom: 12px;
  width: 20px;
  height: 20px;

  & path {
    transition: stroke ${Durations.Fast} ease-out;
  }

  @media (min-width: ${BreakPointsV2.MobileMedium}) {

    &:hover {

      & path {
        stroke: ${EColors.Green1};
      }

      cursor: pointer;
    }
  }
`;
