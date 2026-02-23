import createMulter from "../config/produto.multer.js";

const uploadImage = createMulter({
    folder: 'images',
    allowedTypes: [
        'image/jpeg',
        'image/png',
        'image/jpg',
        'image/webp'
    ],
    fileSize: 5 * 1024 * 1024
}).single('image');

export default uploadImage;