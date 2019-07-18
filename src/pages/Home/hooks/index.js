import { useState, useEffect } from 'react';
import { fetchCommics } from '../../../api';
import { ITEMS_PER_REQUEST } from '../../../constants';

function useHome() {
  const [data, setData] = useState('');
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  function updateFilter(commicFilter) {
    setFilter(commicFilter);
  }

  function onForwards() {
    setOffset(offset + ITEMS_PER_REQUEST);
  }

  function onBackwards() {
    setOffset(offset + ITEMS_PER_REQUEST*-1);
  }

  useEffect(() => {
    setOffset(0);
  }, [filter]);

  useEffect(() => {
    setLoading(true);
  }, [filter, offset]);

  useEffect(() => {
    if (loading) {
      fetchCommics({ titleStartsWith: filter, offset })
      .then((result) => {
        setData(result);
        setLoading(false);
      });
    }
  }, [loading, filter, offset, data]);

  return {
    data,
    fetchCommics,
    loading,
    offset,
    onBackwards,
    onForwards,
    setData,
    setLoading,
    updateFilter
  }
}

export { useHome };