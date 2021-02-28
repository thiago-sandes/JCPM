import React from 'react';
import renderer from 'react-test-renderer';
import SimpleSplash from '../../src/components/SimpleSplash';

jest.useFakeTimers();

function fakeTimer(callback) {
  setTimeout(() => {
    callback && callback();
  }, 1000);
}

test('SimpleSplash snapshot', async () => {
  const tree = renderer.create(<SimpleSplash />).toJSON();

  fakeTimer();

  expect(tree).toMatchSnapshot();
});
