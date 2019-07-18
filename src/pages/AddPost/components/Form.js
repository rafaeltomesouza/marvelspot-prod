import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../common/Button';
import { Category } from '../../../common/Category';
import { withRouter } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import '../styles/_form.scss';

function Form(props) {
  const { content, user, history } = props;
  const {
    comment,
    decrease,
    handleComment,
    increase,
    menu,
    onSave,
    setCategory,
    vote
  } = useForm({ content, user, history });

  return (
    <section className="addpost__form">
      <div className="addpost__form-title">
        Type your comment or spoiler
      </div>
      <section className="addpost__form-inputs">
        <div className="addpost__form-inputs__vote">
          <label htmlFor="vote">
            Vote
          </label>
          <section className="addpost__form-inputs__vote__container">
            <div
              className="addpost__form-inputs__vote__container__plus"
              onClick={increase}
            >
              +
            </div>
            {vote}
            <div className="addpost__form-inputs__vote__container__minus"
              onClick={decrease}
            >
              -
            </div>
          </section>
        </div>
        <Category
          menu={menu}
          selected={setCategory}
        />
        <div className="addpost__form-inputs__comment">
          <label htmlFor="comment">
            Post
          </label>
          <textarea
            id="comment"
            name="comment"
            rows="5"
            cols="25"
            value={comment}
            onChange={handleComment}
          />
        </div>
        <div className="addpost__form-inputs__content-btn">
          <Button
            alt="Save"
            className="addpost__form-inputs__content-btn__save"
            onClick={onSave}
            text="Save"
          />
        </div>
      </section>
    </section>
  )
}

export default withRouter(Form);

Form.propTypes = {
  user: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired
}
