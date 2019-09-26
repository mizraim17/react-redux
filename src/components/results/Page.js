import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "../appBar";

const Page = props => (
  <>
    <CssBaseline />
    <AppBar>
      Result={props.suggestion.length > 0 ? props.suggestion[0].title : ""}
    </AppBar>
  </>
);

export default Page;
