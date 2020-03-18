import React from 'react';

interface IProps {
  children: JSX.Element[] | JSX.Element | string;
}

export const Root: React.FC<IProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};
