import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(logger),
        ),
    );
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default; // eslint-disable-line global-require
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
};

export default configureStore;
