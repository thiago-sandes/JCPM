import React from 'react';
import {TouchableOpacity} from 'react-native';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

function fakeTimer(callback) {
  setTimeout(() => {
    callback && callback();
  }, 1000);
}

// Components
import Card from '../../src/components/Card';

// Mocks
const cardMock = {
  title: 'Avenger',
  id: 'tt0473445',
  year: '2006',
  img:
    'https://m.media-amazon.com/images/M/MV5BMTMzMjMwMjcyNl5BMl5BanBnXkFtZTcwNTA1NDgzMQ@@._V1_SX300.jpg',
  onClick: jest.fn(),
};

describe('Card component tests', () => {
  test('Card snapshot', () => {
    const component = renderer.create(
      <Card
        title={cardMock.title}
        id={cardMock.id}
        year={cardMock.year}
        img={cardMock.img}
        onClick={cardMock.onClick}
      />,
    );

    fakeTimer();

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Card onClick', () => {
    const component = renderer.create(
      <Card
        title={cardMock.title}
        id={cardMock.id}
        year={cardMock.year}
        img={cardMock.img}
        onClick={cardMock.onClick}
      />,
    );

    component.root.findByType(TouchableOpacity).props.onPress();
    expect(cardMock.onClick).toHaveBeenCalled();
  });
});
