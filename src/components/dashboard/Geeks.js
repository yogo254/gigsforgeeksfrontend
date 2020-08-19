import React from "react";
import uuid from "uuid/v4";
import Geek from "../layout/Geek";
import { connect } from "react-redux";

const Geeks = ({ geeks }) => {
  return (
    <div className="deck geeks">
      {geeks.map(g => {
        return <Geek key={uuid()} geek={g} />;
      })}
    </div>
  );
};

const mapStateToProps = state => ({ geeks: state.geeks });

export default connect(mapStateToProps)(Geeks);
