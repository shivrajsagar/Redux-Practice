import React from "react";

const Modal = ({ status, onCancel }) => {
  return (
    <div className={`ui ${status} fullscreen transition  modal`}>
      <div className="header">Header</div>
      <div className="content">
        <p></p>
      </div>
      <div className="actions">
        <div className="ui approve button">Approve</div>
        <div className="ui button">Neutral</div>
        <div className="ui cancel button" onClick={onCancel}>
          Cancel
        </div>
      </div>
    </div>
  );
};

export default Modal;
