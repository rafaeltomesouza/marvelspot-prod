import { useState, useEffect } from 'react';
import { fetchCommicById } from '../../../api';

function useThreads(props) {
  const { idcommic } = props;
  const [commic, setCommic] = useState('');

  useEffect(() => {
    fetchCommicById(idcommic)
      .then((result) => {
        setCommic(result);
      });
  },[idcommic]);

  return {
    commic
  }
}

export { useThreads };