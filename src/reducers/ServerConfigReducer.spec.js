import ServerConfigReducer from './ServerConfigReducer';
import * as types from '../constants/ActionTypes';

describe('Server config reducer', () => {
    it('should handle initial state', () => {
        expect(
            ServerConfigReducer(undefined, {}),
        ).toEqual([
            {
                name: 'Server 1',
                id: 0,
            },
        ]);
    });
    it('should handle ADD_CONFIG', () => {
        expect(
            ServerConfigReducer([], {
                type: types.ADD_CONFIG,
                name: 'Server test 1',
            }),
        ).toEqual([
            {
                name: 'Server test 1',
                id: 0,
            },
        ]);
    });
});
