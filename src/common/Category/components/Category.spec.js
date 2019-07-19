import React from 'react';
import { shallow } from 'enzyme';
import Category from './Category';

const MOCK_CATEGORY = ['Comment', 'Spoiler'];

const MOCK_SELECTED = jest.fn();

const componentWrapper = ({ props }) => {
  return shallow(
    <Category
      {...props}
    />);
};

describe('Category component', () => {
  it('Should render category properly', () => {
    const props = {
      menu: MOCK_CATEGORY,
      selected: MOCK_SELECTED
    };
    const category = componentWrapper({ props });
    expect(category).toMatchSnapshot();
  });
  it('Should have be defined a default first element', () => {
    const props = {
      menu: MOCK_CATEGORY,
      selected: MOCK_SELECTED
    };
    const category = componentWrapper({ props });
    expect(category.find('.category__btn--actived').length).toEqual(1);
  });
  it('Should have two items in the category', () => {
    const props = {
      menu: MOCK_CATEGORY,
      selected: MOCK_SELECTED
    };
    const category = componentWrapper({ props });
    expect(category.find('.category__btn').length).toEqual(2);
  });
});


