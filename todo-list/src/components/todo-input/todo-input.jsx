import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './todo-input.css';

library.add(faPlus);

const TodoInput = ({ onChange, onKeyPress, value }) => {
    return (
        <div className="todo-input-wrapper">
            <FontAwesomeIcon icon="plus" />
            <input
                className="todo-input"
                placeholder="Click to add task"
                value={ value }
                onChange={ onChange }
                onKeyPress={ onKeyPress }
            />
        </div>
    )
}

TodoInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func
}

TodoInput.defaultProps  = {
    value: '',
    onChange: () => {},
    onKeyPress: () => {}
}

export default TodoInput;
