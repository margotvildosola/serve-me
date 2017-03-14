import * as types from '../constants/ActionTypes';

export function addConfig(name) {
    return {
        type: types.ADD_CONFIG,
        name,
    };
}

export function removeConfig(id) {
    return {
        type: types.REMOVE_CONFIG,
        id,
    };
}
