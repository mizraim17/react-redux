import React from "react";
import Page from "./Page";
import { connect } from "react-redux";

const Details = () => <Page></Page>;

const mapStateToProps = state => {
  return {
    suggestion: state.suggestion
  };
};

const wrapper = connect(mapStateToProps);
export default Details;
