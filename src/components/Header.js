import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h4>{this.props.subtitle}</h4>
      </div>
    );
  }
}
