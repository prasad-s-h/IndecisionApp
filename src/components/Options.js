import React from "react";
import Option from "./Option";

export default class Options extends React.Component {
  render() {
    return (
      <div>
        <button
          className="button button--link" 
          onClick={this.props.handleDeleteOptions}
        >RemoveAll</button>
        {this.props.options.length === 0 && <p>Please provide options</p>}
        {this.props.options.map(option => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={this.props.handleDeleteOption}
          />
        ))}
      </div>
    );
  }
}
