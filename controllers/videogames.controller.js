import * as svc from '../services/videogames.service.js';

//Obtiene todos los videojuegos
export const getVideogames = (req, res) =>
  res.json({ ok: true, data: svc.getAllVideogames() });

//Obtiene un videojuego
export const getVideogame = (req, res) => {
  const game = svc.getVideogameById(req.params.id);
  if (!game) return res.status(404).json({ ok: false, error: `El juego con id ${req.params.id} no existe.` });
  res.json({ ok: true, data: game });
};

//Crea un videojuego
export const createVideogame = (req, res) =>
  res.status(201).json({ ok: true, data: svc.createVideogame(req.body) });

//Actualiza un videojuego
export const updateVideogame = (req, res) => {
  const game = svc.updateVideogame(req.params.id, req.body);
  if (!game) return res.status(404).json({ ok: false, error: `El juego con id ${req.params.id} no existe. No puede editarse.` });
  res.json({ ok: true, data: game });
};

//Elimina nun videojuego
export const deleteVideogame = (req, res) => {
  const game = svc.deleteVideogame(req.params.id);
  if (!game) return res.status(404).json({ ok: false, error: `El juego con id ${req.params.id} no existe. No puede borrarse.` });
  res.json({ ok: true, data: game });
};
