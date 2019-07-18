import React from 'react';
import { Button } from '../../../common/Button';
import { Logotype } from '../../../common/Logotype';
import '../styles/_login.scss';

function Login(props) {

  function onLogin() {
    const { doAuthentication, history } = props;
    doAuthentication(history);
  }

  return (
    <section className="login">
      <header className="login__header" />
      <nav>
        <Logotype />
        <p className="normal">
          The best place you can find commentaries <br />
          and spoilers of all marvel’s comics database
        </p>
        <p className="highlight">
          Try Now!
        </p>
        <Button
          alt={'connect to google'}
          onClick={onLogin}
          className={'login__google'}
          text={'Connect with Google'}
        />
      </nav>
    </section>
  )
}

export default Login;
