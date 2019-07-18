import { useState, useEffect } from 'react';
import { fetchPosts } from '../../../api';

function usePosts(props) {
  const { idcommic } = props;
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [posts, setPosts] = useState('');

  useEffect(() => {
    if (loading) {
      fetchPosts(idcommic)
        .then((snapshot) => {
          setLoading(false);
          setPosts(snapshot.val());
        });
    }
  }, [idcommic, loading]);

  useEffect(() => {
    if (posts) {
      const allScores = Object.keys(posts).map(
        key => posts[key].vote
      ).reduce((ac, c) => ac+c);
      setScore(allScores);
    }
  }, [posts]);



  return {
    posts,
    score,
    loading
  }
}

export { usePosts };