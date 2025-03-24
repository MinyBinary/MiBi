import { Button } from 'shared/components/ui';
import styled, { css } from 'styled-components';

export const StyledActiveButton = styled(Button)<{ $active?: boolean }>`
  position: relative;
  width: 100%;
  padding: 12px;

  & svg {

    & path {
      fill: ${({ theme }) => theme.buttons.primary.fill.inactive};
    }
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.buttons.green.color.active};

      & svg {

        & path {
          fill: ${({ theme }) => theme.buttons.green.fill.active};
        }
      }
    `}
`;
