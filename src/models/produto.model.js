import db from '../config/db.js';

const Produto = {

    create: async (data) => {
        const { idCategoria, nomeProduto, valorProduto, vinculoImagem } = data;

        const [result] = await db.execute(
            `INSERT INTO produto 
            (idCategoria, nomeProduto, valorProduto, vinculoImagem)
            VALUES (?, ?, ?, ?)`,
            [idCategoria, nomeProduto, valorProduto, vinculoImagem]
        );

        return result;
    },

    findAll: async () => {
        const [rows] = await db.execute(`
            SELECT p.*, c.descricaoCategoria
            FROM produto p
            JOIN categoria c ON p.idCategoria = c.idCategoria
        `);
        return rows;
    },

    update: async (id, data) => {
        const { nomeProduto, valorProduto } = data;

        await db.execute(
            `UPDATE produto
             SET nomeProduto = ?, valorProduto = ?
             WHERE idProduto = ?`,
            [nomeProduto, valorProduto, id]
        );
    },

    delete: async (id) => {
        await db.execute('DELETE FROM produto WHERE idProduto = ?', [id]);
    }

};

export default Produto;