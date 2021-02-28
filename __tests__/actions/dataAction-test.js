import * as actions from '../../src/redux/actions/dataAction';

describe('Actions test', () => {
  it('Should create an action to add movies data', () => {
    const data = {
      Search: [
        {
          Title: 'Captain America: The First Avenger',
          Year: '2011',
          imdbID: 'tt0458339',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg',
        },
        {
          Title: 'The Toxic Avenger',
          Year: '1984',
          imdbID: 'tt0090190',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNzViNmQ5MTYtMmI4Yy00N2Y2LTg4NWUtYWU3MThkMTVjNjk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        },
      ],
      totalResults: '120',
      Response: 'True',
    };
    const expectedAction = {
      type: 'SET_DATA',
      data,
    };
    expect(actions.setDataAction(data)).toEqual(expectedAction);
  });
});
