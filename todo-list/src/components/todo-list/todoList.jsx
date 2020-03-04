import React from 'react';
import './todoList.css';
import PropTypes from 'prop-types';
import TodoItem from '../todo-item/todoItem';

const TodoList = ({ tasks, removeTask, completeTask }) => {
    return (
        <ul className="todo-list">
            {
                tasks.map(({ id, text, isCompleted }) => (
                    <TodoItem
                        key={ id }
                        id={ id }
                        text={ text }
                        isCompleted={ isCompleted }
                        removeTask={ removeTask }
                        completeTask={ completeTask }
                    />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    tasks: PropTypes.array.isRequired,
    removeTask: PropTypes.func
}

TodoList.defaultProps = {
    removeTask: () => {}
}

export default TodoList;
