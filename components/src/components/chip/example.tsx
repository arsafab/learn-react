import React, { Component, Fragment } from 'react';
import Chip from './chip';

interface State {
    people: Array<{ name: string, active?: boolean }>
}

interface Props {
    [key: string]: any
}

class Example extends Component<Props, State> {
  state = {
    people: [
      {
        name: 'Max',
        active: false
      },
      {
        name: 'Jack',
        active: false
      },
      {
        name: 'Leo',
        active: false
      },
    ],
  }

  removeChip = (e: React.MouseEvent, id: string | number) => {
    this.setState(({ people }) => ({
      people: people.filter(({ name }) => name !== id),
    }));
  }

  toggleActiveChip = (id: string | number) => {
    this.setState(({ people }) => ({
      people: people.map(({ name, active }) => {
        if (name === id) {
          active = !active;
        }
        return {
          name,
          active,
        };
      }),
    }));
  }

  render() {
    const { people } = this.state;

    return (
      <Fragment>
        {people.map(({ name, active }) => (
          <Chip
            text={name}
            key={name}
            id={name}
            className={active ? 'active' : ''}
            withClose
            withIcon
            onCloseClick={this.removeChip}
            onChipClick={this.toggleActiveChip}
          />
        ))}
      </Fragment>
    );
  }
}

export default Example;
