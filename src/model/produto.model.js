import connection from "../config/db.js";

export const produtoModel = {

    criar: async (produto) => {
        const sql = `
            INSERT INTO produto 
            (idCategoria, nomeProduto, valorProduto, vinculoImagem) 
            VALUES (?, ?, ?, ?)
        `;
        const [result] = await connection.execute(sql, [
            produto.idCategoria,
            produto.nomeProduto,
            produto.valorProduto,
            produto.vinculoImagem
        ]);
        return result;
    },

    listar: async () => {
        const [rows] = await connection.execute(`
            SELECT p.*, c.descricaoCategoria 
            FROM produto p
            JOIN categoria c ON p.idCategoria = c.idCategoria
        `);
        return rows;
    },

    atualizar: async (id, produto) => {
        const sql = `
            UPDATE produto 
            SET nomeProduto=?, valorProduto=?, idCategoria=?, vinculoImagem=?
            WHERE idProduto=?
        `;
        const [result] = await connection.execute(sql, [
            produto.nomeProduto,
            produto.valorProduto,
            produto.idCategoria,
            produto.vinculoImagem,
            id
        ]);
        return result;
    },

    deletar: async (id) => {
        const [result] = await connection.execute(
            'DELETE FROM produto WHERE idProduto = ?',
            [id]
        );
        return result;
    }
};