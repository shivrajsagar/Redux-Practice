import React from "react";

const Modal = ({ status ,onCancel}) => {
  return (
    <div className={`ui ${status} fullscreen transition  modal`}>
      <div class="header">Header</div>
      <div class="content">
        <p></p>
      </div>
      <div class="actions">
        <div class="ui approve button" >Approve</div>
        <div class="ui button">Neutral</div>
        <div class="ui cancel button" onClick={onCancel} >Cancel</div>
      </div>
    </div>
  );
};

export default Modal;
