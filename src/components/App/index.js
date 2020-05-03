import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withRouter } from "react-router";
import App from './App';


function mapStateToProperties(state) {
  const { stages } = state;
  return {
    stages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    },
    dispatch,
  );
}

export default withRouter(connect(
  mapStateToProperties,
  mapDispatchToProps,
)(App));
