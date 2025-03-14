import { type FC, useActionState } from 'react';
import { BidBlock } from 'features/CreateBidForm/components/ui/BidBlock';
import { DateBlock } from 'features/CreateBidForm/components/ui/DateBlock';
import { EActiveButton, IdeaBlock } from 'features/CreateBidForm/components/ui/IdeaBlock';
import { InscriptionBlock } from 'features/CreateBidForm/components/ui/InscriptionBlock';
import { inputLimits } from 'features/CreateBidForm/constants/input-limits';
import { usePopup } from 'features/Popup';
import { EPopupVariant } from 'features/Popup/types/popup-variants';
import CreateBidButtonIcon from 'shared/assets/icons/links/create-bid.svg?react';
import { EButtonVariant, ISelectOption } from 'shared/components/ui';

import { useIdeaBlockLogic } from './hooks/useIdeaBlockLogic';
import { useInscriptionBlockLogic } from './hooks/useInscriptionBlockLogic';

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

  const { inputLengths, handleInputChange, clearInscriptionBlockInputsState } =
    useInscriptionBlockLogic();

  const {
    activeIdeaButton,
    optionCoin,
    optionExchange,
    handleSelectValueCoinChange,
    handleSelectValueExchangeChange,
    handleActiveIdeaButtonClick,
    clearIdeaBlockState,
  } = useIdeaBlockLogic();

  const [formState, formAction] = useActionState(submitForm, {
    isSubmitting: false,
    errors: {},
    formValues: {
      name: '',
      comment: '',
      activeIdeaButton,
      optionCoin,
      optionExchange,
      ideaRate: '',
    },
  });

  async function submitForm(prevState: IFormState, formData: FormData) {
    const name = formData.get('name') as string;
    const comment = formData.get('comment') as string;
    const activeIdeaButton = formData.get('idea-active-button') as EActiveButton;
    const optionCoin = formData.get('idea-coin') as unknown as ISelectOption;
    const optionExchange = formData.get('idea-exchange') as unknown as ISelectOption;
    const ideaRate = formData.get('idea-input-rate') as string;

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
    clearInscriptionBlockInputsState();
    clearIdeaBlockState();

    return {
      ...prevState,
      errors: {},
      isSubmitting: true,
      formValues: { name, comment, activeIdeaButton, optionCoin, optionExchange, ideaRate },
    };
  }

  const handlePopupButtonClick = () => {
    if (Object.keys(formState.errors).length === 0) {
      openPopup(EPopupVariant.Page);
    }
  };

  return (
    <S.ContentWrapper>
      <S.CreateBidForm action={formAction} id="bid-form">
        <S.FormBlocksWrapper>
          <InscriptionBlock
            inputLimits={inputLimits}
            {...formState}
            handleInputChange={handleInputChange}
            inputLengths={inputLengths}
          />
          <IdeaBlock
            activeIdeaButton={activeIdeaButton}
            handleActiveIdeaButton={handleActiveIdeaButtonClick}
            optionCoin={optionCoin}
            optionExchange={optionExchange}
            handleSelectValueCoinChange={handleSelectValueCoinChange}
            handleSelectValueExchangeChange={handleSelectValueExchangeChange}
          />
          <DateBlock />
          <BidBlock />
          <S.CreateBidButton
            onClick={(e) => {
              e.preventDefault();
              handlePopupButtonClick();
            }}
            $variant={EButtonVariant.Primary}
            text="Create bid"
            icon={<CreateBidButtonIcon />}
          />
        </S.FormBlocksWrapper>
      </S.CreateBidForm>
    </S.ContentWrapper>
  );
};
