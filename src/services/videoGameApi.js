/* eslint-disable max-len */
export const getVideoGameApi = async(page = 1) => {
  const res = await fetch(`https://rapidapi.p.rapidapi.com/games?page=${page}`, {
    'method':'GET',
    'headers':{
      'x-rapidapi-key': 'ff9928754amsh2b797a780063ce3p11fb11jsn3d4cc097fee5', 'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
    }
  });
  const json = await res.json();

  return json.results.map(game => ({
    id: game.id,
    name: game.name,
    imageUrl: game.background_image
  }));
};
