import React from 'react';

const Alerts = ({ alerts }) => {
  if (alerts)
    return (
      <section id="alerts">
        <div className="container">
          { alerts.map(({ type, text }) => (
            <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
              {text}
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Alerts;

