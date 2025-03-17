import { Button } from 'shared/components/ui';
import { EColors } from 'shared/styles/style-variables';
import styled from 'styled-components';

export const WalletOptionWrapper = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  background: ${EColors.Gray3};
`;

export const WalletButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  background: ${EColors.Back3};

  &:hover {
    background: ${EColors.Back2};
  }
`;
