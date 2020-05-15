import React from 'react';
import { shallow } from 'enzyme';
import HistoryList from './HistoryList.jsx';
import { RestyProvider } from '../../hooks/Provider';

describe('RequestHistory', () => {
  it('matches a snapshot', () => {
    const history = [{
      method: 'post', 
      url: 'http://place-puppy.com/666x666'
    }, {
      method: 'get', 
      url: 'http://place-puppy.com/666x666'
    }, {
      method: 'put', 
      url: 'http://place-puppy.com/666x666'
    }, {
      method: 'put', 
      url: 'http://place-puppy.com/666x666'
    }];

    const wrapper = shallow(
      <RestyProvider>
        <HistoryList history={history} />
      </RestyProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
