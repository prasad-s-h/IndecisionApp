import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const OptionModal = (props) =>  (
      <Modal 
       isOpen={!!props.optionSelected} 
       contentLabel="Selected Option" 
       onRequestClose={props.handleClearSelectedOption}
       closeTimeoutMS={200}
       className="modal"
      >
        <h3 className="modal__title">Selected Option</h3>
        {props.optionSelected && <p className="modal__body">{props.optionSelected}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>okay</button>
      </Modal>
    );

export default OptionModal;