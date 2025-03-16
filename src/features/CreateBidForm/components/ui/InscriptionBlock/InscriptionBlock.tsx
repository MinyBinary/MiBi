import type { ChangeEvent, FC } from 'react';
import { BlockWrapper } from 'features/CreateBidForm/components/styled/StyledBlockWrapper';
import { BlockDescription } from 'features/CreateBidForm/components/ui/BlockDescription';

import * as S from './InscriptionBlock.styled';

interface IPropsInscriptionBlock {
  inputLimits: { name: number; comment: number };
  inputLengths: { name: number; comment: number };
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const InscriptionBlock: FC<IPropsInscriptionBlock> = ({
  inputLimits,
  inputLengths,
  handleInputChange,
}) => {
  return (
    <BlockWrapper>
      <BlockDescription text="inscription" />
      <S.InputsWrapper>
        <S.LabelBlock1>
          <S.UserNameInput
            maxLength={inputLimits.name}
            placeholder="name"
            name="name"
            onChange={handleInputChange}
          />
          <S.LabelText $isMaxSymbolsCount={inputLengths.name >= inputLimits.name}>
            {inputLengths.name}/{inputLimits.name} symbols
          </S.LabelText>
        </S.LabelBlock1>
        <S.LabelBlock2>
          <S.CommentTextArea
            maxLength={inputLimits.comment}
            placeholder="comment"
            name="comment"
            onChange={handleInputChange}
          />
          <S.LabelText $isMaxSymbolsCount={inputLengths.comment >= inputLimits.comment}>
            {inputLengths.comment}/{inputLimits.comment} symbols
          </S.LabelText>
        </S.LabelBlock2>
      </S.InputsWrapper>
    </BlockWrapper>
  );
};
