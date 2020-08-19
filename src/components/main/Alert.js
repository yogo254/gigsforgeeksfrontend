import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import uuid from "uuid/v4";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <p key={uuid()} className="col s12 m12 l12 black white-text">
      {alert.msg}
    </p>
  ));
const mapStateToProps = state => ({
  alerts: state.alert
});

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Alert);
