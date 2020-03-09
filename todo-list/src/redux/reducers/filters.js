import { BASE_FILTER, CHANGE_FILTER } from "../../shared/constants";

const filters = (state = BASE_FILTER, { type, id }) => {
    switch (type) {
        case CHANGE_FILTER:
            return id;
        default:
            return state;
    }
}

export default filters;
