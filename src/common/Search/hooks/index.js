import { useState } from 'react';

function useSearch() {
  const [input, setInput] = useState('');

  return {
    input,
    setInput
  }
}

export {useSearch};