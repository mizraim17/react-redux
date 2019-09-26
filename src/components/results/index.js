import React from "react";
import Page from "./Page";
import { connect } from "react-redux";

const Results = props => {
  return (
    <>
      {console.log("suggestion", props.suggestion)}{" "}
      <Page suggestion={props.suggestion}></Page>
    </>
  );
};

const mapStateToProps = state => {
  return {
    suggestion: state.suggestion
  };
};

// const wrapper = connect(mapStateToProps);
// const component = wrapper(Results);

export default connect(mapStateToProps)(Results);
