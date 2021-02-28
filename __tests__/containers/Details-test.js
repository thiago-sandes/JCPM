import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../../src/containers/Details';

jest.useFakeTimers();

function fakeTimer(callback) {
  setTimeout(() => {
    callback && callback();
  }, 1000);
}

test('Details snapshot', async () => {
  const mockedProps = {
    route: {params: {imdbID: '1234'}},
    navigation: {goBack: jest.fn()},
  };

  const tree = renderer.create(<Details {...mockedProps} />).toJSON();

  fakeTimer();

  expect(tree).toMatchSnapshot();
});
