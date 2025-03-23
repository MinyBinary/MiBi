import { type FC, useActionState } from 'react';
import { BidBlock } from 'entities/CreateBidForm/components/ui/BidBlock';
import { EActiveBidButton } from 'entities/CreateBidForm/components/ui/BidBlock/types/bid-block-types';
import { DateBlock } from 'entities/CreateBidForm/components/ui/DateBlock';
import { EActiveDateButton } from 'entities/CreateBidForm/components/ui/DateBlock/types/date-block-types';
import { EActiveButton, IdeaBlock } from 'entities/CreateBidForm/components/ui/IdeaBlock';
import { InscriptionBlock } from 'entities/CreateBidForm/components/ui/InscriptionBlock';
import { inputLimits } from 'entities/CreateBidForm/constants/input-limits';
import { useBidBlockLogic } from 'entities/CreateBidForm/hooks/useBidBlockLogic';
import { useDateBlockLogic } from 'entities/CreateBidForm/hooks/useDateBlockLogic';
import { useIdeaBlockLogic } from 'entities/CreateBidForm/hooks/useIdeaBlockLogic';
import { useInscriptionBlockLogic } from 'entities/CreateBidForm/hooks/useInscriptionBlockLogic';
import { usePopup } from 'features/Popup';
import { EPopupVariant } from 'features/Popup/types/popup-variants';
import CreateBidButtonIcon from 'shared/assets/icons/links/create-bid.svg?react';
import { EButtonVariant, ISelectOption } from 'shared/components/ui';

import { useBidForm } from './hooks/useBidForm';

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

  const { dateValue, activeDateButton, handleActiveDateButton, clearDateBlockState } =
    useDateBlockLogic();

  const {
    activeBidButton,
    optionCoin1,
    optionCoin2,
    handleSelectBidValueCoin1Change,
    handleSelectBidValueCoin2Change,
    handleActiveBidButton,
    clearBidBlockState,
  } = useBidBlockLogic();

  const { saveFormValuesToLocalStorage } = useBidForm();

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
      activeBidButton,
      optionCoin1,
      optionCoin2,
      bidAmount: '',
      activeDateButton,
      dateValue: '',
      localDateValue: '',
    },
  });

  async function submitForm(prevState: IFormState, formData: FormData) {
    const name = formData.get('name') as string;
    const comment = formData.get('comment') as string;
    const activeIdeaButton = formData.get('idea-active-button') as unknown as EActiveButton;
    const optionCoin = formData.get('idea-coin') as unknown as ISelectOption;
    const optionExchange = formData.get('idea-exchange') as unknown as ISelectOption;
    const ideaRate = formData.get('idea-input-rate') as string;
    const activeBidButton = formData.get('bid-active-button') as EActiveBidButton;
    const optionCoin1 = formData.get('bid-coin1') as unknown as ISelectOption;
    const optionCoin2 = formData.get('bid-coin2') as unknown as ISelectOption;
    const bidAmount = formData.get('bid-input-amount') as string;
    const activeDateButton = formData.get('date-active-button') as unknown as EActiveDateButton;
    const dateValue = formData.get('date-input-value') as string;
    const localDateValue = formData.get('local-date-input-value') as string;

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
    clearDateBlockState();
    clearBidBlockState();
    //TODO change logic

    saveFormValuesToLocalStorage({
      formValues: {
        name,
        comment,
        activeIdeaButton,
        optionCoin,
        optionExchange,
        ideaRate,
        activeBidButton,
        optionCoin1,
        optionCoin2,
        bidAmount,
        activeDateButton,
        dateValue,
        localDateValue,
      },
    });
    //TODO change naming
    return {
      ...prevState,
      errors: {},
      isSubmitting: true,
      formValues: {
        name,
        comment,
        activeIdeaButton,
        optionCoin,
        optionExchange,
        ideaRate,
        activeBidButton,
        optionCoin1,
        optionCoin2,
        bidAmount,
        activeDateButton,
        dateValue,
        localDateValue,
      },
    };
  }

  const handlePopupButtonClick = () => {
    if (Object.keys(formState.errors).length === 0) {
      openPopup(EPopupVariant.SubmitBidForm);
    }
  };

  return (
    <S.ContentWrapper>
      <S.CreateBidForm action={formAction} id="bid-form">
        <S.FormBlocksWrapper>
          <InscriptionBlock
            inputLimits={inputLimits}
            inputLengths={inputLengths}
            handleInputChange={handleInputChange}
          />
          <IdeaBlock
            activeIdeaButton={activeIdeaButton}
            optionCoin={optionCoin}
            optionExchange={optionExchange}
            handleActiveIdeaButton={handleActiveIdeaButtonClick}
            handleSelectValueCoinChange={handleSelectValueCoinChange}
            handleSelectValueExchangeChange={handleSelectValueExchangeChange}
          />
          <DateBlock
            dateValue={dateValue}
            activeDateButton={activeDateButton}
            handleActiveDateButton={handleActiveDateButton}
          />
          <BidBlock
            activeBidButton={activeBidButton}
            optionCoin1={optionCoin1}
            optionCoin2={optionCoin2}
            handleActiveBidButton={handleActiveBidButton}
            handleSelectBidValueCoin1Change={handleSelectBidValueCoin1Change}
            handleSelectBidValueCoin2Change={handleSelectBidValueCoin2Change}
          />
          <S.CreateBidButton
            onClick={(e) => {
              e.preventDefault();
              handlePopupButtonClick();
            }}
            variant={EButtonVariant.Primary}
            text="Create bid"
            icon={<CreateBidButtonIcon />}
          />
        </S.FormBlocksWrapper>
      </S.CreateBidForm>
    </S.ContentWrapper>
  );
};
