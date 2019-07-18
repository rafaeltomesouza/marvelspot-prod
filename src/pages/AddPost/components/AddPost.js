import React from 'react';
import { Header } from '../../../common/Header';
import { Comic } from '../../../common/Comic';
import { MENU_POST } from '../../../constants';
import { useAddPost } from '../hooks/useAddPost';
import Form from './containerForm';
import '../styles/_addpost.scss';

function AddPost(props) {
  const { idcommic } = props.match.params;
  const { commic } = useAddPost({ idcommic });

  return (
    <div className="addpost">
      <Header />
      <article>
        {commic && (
          <React.Fragment>
            <Comic
              menu={MENU_POST}
              content={commic}
            />
            <Form content={commic}/>
          </React.Fragment>
        )}
      </article>
    </div>
  )
}

export default AddPost;
