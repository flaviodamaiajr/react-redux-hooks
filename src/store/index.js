import { createStore } from 'redux'

const INITIAL_STATE = {
    data: [
        'ReactJS',
        'React Native'
    ]
}

function courses(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_COURSE':
            return {
                ...state,
                data: [...state.data, action.title]
            }
        case 'REMOVE_COURSE':
            return {
                ...state,
                data: state.data.filter(course => course !== action.title)
            };
        default:
            return state;
    }
}


const store = createStore(courses);

export default store;