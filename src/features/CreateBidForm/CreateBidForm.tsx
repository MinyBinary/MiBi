import { ChangeEvent, type FC, useActionState, useState } from 'react';
import { usePopup } from 'features/Popup';
import { EPopupVariant } from 'features/Popup/types/popup-variants';
import CreateBidButtonIcon from 'shared/assets/icons/links/create-bid.svg?react';
import { EButtonVariant } from 'shared/components/ui';
import { formatTextOutput } from 'shared/utils';

import { inputLimits } from './constants/input-limits';

import * as S from './CreateBidForm.styled';

interface IFormState {
  isSubmitting: boolean;
  errors: {
    name?: string;
    comment?: string;
  };
  formValues: {
    name: string;
    comment: string;
  };
}

export const CreateBidForm: FC = () => {
  const { openPopup, closePopup } = usePopup();

  const [inputsErrorText, setInputsErrorText] = useState({
    name: '',
    comment: '',
  });
  const [inputLengths, setInputLengths] = useState({
    name: 0,
    comment: 0,
  });
  const [formState, formAction] = useActionState(submitForm, {
    isSubmitting: false,
    errors: {},
    formValues: { name: '', comment: '' },
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputsErrorText((prev) => ({
      ...prev,
      [name]: '',
    }));

    setInputLengths((prev) => ({
      ...prev,
      [name]: value.length,
    }));

    e.target.value = formatTextOutput(e.target.value);

    // if (formState.errors[name as keyof IFormState['errors']]) {
    //   formAction(new FormData(e.currentTarget.form!));
    // }
  };

  async function submitForm(prevState: IFormState, formData: FormData) {
    const name = formData.get('name') as string;
    const comment = formData.get('comment') as string;

    // const errors: IFormState['errors'] = {};

    // if (!name) {
    //   errors.name = 'Name is required';
    // } else if (name.length > 12) {
    //   errors.name = 'Name must be less than 12 characters';
    // }

    // if (!comment) {
    //   errors.comment = 'Comment is required';
    // } else if (comment.length > 64) {
    //   errors.comment = 'Comment must be less than 64 characters';
    // }

    // if (Object.keys(errors).length > 0) {
    //   closePopup();
    //   return { ...prevState, errors, isSubmitting: false, formValues: { name, comment } };
    // }

    closePopup();
    setInputLengths({ name: 0, comment: 0 });
    return { ...prevState, errors: {}, isSubmitting: true, formValues: { name, comment } };
  }

  const handlePopupButtonClick = () => {
    if (
      Object.keys(formState.errors).length === 0 &&
      inputLengths.name > 0 &&
      inputLengths.comment > 0
    ) {
      setInputsErrorText({ name: '', comment: '' });
      openPopup(EPopupVariant.Page);
    } else {
      setInputsErrorText((prev) => ({
        ...prev,
        name:
          // formState.errors.name ||
          inputLengths.name <= 0 ? 'Name is required' : '',
        comment:
          //  formState.errors.comment ||
          inputLengths.comment <= 0 ? 'Comment is required' : '',
      }));
    }
  };

  return (
    <S.ContentWrapper>
      <S.CreateBidForm action={formAction} id="bid-form">
        <S.FormBlocksWrapper>
          <S.Block1>
            <S.BlockDescription>Inscription</S.BlockDescription>
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
          </S.Block1>
        </S.FormBlocksWrapper>
      </S.CreateBidForm>
      <S.CreateBidButton
        onClick={handlePopupButtonClick}
        variant={EButtonVariant.Primary}
        text="Create bid"
        icon={<CreateBidButtonIcon />}
      />
    </S.ContentWrapper>
  );
};
