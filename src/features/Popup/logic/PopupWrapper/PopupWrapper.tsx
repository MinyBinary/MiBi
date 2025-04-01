import { FC, ReactNode, useEffect } from 'react';
import { usePopup } from 'features/Popup';
import CloseIcon from 'shared/assets/icons/close/close-x.svg?react';
import { useScroll } from 'shared/hooks/useScroll';

import * as S from './PopupWrapper.styled';

interface PopupProps {
  renderTittle?: ReactNode;
  renderContent?: ReactNode;
}

export const PopupWrapper: FC<PopupProps> = ({ renderTittle, renderContent }) => {
  const { isPopupOpen, closePopup } = usePopup();

  const { handleDisableScroll } = useScroll();

  useEffect(() => {
    if (isPopupOpen) {
      handleDisableScroll();
    }
  }, [isPopupOpen, handleDisableScroll]);

  if (!isPopupOpen) return null;
  return (
    <S.Overlay onClick={closePopup}>
      <S.Popup onClick={(e) => e.stopPropagation()}>
        <S.PopupHeader>
          {renderTittle && <S.PopupTittle>{renderTittle}</S.PopupTittle>}
          <S.CloseIconWrapper>
            <S.CloseButton onClick={closePopup}>
              <CloseIcon width={16} height={16} />
            </S.CloseButton>
          </S.CloseIconWrapper>
        </S.PopupHeader>
        {renderContent}
      </S.Popup>
    </S.Overlay>
  );
};
