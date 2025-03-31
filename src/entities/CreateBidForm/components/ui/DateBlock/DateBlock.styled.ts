import TimeAndDateIcon from 'shared/assets/icons/time/time-and-date.svg?react';
import { Input } from 'shared/components/ui';
import styled from 'styled-components';

export const DateBlock = styled.div`
  position: relative;
  display: flex;
`;

export const DisabledInput = styled(Input)`
  position: relative;
  pointer-events: none;
`;

export const StyledTimeAndDateIcon = styled(TimeAndDateIcon)`
  position: absolute;
  right: 16px;
  bottom: 12px;
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }
`;
