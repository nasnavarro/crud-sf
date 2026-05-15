import { videogames } from '../data/videogames.data.js';

let nextId = videogames.length + 1;

//Obtiene todos los videojuegos.
export const getAllVideogames = () => videogames;

//Obtiene un videojuego a partir de su id.
export const getVideogameById = (id) =>
  videogames.find((videogame) => videogame.id === Number(id));

//Crea un videojuego.
export const createVideogame = (data) => {
  const newGame = { id: nextId++, ...data };
  videogames.push(newGame);
  return newGame;
};

//Actualiza un videojuego.
export const updateVideogame = (id, data) => {
  const index = videogames.findIndex((videogame) => videogame.id === Number(id));
  if (index === -1) return null;
  videogames[index] = { ...videogames[index], ...data };
  return videogames[index];
};

//Elimina un videojuego a partir de su id.
export const deleteVideogame = (id) => {
  const index = videogames.findIndex((videogame) => videogame.id === Number(id));
  if (index === -1) return null;
  const [deleted] = videogames.splice(index, 1);
  return deleted;
};
