import React from 'react';
import { Navigation } from '../Navigation';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles/_comic.scss';

function Comic(props) {
  const { invert, menu, content, score, scoreValue } = props;

  const styleContainer = cx('comic', {
    'comic__invert': invert
  });

  const styleContent = cx({
    'comic__content': !invert,
    'comic__invert__content': invert
  });

  const styleCommic = cx({
    'comic__content__comic': !invert,
    'comic__invert__content__comic': invert
  });

  const styleImage = cx({
    'comic__content__comic__image': !invert,
    'comic__invert__content__comic__image': invert
  });

  return (
    <section className={styleContainer}>
      <Navigation
        invert={invert}
        menu={menu}
        id={content.id}
      />
      <section className={styleContent}>
        <div className={styleCommic}>
          {score && (<aside>
            <div>Vote</div>
            <div>{scoreValue}</div>
          </aside>)}
          <div className={styleImage}>
            <img alt="commic cover" src={`${content.thumbnail.path}/portrait_xlarge.${content.thumbnail.extension}`} />
          </div>
          <section>
            <p>{content.title}</p>
            <p>
              {content.description}
            </p>
          </section>
        </div>
      </section>
    </section>
  )
}

export default Comic;

Comic.defaultProps = {
  invert: false,
  score: false,
  scoreValue: 0
}

Comic.prototype = {
  invert: PropTypes.bool,
  score: PropTypes.bool,
  scoreValue: PropTypes.number,
  menu: PropTypes.array.isRequired,
  content: PropTypes.object.isRequired
}