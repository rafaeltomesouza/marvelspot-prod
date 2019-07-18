import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../Button';
import { Logotype } from '../../Logotype';
import { withRouter } from 'react-router-dom';
import '../styles/_header.scss';

function Header(props) {
  const { username } = props;

  function onLogout() {
    const { history, doLogout } = props;
    doLogout(history);
  }

  return (
    <header className="header">
      <Logotype/>
      <div className="header__logout-container">
        <p className="header__logout-container__username">
          {username.displayName}
        </p>
        <p className="header__logout-container__bar">
          |
        </p>
        <Button
          alt={'logout'}
          onClick={onLogout}
          className="header__logout-container__btn"
          text={'Logout'}
        />
      </div>
    </header>
  )
}

export default withRouter(Header);

Header.prototype = {
  username: PropTypes.string.isRequired,
  doLogout: PropTypes.func.isRequired,
}