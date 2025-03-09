import { Button } from 'shared/components/ui';
import { EColors } from 'shared/styles/style-variables';
import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AboveBtn = styled(Button)`
  border-color: ${EColors.Green1};
  background: ${EColors.Green5};
  color: ${EColors.Green1};

  &:hover {
    background: ${EColors.Green6};
  }
`;
export const BelowBtn = styled(Button)`
  border-color: ${EColors.Red1};
  background: ${EColors.Red2};
  color: ${EColors.Red1};

  &:hover {
    background: ${EColors.Red3};
  }
`;

export const SelectWrapper1 = styled.div`
  width: 85px;
`;
export const SelectWrapper2 = styled.div`
  width: 150px;
`;
