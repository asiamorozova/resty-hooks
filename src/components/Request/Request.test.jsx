import React from 'react';
import { shallow } from 'enzyme';
import Request from './Request.jsx';
import { RestyProvider } from '../../hooks/Provider';

describe('Request', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <RestyProvider>
        <Request
          onSubmit={() => {}}
          onChange={() => {}}
          url="https://www.placecage.com/c/240/420"
          method="get"
          body="body" />
      </RestyProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

