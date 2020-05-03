import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withRouter } from "react-router";
import Stages from './Stages';

import * as stageTaskActions from '../../actions/stageTasks';


function mapStateToProperties(state) {
  const { stages } = state;
  return {
    stages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...stageTaskActions
    },
    dispatch,
  );
}

export default withRouter(connect(
  mapStateToProperties,
  mapDispatchToProps,
)(Stages));
