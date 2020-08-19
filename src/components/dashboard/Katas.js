import React from "react";
import uuid from "uuid/v4";
import Kata from "../layout/Kata";
import { connect } from "react-redux";

const Katas = ({ katas }) => {
  return (
    <div className="deck katas">
      {katas.map(g => {
        return <Kata key={uuid()} kata={g} />;
      })}
    </div>
  );
};

const mapStateToProps = state => ({ katas: state.katas });

export default connect(mapStateToProps)(Katas);
