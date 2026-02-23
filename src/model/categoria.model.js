import connection from "../config/db.js";

export const categoriaModel = {
    criar: async (descricaoCategoria) => {
        const sql = 'INSERT INTO categoria (descricaoCategoria) VALUES (?)';
        const [result] = await connection.execute(sql, [descricaoCategoria]);
        return result;
    },

    listar: async () => {
        const [rows] = await connection.execute('SELECT * FROM categoria');
        return rows;
    },

    atualizar: async (id, descricaoCategoria) => {
        const sql = 'UPDATE categoria SET descricaoCategoria = ? WHERE idCategoria = ?';
        const [result] = await connection.execute(sql, [descricaoCategoria, id]);
        return result;
    },

    deletar: async (id) => {
        const [result] = await connection.execute('DELETE FROM categoria WHERE idCategoria = ?', [id]);
        return result;
    }
};