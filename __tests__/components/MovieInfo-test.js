import React from 'react';
import renderer from 'react-test-renderer';
import MovieInfo from '../../src/components/MovieInfo';

test('MovieInfo snapshot', async () => {
  const detailsMock = {
    Title: 'Avenger',
    Released: '09 Apr 2006',
    Runtime: '92 min',
    Genre: 'Thriller',
    Plot:
      'A C.I.A. Agent steps in to stop a former Special Forces Operative on a for-hire mission that poses a global threat.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTMzMjMwMjcyNl5BMl5BanBnXkFtZTcwNTA1NDgzMQ@@._V1_SX300.jpg',
    Ratings: [
      {Source: 'Internet Movie Database', Value: '5.7/10'},
      {Source: 'Rotten Tomatoes', Value: '29%'},
    ],
  };

  const tree = renderer.create(<MovieInfo details={detailsMock} />).toJSON();

  expect(tree).toMatchSnapshot();
});
