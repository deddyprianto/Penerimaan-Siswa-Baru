/* eslint-disable react/display-name */
import React from "react";

const MyHOOComponent = (Component) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        backgroundColor: "red",
        width: "100px",
        height: "100px",
      };
    }
    render() {
      return <Component {...this.state} />;
    }
  };
export default MyHOOComponent;
