import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import App from './components/App';

const store = configureStore();

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store} >
                <App />
            </Provider>
        </AppContainer>,
        document.getElementById('root'),
    );
};

render();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', render);
}
