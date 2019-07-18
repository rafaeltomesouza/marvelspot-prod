import { connect } from 'react-redux';
import Login from './components/Login';
import { doAuthentication } from '../../actions'

const mapDispatchToProps = {
  doAuthentication
};

export default connect(null, mapDispatchToProps)(Login);
