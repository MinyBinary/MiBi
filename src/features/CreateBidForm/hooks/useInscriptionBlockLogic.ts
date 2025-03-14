import { ChangeEvent, useState } from 'react';
import { formatTextOutput } from 'shared/utils';

interface IPropsInscriptionBlock {
  inputLengths: { name: number; comment: number };
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  clearInscriptionBlockInputsState: () => void;
}

export const useInscriptionBlockLogic = (): IPropsInscriptionBlock => {
  const [inputLengths, setInputLengths] = useState({
    name: 0,
    comment: 0,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    let { value } = e.target;

    value = formatTextOutput(value);

    setInputLengths((prev) => ({
      ...prev,
      [name]: value.length,
    }));
    e.target.value = value;
    // if (formState.errors[name as keyof IFormState['errors']]) {
    //   formAction(new FormData(e.currentTarget.form!));
    // }
  };

  const clearInscriptionBlockInputsState = () => {
    setInputLengths({ name: 0, comment: 0 });
  };

  return {
    inputLengths,
    handleInputChange,
    clearInscriptionBlockInputsState,
  };
};
