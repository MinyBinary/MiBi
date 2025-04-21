import type { FC } from 'react';
import BelowIcon from 'shared/assets/icons/arrows/triangle-filled-down.svg?react';
import AboveIcon from 'shared/assets/icons/arrows/triangle-filled-up.svg?react';

import * as S from './IdeaRowData.styled';

interface IPropsIdeaRowData {
  activeIdeaButton: string;
  optionCoin: string;
  ideaRate: string;
}

export const IdeaRowData: FC<IPropsIdeaRowData> = ({ activeIdeaButton, optionCoin, ideaRate }) => {
  const isAbove = activeIdeaButton === 'above';

  return (
    <S.IdeaRowData>
      <S.Pair>{optionCoin}</S.Pair>
      {isAbove ? (
        <S.AboveRateValue>
          {ideaRate && (
            <>
              {ideaRate}
              <AboveIcon />
            </>
          )}
        </S.AboveRateValue>
      ) : (
        <S.BelowRateValue>
          {ideaRate && (
            <>
              {ideaRate}
              <BelowIcon />
            </>
          )}
        </S.BelowRateValue>
      )}
    </S.IdeaRowData>
  );
};
