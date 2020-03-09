import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask, removeTask, completeTask, changeFilter } from '../../redux/actions/actionCreator'
import './todo.css';
import TodoInput from '../../components/todo-input/todo-input';
import TodoList from '../../components/todo-list/todoList';
import Footer from '../../components/footer/footer';

class Todo extends Component {
    state = {
        inputValue: ''
    }

    handleInput = ({ target: { value } }) => {
        this.setState({
            inputValue: value
        });
    }

    addTask = ({ key }) => {
        const { inputValue } = this.state;

        if (inputValue.length > 0 && key === 'Enter') {
            const { addTask } = this.props;
            addTask((new Date()).getTime(), inputValue, false);

            this.setState({
                inputValue: ''
            });
        }
    }

    filterTasks = (id, tasks) => {
        switch(id) {
            case 'all': return tasks;
            case 'active': return tasks.filter(task => !task.isCompleted);
            case 'completed': return tasks.filter(task => task.isCompleted);
            default: return tasks;
        }
    }

    render() {
        const { tasks, filters, removeTask, completeTask, changeFilter } = this.props;
        const { inputValue } = this.state;
        const isTasksExist = tasks && tasks.length > 0;
        const amount = tasks.filter(({ isCompleted }) => !isCompleted).length
        const filteredTasks = this.filterTasks(filters, tasks);

        return (
            <div className="todo-wrapper">
                <TodoInput
                    onChange={ this.handleInput }
                    onKeyPress={ this.addTask }
                    value={ inputValue }
                />
                <TodoList
                    tasks={ filteredTasks }
                    removeTask={ removeTask }
                    completeTask={ completeTask }
                />
                { isTasksExist &&
                    <Footer
                        activeFilter={ filters }
                        amount={ amount }
                        changeFilter={ changeFilter }
                    />
                }
            </div>
        );
    }
}

Todo.propTypes = {
    tasks: PropTypes.array.isRequired,
    filters: PropTypes.string.isRequired,
    removeTask: PropTypes.func.isRequired,
    completeTask: PropTypes.func.isRequired,
    changeFilter: PropTypes.func.isRequired
}



export default connect(({ tasks, filters }) => ({
    tasks,
    filters
}), {
    addTask,
    removeTask,
    completeTask,
    changeFilter
})(Todo);
