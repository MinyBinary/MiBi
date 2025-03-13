import { FC, useState } from 'react';
import ArrowDownIcon from 'shared/assets/icons/arrows/arrow-down.svg?react';
import { useClickOutside } from 'shared/hooks/useClickOutside';

import { ISelectOption } from './types/select-option';

import * as S from './Select.styled';

interface IPropsSelect extends React.HTMLAttributes<HTMLDivElement> {
  options: ISelectOption[];
  dropDownHeight?: number;
  current?: ISelectOption;
  placeholder?: string;
  textRight?: boolean;
  classNameDropDown?: string;
  handleSelect?: ({ icon, label, value }: ISelectOption) => void;
}

export const Select: FC<IPropsSelect> = ({
  options,
  dropDownHeight = 194,
  current,
  placeholder,
  textRight = false,
  classNameDropDown,
  handleSelect,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const PLACEHOLDER_DEFAULT_TEXT = 'Select';
  return (
    <S.Wrapper ref={selectRef} {...props}>
      <S.Button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        {current?.icon && <S.IconWrapper>{current.icon}</S.IconWrapper>}
        {current?.label && <S.LabelText $textRight={textRight}>{current?.label}</S.LabelText>}
        {!current?.label && (
          <S.PlaceholderText>{placeholder || PLACEHOLDER_DEFAULT_TEXT}</S.PlaceholderText>
        )}
        <S.ArrowWrapper $isOpen={isOpen}>
          <ArrowDownIcon />
        </S.ArrowWrapper>
      </S.Button>
      <S.Dropdown $isOpen={isOpen} $dropDownHeight={dropDownHeight} className={classNameDropDown}>
        {options.map((option) => (
          <S.Option
            key={option.value}
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              handleSelect?.(option);
              setIsOpen(false);
            }}
            onKeyDown={(e) => {
              e.preventDefault();
              if (e.key === 'Enter') {
                handleSelect?.(option);
                setIsOpen(false);
              }
            }}
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
