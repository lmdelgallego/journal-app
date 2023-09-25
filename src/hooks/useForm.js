import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({ })

  useEffect(() => {
    createValidators()
  }, [formState])

  useEffect(() => {
    setFormState(initialForm)
  }, [initialForm])

  const isFormValid = useMemo(() => {
    for (const formField of Object.keys(formValidation)) {
      if (formValidation[formField] !== null) return false;
    }
    return true;
  }, [formValidation])

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckValues = {}
    for (const formField of Object.keys(formValidations)) {
      const [ validation, message ] = formValidations[formField];
      formCheckValues[`${formField}Valid`] = validation(formState[formField]) ? null : message;
    }
    setFormValidation(formCheckValues)
  }

  return {
    ...formState,
    ...formValidation,
    formState,
    isFormValid,
    onInputChange,
    onResetForm
  };
};