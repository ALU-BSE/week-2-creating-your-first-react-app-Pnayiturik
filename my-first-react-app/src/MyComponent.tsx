import React from 'react';
import './MyComponent.css';

const MyComponent: React.FC = () => {
  return (
    <div className="my-component">
      <h1 style={{ fontSize: '3em', fontWeight: 'bold', color: 'navy', marginBottom: '1.5rem' }}>
        Hello from MyComponent!
      </h1>
      <p style={{ fontSize: '1.2em', color: '#fff', marginBottom: '1.5rem' }}>
        This is a paragraph of text within my component.
      </p>
      <p style={{ fontStyle: 'italic', color: 'darkslategray' }}>- Patrick Nayituriki</p>
    </div>
  );
};

export default MyComponent;
