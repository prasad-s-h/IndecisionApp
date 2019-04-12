import React from "react";

export default class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
        <button
          onClick={e => {
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
