import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER } from "../../shared/constants";

const addTask = (id, text, isCompleted) => ({
    type: ADD_TASK,
    id,
    text,
    isCompleted
});

const removeTask = id => ({
    type: REMOVE_TASK,
    id
});

const completeTask = id => ({
    type: COMPLETE_TASK,
    id
});

const changeFilter = id => ({
    type: CHANGE_FILTER,
    id
});

export {
    addTask,
    removeTask,
    completeTask,
    changeFilter
};
