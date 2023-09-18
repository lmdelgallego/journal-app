import { useEffect, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({ })

  useEffect(() => {
    createValidators(formValidations)

  }, [formState])


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

      formCheckValues[`${formField}Valid`] = validation(formState[formField]) ? null : message
      // formCheckValues[formField] = {
      //   isValid: validation(formState[formField]),
      //   message
      // }
    }
    console.log(formCheckValues);
    setFormValidation(formCheckValues)
  }

  return {
    ...formState,
    ...formValidation,
    formState,
    onInputChange,
    onResetForm
  };
};