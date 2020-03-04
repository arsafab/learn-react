import React from 'react';
import './todoItem.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add({ faCheckCircle, faCircle, faTimes });

const TodoItem = ({ isCompleted, text, removeTask, completeTask, id }) => {
    return (
        <li className="todo-item">
            <FontAwesomeIcon
                className='mark'
                icon={ isCompleted ? 'check-circle' : 'circle' }
                onClick={ () => completeTask(id) }
            />
            <span className={ isCompleted ? 'completed text' : 'text' }>
                { text }
            </span>
            <FontAwesomeIcon icon='times' onClick={ () => removeTask(id) } />
        </li>
    )
}

TodoItem.propTypes = {
    isCompleted: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    removeTask: PropTypes.func,
    completeTask: PropTypes.func
}

TodoItem.defaultProps = {
    removeTask: () => {},
    completeTask: () => {}
}

export default TodoItem;
