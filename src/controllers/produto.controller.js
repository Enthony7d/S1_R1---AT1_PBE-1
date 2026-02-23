import { produtoModel } from "../models/produto.model.js";

const produtoController = {

    upload: async (req, res) => {
        try {
            if(!req.file){
                return res.status(400).json({message:'Arquivo não enviado'});
            }

            res.status(200).json({
                message: 'Upload realizado com sucesso',
                file: {
                    filename: req.file.filename,
                    size: req.file.size,
                    mimetype: req.file.mimetype,
                }
            })

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Ocorreu um erro no servidor',
                errorMessage: error.message
            });
        }
    },

    criar: async (req, res) => {
        try {
            const { idCategoria, nomeProduto, valorProduto } = req.body;

            const vinculoImagem = req.file ? req.file.filename : null;

            const result = await produtoModel.criar({
                idCategoria,
                nomeProduto,
                valorProduto,
                vinculoImagem
            });

            res.status(201).json(result);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    listar: async (req, res) => {
        const data = await produtoModel.listar();
        res.json(data);
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const vinculoImagem = req.file ? req.file.filename : null;

        const result = await produtoModel.atualizar(id, {
            ...req.body,
            vinculoImagem
        });

        res.json(result);
    },

    deletar: async (req, res) => {
        const { id } = req.params;
        const result = await produtoModel.deletar(id);
        res.json(result);
    }
};

export default produtoController;