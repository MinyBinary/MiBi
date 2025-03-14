import { type FC, useState } from 'react';
import { Checkbox, EButtonVariant } from 'shared/components/ui';
import { EColors } from 'shared/styles/style-variables';

import * as S from './ConfirmationPopupContent.styled';

export const ConfirmationPopupContent: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <S.ConfirmationPopupContent>
      <S.ConfirmationText>
        By clicking "CONFIRM", I hereby confirm that from the moment I placed this BID here, and up
        to and including 01.08.25 12 pm UTC+2, the BTC rate on the Binance exchange will reach
        150,000 USDT. I'm ready to give away 100 USDT in the BNB chain if it doesn’t, and to get 100
        USDT in the BNB chain [from several people/from one person] if it does.
      </S.ConfirmationText>
      <S.ConfirmationAgreementWrapper>
        <Checkbox
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
          colorsProps={{
            activeColor: EColors.Green1,
            activeHoverColor: EColors.Green4,
            borderColor: EColors.Black1,
          }}
        />
        <S.ConfirmationText>
          I'd like to send <S.ConfirmationTextWhite>0.2%</S.ConfirmationTextWhite> of the above
          amount, which is additional <S.ConfirmationTextWhite>20 cents</S.ConfirmationTextWhite>{' '}
          from my wallet, to <S.ConfirmationTextWhite>MiBi</S.ConfirmationTextWhite> development and
          for future luck.
        </S.ConfirmationText>
      </S.ConfirmationAgreementWrapper>
      <S.ConfirmationButton
        $isDisabled={!isChecked}
        $variant={EButtonVariant.Bordered}
        form="bid-form"
        type="submit"
        text="Confirm"
        disabled={!isChecked}
      />
    </S.ConfirmationPopupContent>
  );
};
