import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../../src/containers/Details';
import MockedNavigator from '../../__mocks__/MockedNavigator';

test('Details snapshot', () => {
  const tree = renderer
    .create(<MockedNavigator component={Details} params={{imdbID: '1234'}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
