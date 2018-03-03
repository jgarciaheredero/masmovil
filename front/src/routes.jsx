import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './containers/App'
import PhoneListContainer from './components/PhoneListContainer';

export default (
    <Route path="/" component={App}>
         <IndexRoute component={PhoneListContainer}/> 
    </Route>
)