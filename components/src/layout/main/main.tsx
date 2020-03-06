import React from 'react';
import './main.css';

interface props {
    children: any
}

const Main: React.FC<props> = ({ children }) => (
  <div className="main">
    {children}
  </div>
);

export default Main;
