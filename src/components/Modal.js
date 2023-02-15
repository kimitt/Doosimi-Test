import React from 'react';

const Modal = (props) => {
  const { open, close } = props;

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <div className="modal-section">
          <div>
            <button className="close-button" onClick={close}>
              &times;
            </button>
          </div>
          <main>{props.children}</main>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
