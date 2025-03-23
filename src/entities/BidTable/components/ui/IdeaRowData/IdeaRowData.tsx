import type { FC } from 'react';

import * as S from './IdeaRowData.styled';

interface IPropsIdeaRowData {
  activeIdeaButton: string;
  optionCoin: string;
  optionExchange: string;
  ideaRate: string;
}

export const IdeaRowData: FC<IPropsIdeaRowData> = ({
  activeIdeaButton,
  optionCoin,
  optionExchange,
  ideaRate,
}) => {
  return (
    <S.IdeaRowData>
      <span>{activeIdeaButton}</span>
      <span>{optionCoin}</span>
      <span>{optionExchange}</span>
      <span>{ideaRate}</span>
    </S.IdeaRowData>
  );
};
