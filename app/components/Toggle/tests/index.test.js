import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider, defineMessages } from 'react-intl';

import Toggle from '../index';

describe('<Toggle />', () => {
  it('should contain default text', () => {
    const defaultEnMessage = 'someContent';
    const defaultNlMessage = 'someOtherContent';
    const messages = defineMessages({
      en: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage,
      },
      nl: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultNlMessage,
      },
    });
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <Toggle values={['en', 'nl']} messages={messages} />
      </IntlProvider>
    );

    expect(renderedComponent.contains(<Toggle values={['en', 'nl']} messages={messages} />)).toBe(true);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should not have ToggleOptions if props.values is not defined', () => {
    const renderedComponent = shallow(<Toggle />);
    expect(renderedComponent.contains(<div />)).toBe(true);
    expect(renderedComponent.find('div').length).toBe(1);
  });
});
