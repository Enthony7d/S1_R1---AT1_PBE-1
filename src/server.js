import express from 'express';
import produtoRoutes from './routes/produto.routes.js';
import categoriaRoutes from './src/routes/categoria.routes.js';

const app = express();

app.use(express.json());

app.use(produtoRoutes);
app.use(categoriaRoutes);

app.listen(5500, () => {
    console.log('Servidor rodando em http://localhost:5500');
});