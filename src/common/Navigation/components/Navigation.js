import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/_navigation.scss';

function Navigation(props) {
  const { invert, menu, id } = props;

  const styleContent = cx({
    'commic-nav': !invert,
    'commic-nav__invert': invert
  });

  function getPath(item) {
    if (Object.prototype.hasOwnProperty.call(item,'noId')) {
      return `/${item.path}`;
    }
    return id ? `/${item.path}/${id}` : `/${item.path}`
  }

  return (
    <nav className={styleContent}>
      <ul>
        {
          menu
          && menu.map(item =>
            <li key={item.name}>
              <Link to={getPath(item)}>{item.name}</Link>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default Navigation;

Navigation.defaultProps = {
  id: void 0,
  invert: false
}

Navigation.prototype = {
  id: PropTypes.string,
  invert: PropTypes.bool,
  menu: PropTypes.array.isRequired
}