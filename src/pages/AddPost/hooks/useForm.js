import { useState } from 'react';
import { savePost } from '../../../api';
import { CATEGORIES, PATHS } from '../../../constants';
import moment from 'moment';

function useForm(props) {
  const [category, setCategory] = useState(CATEGORIES.comments);
  const [vote, setVote] = useState(0);
  const [comment, setComment] = useState('');
  const menu = [CATEGORIES.comments, CATEGORIES.spoiler];

  function increase() {
    setVote(vote+1);
  }

  function decrease() {
    setVote(vote-1);
  }

  function handleComment(event) {
    setComment(event.target.value);
  }

  function onSave() {
    const { content, user, history } = props;
    const newPost = {
      category,
      vote,
      comment,
      idcommic: content.id,
      username: user.displayName,
      email: user.email,
      date: moment().format('DD/MM/YYYY')
    };
    savePost(newPost)
      .then(() => history.push(`${PATHS.threads}/${content.id}`))
  }

  return {
    comment,
    decrease,
    handleComment,
    increase,
    menu,
    onSave,
    setCategory,
    vote
  }
}

export { useForm };