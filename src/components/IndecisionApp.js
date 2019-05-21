import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    optionSelected: undefined
  };
  // constructor(props) {
  //   super(props);
  //   this.handlePick = this.handlePick.bind(this);
  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.state = {
  //     options: []
  //   };
  // }
  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    this.setState(() => ({
      optionSelected:  option
    }) );
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption = (option) => {
    this.setState(prevState => ({
      options: prevState.options.filter(eachOption => eachOption !== option)
    }));
  }
  handleAddOption = (option) => {
    if (!option) {
      return "Enter a valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }
  handleClearSelectedOption = () => {
    this.setState( () => ({
      optionSelected: undefined
    }) )
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {}
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {}
  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          optionSelected={this.state.optionSelected}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}