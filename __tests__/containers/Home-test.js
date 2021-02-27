import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../__mocks__/MockedStore';
import Home from '../../src/containers/Home';

test('Home snapshot', () => {
  const tree = renderer.create(<Home store={store} />).toJSON();
  expect(tree).toMatchSnapshot();
});
