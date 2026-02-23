import { categoriaModel } from "../models/categoria.model.js";

const categoriaController = {

    criar: async (req, res) => {
        try {
            const { descricaoCategoria } = req.body;
            const result = await categoriaModel.criar(descricaoCategoria);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    listar: async (req, res) => {
        const data = await categoriaModel.listar();
        res.json(data);
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const { descricaoCategoria } = req.body;
        const result = await categoriaModel.atualizar(id, descricaoCategoria);
        res.json(result);
    },

    deletar: async (req, res) => {
        const { id } = req.params;
        const result = await categoriaModel.deletar(id);
        res.json(result);
    }
};

export default categoriaController;