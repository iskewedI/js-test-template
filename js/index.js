// LEVANTAR CON LiveServer

import { getUserData, getUserList } from './services.js';

const Elements = {
  userGreeting: document.getElementById('greeting'),
  userList: document.getElementById('userList'),
  totalEpisodes: document.getElementById('totalEpisodes'),
};

const renderGreeting = name => {
  Elements.userGreeting.innerHTML = `Hi, ${name}`;
};

const renderAnimeList = animeList => {
  /* Por cada anime en animeList, renderizar dentro del elemento userList:
        - Un "li" que contenga dos elementos:
            -Un "img", donde su atributo "src" va a ser anime.imageUrl
            -Un "h3", donde su atributo innerText va a ser anime.title
      Utilizar preferiblemente animeList.forEach().
    */

  //PLUS si terminan todo el test rapido: agregar un h4 que diga "Watched: *watchedEpisodes*"
};

const renderTotalEpisodes = animeList => {
  const episodes = 4 + 5;

  /*  Utilizar animeList.reduce para obtener un INT a partir de la iteración
        de un array de objetos que tienen un atributo "watchedEpisodes".
   */

  Elements.totalEpisodes.innerText = `Total episodes saw: ${episodes}`;
};

const App = async () => {
  const userData = await getUserData();

  const animeList = await getUserList(userData.name);

  /*   Ordenar array "animeList" de mayor a menor utilizando el atributo "score"
       Utilizar preferentemente método .sort()
  */
  const sortedList = animeList;

  renderGreeting(userData.name);
  renderAnimeList(animeList);
  renderTotalEpisodes(animeList);
};

App();
