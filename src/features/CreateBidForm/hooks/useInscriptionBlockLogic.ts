import { ChangeEvent, useState } from 'react';
import { formatTextOutput } from 'shared/utils';

interface IPropsInscriptionBlock {
  inputsErrorText: { name: string; comment: string };
  inputLengths: { name: number; comment: number };
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  clearInscriptionBlockInputsState: () => void;
  clearInscriptionBlockErrorsState: () => void;
  handleSetInputsErrorText: () => void;
}

export const useInscriptionBlockLogic = (): IPropsInscriptionBlock => {
  const [inputsErrorText, setInputsErrorText] = useState({
    name: '',
    comment: '',
  });
  const [inputLengths, setInputLengths] = useState({
    name: 0,
    comment: 0,
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

  const clearInscriptionBlockInputsState = () => {
    setInputLengths({ name: 0, comment: 0 });
  };

  const clearInscriptionBlockErrorsState = () => {
    setInputsErrorText({ name: '', comment: '' });
  };

  const handleSetInputsErrorText = () => {
    setInputsErrorText((prev) => ({
      ...prev,
      name:
        // formState.errors.name ||
        inputLengths.name <= 0 ? 'Name is required' : '',
      comment:
        //  formState.errors.comment ||
        inputLengths.comment <= 0 ? 'Comment is required' : '',
    }));
  };

  return {
    inputsErrorText,
    inputLengths,
    handleInputChange,
    clearInscriptionBlockInputsState,
    clearInscriptionBlockErrorsState,
    handleSetInputsErrorText,
  };
};
