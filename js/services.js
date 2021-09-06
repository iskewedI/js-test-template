const Mocked = {
  User: {
    name: 'Local',
    id: 13,
  },
  UserList: {
    animes: [
      {
        title: 'Anime1',
        id: 123,
        imageUrl:
          'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png',
        watchedEpisodes: 5,
        score: 4,
      },
      {
        title: 'Anime2',
        id: 123,
        imageUrl:
          'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png',
        watchedEpisodes: 4,
        score: 10,
      },
    ],
  },
};

export const getUserData = async () => {
  // GET https://api.aniapi.com/v1/user/186 con header => Authorization: Bearer <token>
  //El objeto que retorne la API deberá tener la forma exacta del Mocked.User (usando preferiblemente la función map())

  return Mocked.User;
};

export const getUserList = async name => {
  // GET https://api.jikan.moe/v3/user/${username}/animelist/all
  //El objeto que retorne la API deberá tener la forma exacta del Mocked.UserList (usando preferiblemente la función map())

  return Mocked.UserList.animes;
};
