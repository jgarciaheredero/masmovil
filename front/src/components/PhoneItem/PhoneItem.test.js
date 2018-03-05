import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhoneItem from './index';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import { Card } from "material-ui/Card";
import getMuiTheme from 'material-ui/styles/getMuiTheme';

Enzyme.configure({ adapter: new Adapter() });
const propsFake = {
    data: {
        photo: '',
        title: '',
        company: ''
    }
}

describe('Test phoneItem', function(){
    const item = shallow( <PhoneItem {...propsFake}/>, {
        context: {
            muiTheme: getMuiTheme(),
          },
          childContextTypes: {
            muiTheme: React.PropTypes.object.isRequired,
          }
    });
    it('Test showDetail click',function(){
        item.find(Card).simulate('click');
        const status = item.state().showDetail;
        expect(status).toEqual(true);
    });
})