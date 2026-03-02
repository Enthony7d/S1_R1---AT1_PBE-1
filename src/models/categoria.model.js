import db from '../config/db.js';

const Categoria = {

    create: async (descricaoCategoria) => {
        const [result] = await db.execute(
            'INSERT INTO categoria (descricaoCategoria) VALUES (?)',
            [descricaoCategoria]
        );
        return result;
    },

    findAll: async () => {
        const [rows] = await db.execute('SELECT * FROM categoria');
        return rows;
    },

    delete: async (id) => {
        await db.execute('DELETE FROM categoria WHERE idCategoria = ?', [id]);
    }

};

export default Categoria;