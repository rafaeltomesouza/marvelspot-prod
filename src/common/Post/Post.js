import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles/_post.scss';

function Post(props) {

  const { invert, content } = props;

  const styleContainer = cx('post', {
    'post__invert': invert
  });

  const styleVote = cx({
    'post__vote': !invert,
    'post__invert__vote': invert
  });

  const styleAuthor = cx({
    'post__author': !invert,
    'post__invert__author': invert
  });

  const styleCategory = cx({
    'post__category': !invert,
    'post__invert__category': invert
  });

  const styleDescription = cx({
    'post__description': !invert,
    'post__invert__description': invert
  });

  return(
    <section className={styleContainer}>
      <div className={styleVote}>
        <span>
          vote: {content.vote}
        </span>
      </div>
      <div className={styleAuthor}>by {content.username} | date: {content.date}</div>
      <div className={styleCategory}>{content.category}</div>
      <div className={styleDescription}>
        {content.comment}
      </div>
    </section>
  )
}

Post.defaultProps ={
  invert: false
}

Post.prototype = {
  invert: PropTypes.bool,
  content: PropTypes.object.isRequired
}

export default Post;
