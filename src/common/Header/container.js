import { connect } from 'react-redux';
import Header from './components/Header';
import { doLogout } from '../../actions';

const mapStateToProps = state => {
  return {
    username: state.info.user
  }
};

const mapDispatchToProps = {
  doLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
