import React from 'react';
import Alert from './Alert';

const Alerts = ({ alerts }) => {
  if (alerts)
    return (
      <section id="alerts">
        <div className="container">
          { alerts.map(({ type, text }) => (
            <Alert type={type} text={text} key={text} />
          ))}
        </div>
      </section>
    );
};

export default Alerts;

