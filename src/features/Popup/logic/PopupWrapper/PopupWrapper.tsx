import { FC, ReactNode } from 'react';
import { usePopup } from 'features/Popup/logic/PopupProvider/PopupProvider';
import { ReactComponent as CloseIcon } from 'shared/assets/icons/close/close-dark-l.svg';

import * as S from './PopupWrapper.styled';

interface PopupProps {
  renderContent?: ReactNode;
}

export const PopupWrapper: FC<PopupProps> = ({ renderContent }) => {
  const { isPopupOpen, closePopup } = usePopup();

  if (!isPopupOpen) return null;
  return (
    <S.Overlay onClick={closePopup}>
      <S.Popup onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={closePopup}>
          <CloseIcon />
        </S.CloseButton>
        {renderContent}
      </S.Popup>
    </S.Overlay>
  );
};
