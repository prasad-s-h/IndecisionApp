import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <h3 className="header__title">{this.props.title}</h3>
          <h4 className="header__subtitle">{this.props.subtitle}</h4>
        </div>
      </div>
    );
  }
}
