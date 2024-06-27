import { useState, ChangeEvent } from "react";

interface FormState {
  [key: string]: any;
}

export const useForm = (initialForm: FormState = {}) => {
  const [formState, setFormState] = useState<FormState>(initialForm);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
