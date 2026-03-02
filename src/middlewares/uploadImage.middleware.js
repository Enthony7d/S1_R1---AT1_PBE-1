import createMulter from '../config/produto.multer.js';

const uploadImage = createMulter({
    folder: 'images',
    allowedTypes: ['image/jpeg', 'image/png', 'image/jpg'],
    fileSize: 5 * 1024 * 1024
}).single('imagem');

export default uploadImage;