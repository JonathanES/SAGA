import React from 'react';

const ButtonStop = ({ onClick = () => {} }) => (
  <div
    style={{
      margin: 'auto',
      fontSize: '32px',
      fontStyle: 'italic',
      textAlign: 'center',
      cursor: 'pointer',
      backgroundColor: '#d74f41',
      color: 'white',
      fontSize : '15px',
      padding:'4px 4px 4px 4px',
      borderRadius: '4px'
    }}
    onClick={onClick}
  >
    STOP!
  </div>
);

export default ButtonStop;
