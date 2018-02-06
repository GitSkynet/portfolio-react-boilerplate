import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Input from '../Input';

describe('<Input />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Input />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
