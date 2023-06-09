import multer from 'multer';
import { Router } from 'express';
import imageController from '../controllers/imageController.js';

const router = Router({ mergeParams: true });

const upload = multer({
    dest: 'uploads/'
});

router.post('/', upload.single('image'), imageController.addNewPicture);

export default router;