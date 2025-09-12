import React from 'react';
import './MyComponent.css';

type MyComponentProps = {
  title: string;
  favoriteTeam: string;
};

const MyComponent: React.FC<MyComponentProps> = ({ title, favoriteTeam }) => {
  return (
    <div className="my-component">
      <h1>{title}</h1>
      <p>My favorite football team is <b>{favoriteTeam}</b>!</p>
      <p style={{ fontStyle: 'italic', color: 'darkslategray' }}>- Patrick Nayituriki</p>
    </div>
  );
};

export default MyComponent;
