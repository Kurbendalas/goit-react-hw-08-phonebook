import React from 'react';

const errorComponentStyles = {
  margin: '0 auto',
  textAlign: 'center',
};

function ErrorComponent({ errorMessage }) {
  return (
    <div style={errorComponentStyles}>
      <p className="global-p">{errorMessage}</p>
    </div>
  );
}

export default ErrorComponent;