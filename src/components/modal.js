import React from "react";
import "./modal.scss";

export const Modal = ({title, onCancel}) => (
  <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        <button className="delete" aria-label="close" onClick={onCancel}></button>
      </header>
      <section className="modal-card-body">
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success">Save changes</button>
        <button className="button" onClick={onCancel}>Cancel</button>
      </footer>
    </div>
  </div>
);

export const ModalWrapper = ({children}) => (
  <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-card">
      {children}
    </div>
  </div>
);

export const ModalHeader = ({title, onCancel, children}) => (
  <header className="modal-card-head">
    <p className="modal-card-title">{title}</p>
    <button className="delete" aria-label="close" onClick={onCancel}></button>
    {children}
  </header>
);

export const ModalBody = ({children}) => (
  <section className="modal-card-body">
    {children}
  </section>
);

export const ModalFooter = ({onCancel}) => (
  <footer className="modal-card-foot">
    <button className="button" onClick={onCancel}>Close</button>
  </footer>
);