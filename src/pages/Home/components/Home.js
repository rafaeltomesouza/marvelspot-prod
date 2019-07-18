import React from 'react';
import cx from 'classnames';
import { Header } from '../../../common/Header';
import { Search } from '../../../common/Search';
import { Comic } from '../../../common/Comic';
import { MENU_HOME } from '../../../constants';
import { useHome } from '../hooks';
import { Loading } from '../../../common/Loading';
import { Button } from '../../../common/Button';
import '../styles/_home.scss';

function Home(props) {
  const {
    data,
    loading,
    updateFilter,
    offset,
    onBackwards,
    onForwards
  } = useHome();

  const styleBackwards = cx('home__btn__loading-more', {
    'home__btn__loading-more--hide': offset === 0,
  });

  return (
    <div className="home">
      <Header />
      <Search
        updateFilter={updateFilter}
        placeholder={'Search for you favorite character'}
      />
      <article>
        {loading && <Loading />}
        {!loading && data && data.results.map(
          (commic, index) =>
            <Comic
              key={commic.id}
              menu={MENU_HOME}
              invert={index % 2 !== 0}
              content={commic}
            />
        )
        }
      </article>
      <div className="home__btn">
        <Button
          alt={'backwards'}
          onClick={onBackwards}
          className={styleBackwards}
          text={'< backwards'}
        />
        <Button
          alt={'forwards'}
          onClick={onForwards}
          className={'home__btn__loading-more'}
          text={offset === 0 ? 'Loading more ...' : 'forwards >'}
        />
      </div>
    </div>
  )
}

export default Home;