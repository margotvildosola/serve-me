import * as actions from './ServerConfigActions';
import * as types from '../constants/ActionTypes';

describe('actions', () => {
    it('should create an action to add a server config', () => {
        const name = 'Server 1';
        const expectedAction = {
            type: types.ADD_CONFIG,
            name,
        };
        expect(actions.addConfig(name)).toEqual(expectedAction);
    });
});
