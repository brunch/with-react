import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel from '../app/components/App';

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(
      <CheckboxWithLabel />
  );

  const homepage = checkbox.find(".brunch-homepage");

  expect(homepage.text()).toEqual('Brunch homepage');

});
