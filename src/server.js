import 'dotenv/config';
import express from 'express';
import produtoRoutes from './routes/produto.routes.js';
import categoriaRoutes from './routes/categoria.routes.js';

const app = express();

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/produtos', produtoRoutes);
app.use('/categorias', categoriaRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});