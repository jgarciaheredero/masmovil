import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhoneListContainer from './index';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import { Card } from "material-ui/Card";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import { spy } from 'sinon';

Enzyme.configure({ adapter: new Adapter() });



describe('Correct render', function(){
    const initialState = {phones:[],loading: false, error: false};
    const mockStore = configureStore(initialState)
    let item, store = ''
    beforeEach(()=> {
        store = mockStore(initialState);
        item = shallow( 
            <Provider store={mockStore}>
                <PhoneListContainer/>
            </Provider>
            , {
                context: {
                    muiTheme: getMuiTheme(),
                  },
                childContextTypes: {
                    muiTheme: React.PropTypes.object.isRequired,
                }
            });
    })
    it('One render component', () => {
        expect(item.length).toEqual(1)
    });
})