import { FC, ReactElement, useState } from 'react';
import ArrowDownIcon from 'shared/assets/icons/arrows/arrow-down.svg?react';
import { useClickOutside } from 'shared/hooks/useClickOutside';

import * as S from './Select.styled';

export interface ISelectOption {
  icon?: ReactElement;
  value: string;
  label: string;
}

interface IPropsSelect {
  options: ISelectOption[];
  dropDownHeight?: number;
  current?: ISelectOption;
  placeholder?: string;
  textRight?: boolean;
  width?: number;
  borderRadius?: string;
  handleSelect?: ({ icon, label, value }: ISelectOption) => void;
}

export const Select: FC<IPropsSelect> = ({
  options,
  dropDownHeight = 194,
  current,
  placeholder,
  textRight = false,
  width,
  borderRadius,
  handleSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const PLACEHOLDER_DEFAULT_TEXT = 'Select';
  return (
    <S.Wrapper ref={selectRef} $width={width} $borderRadius={borderRadius}>
      <S.Button onClick={() => setIsOpen(!isOpen)}>
        {current?.icon && <S.IconWrapper>{current.icon}</S.IconWrapper>}
        {current?.label && <S.LabelText $textRight={textRight}>{current?.label}</S.LabelText>}
        {!current?.label && (
          <S.PlaceholderText>{placeholder || PLACEHOLDER_DEFAULT_TEXT}</S.PlaceholderText>
        )}
        <S.ArrowWrapper $isOpen={isOpen}>
          <ArrowDownIcon />
        </S.ArrowWrapper>
      </S.Button>
      <S.Dropdown $isOpen={isOpen} $dropDownHeight={dropDownHeight}>
        {options.map((option) => (
          <S.Option
            key={option.value}
            tabIndex={0}
            onClick={() => {
              handleSelect?.(option);
              setIsOpen(false);
            }}
            onKeyDown={(e) => e.key === 'Enter' && (handleSelect?.(option), setIsOpen(false))}
          >
            <S.OptionContent>
              {option.icon && <S.IconWrapper>{option.icon}</S.IconWrapper>}
              {option.label}
            </S.OptionContent>
          </S.Option>
        ))}
      </S.Dropdown>
    </S.Wrapper>
  );
};
