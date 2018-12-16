import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store/store'
import history from './history'
/*import {saveState} from "./localStorage";

store.subscribe(() => {
    saveState(store.getState());
});
*/

ReactDOM.render(
    <Provider store={store}>
    <Router history={history}>
        <App />
    </Router>
    </Provider>,
    document.getElementById("root"));


serviceWorker.unregister();
