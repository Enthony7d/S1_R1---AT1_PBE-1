import Produto from '../models/produto.model.js';

const produtoController = {

    create: async (req, res) => {
        try {

            const { idCategoria, nomeProduto, valorProduto } = req.body;

            if (!req.file) {
                return res.status(400).json({ message: 'Imagem obrigatória' });
            }

            const result = await Produto.create({
                idCategoria,
                nomeProduto,
                valorProduto,
                vinculoImagem: req.file.filename
            });

            res.status(201).json({
                message: 'Produto criado com sucesso',
                idProduto: result.insertId
            });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    list: async (req, res) => {
        const produtos = await Produto.findAll();
        res.json(produtos);
    },

    update: async (req, res) => {
        await Produto.update(req.params.id, req.body);
        res.json({ message: 'Produto atualizado' });
    },

    delete: async (req, res) => {
        await Produto.delete(req.params.id);
        res.json({ message: 'Produto removido' });
    }

};

export default produtoController;