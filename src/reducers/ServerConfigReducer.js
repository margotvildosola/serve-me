import * as types from '../constants/ActionTypes';

const initialState = [
    {
        name: 'Server 1',
        id: 0,
    },
];

const ServerConfigReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CONFIG:
            return [
                {
                    id: state.reduce((maxId, config) => Math.max(config.id, maxId), -1) + 1,
                    name: action.name,
                },
                ...state,
            ];
        default:
            return state;
    }
};

export default ServerConfigReducer;
