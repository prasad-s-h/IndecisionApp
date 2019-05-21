import React from "react";

export default class Option extends React.Component {
  render() {
    return (
      <div className="option">
        <p>{this.props.count}. {this.props.optionText}</p>
        <button
          className="button button--link"
          onClick={(e) => {
            e.preventDefault();
            this.props.handleDeleteOption(this.props.optionText);
          }}
        >
          Remove
        </button>
      </div>
    );
  }
}
