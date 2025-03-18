import { Durations, EColors } from 'shared/styles/style-variables';
import { css, styled } from 'styled-components';

export const RowHiddenContentWrapper = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  max-height: ${({ $isSelected }) => ($isSelected ? '1000px' : '0')};
  opacity: ${({ $isSelected }) => ($isSelected ? '1' : '0')};
  overflow: hidden;
  transition:
    max-height ${Durations.Fast} ease,
    opacity ${Durations.Fast} ease;
  cursor: default;
`;

export const BidBlockHiddenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;

export const BidBlockHidden = styled.div<{ $isHidden?: boolean }>`
  width: 100%;
  min-height: max-content;
  max-height: max-content;
  ${({ $isHidden }) =>
    $isHidden &&
    css`
      min-height: 90px;
      max-height: 90px;
    `}
  border-radius: 8px;
  background: ${EColors.Back2};
  overflow: hidden;
  word-break: break-all;
  color: ${EColors.White1};
  cursor: pointer;
`;
