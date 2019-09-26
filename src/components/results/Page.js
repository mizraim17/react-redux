import React from "react";

const Page = props => (
  <>Result={props.suggestion.length > 0 ? props.suggestion[0].title : ""}</>
);

export default Page;
