import React from 'react';
import { Header } from '../../../common/Header';
import { Comic } from '../../../common/Comic';
import { Post } from '../../../common/Post';
import { Loading } from '../../../common/Loading';
import { MENU_THREADS } from '../../../constants';
import { useThreads } from '../hooks/useThreads';
import { NotFound } from '../../../common/NotFound';
import { usePosts } from '../hooks/usePosts';
import '../styles/_threads.scss';

function Threads(props) {
  const { idcommic } = props.match.params;
  const { commic } = useThreads({ idcommic });
  const { posts, loading, score } = usePosts({ idcommic });

  function getPosts() {
    if (posts) {
      return Object.keys(posts);
    }
    return [];
  }

  return (
    <div className="threads">
      <Header />
      <article>
        {commic && (
          <React.Fragment>
            <Comic
              score
              menu={MENU_THREADS}
              content={commic}
              scoreValue={score}
            />
            <section className="threads__comments">
              <p>
                Comments
              </p>
              {loading && <Loading />}
              {
                getPosts().length > 0 ?
                  getPosts().map(
                    (key, index) => <Post
                      key={commic.id+index}
                      invert={index % 2 !== 0}
                      content={posts[key]}
                    />
                  ) : <NotFound />
              }
            </section>
          </React.Fragment>
        )}
      </article>
    </div>
  )
}

export default Threads;