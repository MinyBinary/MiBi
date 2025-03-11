import type { FC } from 'react';
import CreateBidButtonIcon from 'shared/assets/icons/links/create-bid.svg?react';
import { EButtonVariant } from 'shared/components/ui';

import * as S from './CreateBidForm.styled';

export const CreateBidForm: FC = () => {
  return (
    <S.CreateBidForm>
      <S.FormBlocksWrapper>
        <S.Block1>
          <S.BlockDescription>Inscription1</S.BlockDescription>
          <S.InputsWrapper>
            <S.Label>
              <S.UserNameInput placeholder="name" name="name" />
              <S.LabelText>0/12 symbols</S.LabelText>
            </S.Label>
            <S.Label>
              <S.CommentTextArea placeholder="comment" name="comment" />
              <S.LabelText>0/64 symbols</S.LabelText>
            </S.Label>
          </S.InputsWrapper>
        </S.Block1>
        <S.Block1>
          <S.BlockDescription>Inscription2</S.BlockDescription>
          <S.InputsWrapper>
            <S.Label>
              <S.UserNameInput placeholder="name" name="name" />
              <S.LabelText>0/12 symbols</S.LabelText>
            </S.Label>
            <S.Label>
              <S.CommentTextArea placeholder="comment" name="comment" />
              <S.LabelText>0/64 symbols</S.LabelText>
            </S.Label>
          </S.InputsWrapper>
        </S.Block1>
        <S.Block1>
          <S.BlockDescription>Inscription3</S.BlockDescription>
          <S.InputsWrapper>
            <S.Label>
              <S.UserNameInput placeholder="name" name="name" />
              <S.LabelText>0/12 symbols</S.LabelText>
            </S.Label>
            <S.Label>
              <S.CommentTextArea placeholder="comment" name="comment" />
              <S.LabelText>0/64 symbols</S.LabelText>
            </S.Label>
          </S.InputsWrapper>
        </S.Block1>
        <S.Block1>
          <S.BlockDescription>Inscription4</S.BlockDescription>
          <S.InputsWrapper>
            <S.Label>
              <S.UserNameInput placeholder="name" name="name" />
              <S.LabelText>0/12 symbols</S.LabelText>
            </S.Label>
            <S.Label>
              <S.CommentTextArea placeholder="comment" name="comment" />
              <S.LabelText>0/64 symbols</S.LabelText>
            </S.Label>
          </S.InputsWrapper>
        </S.Block1>
      </S.FormBlocksWrapper>
      <S.CreateBidButton
        type="submit"
        variant={EButtonVariant.Primary}
        text="Create bid"
        icon={<CreateBidButtonIcon />}
      />
    </S.CreateBidForm>
  );
};
