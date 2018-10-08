import React from 'react';

const Container = (props) => (
  props.children && (
    <div className="container">
      { props.children }
    </div>
  )
);

export default Container;
