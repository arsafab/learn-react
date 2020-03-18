import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export const Placeholder = () => {
  return (
    <>
      <ButtonToolbar>
        <Button variant="outline-primary">Primary</Button>
        <Button variant="outline-secondary">Secondary</Button>
        <Button variant="outline-success">Success</Button>
        <Button variant="outline-warning">Warning</Button>
        <Button variant="outline-danger">Danger</Button>
        <Button variant="outline-info">Info</Button>
        <Button variant="outline-light">Light</Button>
        <Button variant="outline-dark">Dark</Button>
      </ButtonToolbar>

      <Alert variant="primary">This is a primary alert—check it out!</Alert>
    </>
  );
};
