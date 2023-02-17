/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange({ target }) {
    setValue(target.value);
  }
  return [value, setValue];
}

export default useInput;
