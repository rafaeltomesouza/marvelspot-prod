import { useState, useEffect } from 'react';
import { fetchCommicById } from '../../../api';

function useAddPost(props) {
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

export { useAddPost };