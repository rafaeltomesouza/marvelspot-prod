import Form from './Form';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.info.user
  }
};


export default connect(mapStateToProps, null)(Form);
