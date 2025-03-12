import type { ChangeEvent, FC } from 'react';
import { BlockWrapper } from 'features/CreateBidForm/components/styled/StyledBlockWrapper';
import { BlockDescription } from 'features/CreateBidForm/components/ui/BlockDescription';

import * as S from './InscriptionBlock.styled';

interface IPropsInscriptionBlock {
  inputLimits: { name: number; comment: number };
  inputLengths: { name: number; comment: number };
  inputsErrorText: { name: string; comment: string };
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const InscriptionBlock: FC<IPropsInscriptionBlock> = ({
  inputLimits,
  inputLengths,
  inputsErrorText,
  handleInputChange,
}) => {
  return (
    <BlockWrapper>
      <BlockDescription text="inscription" />
      <S.InputsWrapper>
        <S.Label>
          <S.UserNameInput
            maxLength={inputLimits.name}
            placeholder="name"
            name="name"
            validationErrorString={inputsErrorText.name}
            onChange={handleInputChange}
          />
          <S.LabelText $isMaxSymbolsCount={inputLengths.name >= inputLimits.name}>
            {inputLengths.name}/{inputLimits.name} symbols
          </S.LabelText>
        </S.Label>
        <S.Label>
          <S.CommentTextArea
            maxLength={inputLimits.comment}
            placeholder="comment"
            name="comment"
            onChange={handleInputChange}
            validationErrorString={inputsErrorText.comment}
          />
          <S.LabelText $isMaxSymbolsCount={inputLengths.comment >= inputLimits.comment}>
            {inputLengths.comment}/{inputLimits.comment} symbols
          </S.LabelText>
        </S.Label>
      </S.InputsWrapper>
    </BlockWrapper>
  );
};
