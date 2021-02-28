import dataReducer from '../../src/redux/reducers/dataReducer';

describe('movies data reducer', () => {
  it('Should return the initial state', () => {
    expect(dataReducer(undefined, {})).toEqual({
      movies: null,
    });
  });

  it('Should handle SET_DATA', () => {
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

    expect(
      dataReducer([], {
        type: 'SET_DATA',
        data,
      }),
    ).toEqual({
      movies: {
        Response: 'True',
        Search: [
          {
            Poster:
              'https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg',
            Title: 'Captain America: The First Avenger',
            Type: 'movie',
            Year: '2011',
            imdbID: 'tt0458339',
          },
          {
            Poster:
              'https://m.media-amazon.com/images/M/MV5BNzViNmQ5MTYtMmI4Yy00N2Y2LTg4NWUtYWU3MThkMTVjNjk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
            Title: 'The Toxic Avenger',
            Type: 'movie',
            Year: '1984',
            imdbID: 'tt0090190',
          },
        ],
        totalResults: '120',
      },
    });
  });
});
