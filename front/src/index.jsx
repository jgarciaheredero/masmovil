import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import App from './containers/App';
import routes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={history} routes={routes}/>
        </MuiThemeProvider>
    </Provider>,
 document.getElementById('root')
);

