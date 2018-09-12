import React from 'react';

const Alert = ({ text, type }) => (
  <div
    className={`alert alert-${type} alert-dismissible fade show`}
    role="alert"
  >
    {text}
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

export default Alert;
