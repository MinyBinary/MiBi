import { Button } from 'shared/components/ui';
import { EColors } from 'shared/styles/style-variables';
import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AboveBtn = styled(Button)`
  width: 150px;
  border-color: ${EColors.Green1};
  background: ${EColors.Green5};
  color: ${EColors.Green1};

  &:hover {
    background: ${EColors.Green6};
  }
`;
export const BelowBtn = styled(Button)`
  width: 150px;
  border-color: ${EColors.Red1};
  background: ${EColors.Red2};
  color: ${EColors.Red1};

  &:hover {
    background: ${EColors.Red3};
  }
`;
