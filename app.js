import express from 'express';
import videogamesRoutes from './routes/videogames.routes.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    ok: true,
    routes: [
      'GET    /videogames',
      'GET    /videogames/:id',
      'POST   /videogames',
      'PUT    /videogames/:id',
      'DELETE /videogames/:id',
    ],
  });
});

app.use('/videogames', videogamesRoutes);

//Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ ok: false, error: 'Ruta no encontrada' });
});

//Control de errores de archivo json mal formado.
app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ ok: false, error: 'JSON con formato no válido' });
  }
  next(err);
});

export default app;
