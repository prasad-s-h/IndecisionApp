import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const OptionModal = (props) =>  (
      <Modal isOpen={!!props.optionSelected} contentLabel="Selected Option" onRequestClose={props.handleClearSelectedOption}>
        <h3>Selected Option</h3>
        {props.optionSelected && <p>{props.optionSelected}</p>}
        <button onClick={props.handleClearSelectedOption}>okay</button>
      </Modal>
    );


export default OptionModal;