import Categoria from '../models/categoria.model.js';

const categoriaController = {

    create: async (req, res) => {
        try {
            const { descricaoCategoria } = req.body;

            const result = await Categoria.create(descricaoCategoria);

            res.status(201).json({
                message: 'Categoria criada com sucesso',
                idCategoria: result.insertId
            });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    list: async (req, res) => {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    },

    delete: async (req, res) => {
        await Categoria.delete(req.params.id);
        res.json({ message: 'Categoria removida' });
    }

};

export default categoriaController;