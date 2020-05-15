import React from 'react';
import { shallow } from 'enzyme';
import HistoryItem from './HistoryItem.jsx';

describe('RequestItem', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <HistoryItem method='post' url='https://www.placecage.com/g/250/999' onClick={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
