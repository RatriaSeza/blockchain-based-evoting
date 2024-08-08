import { Router } from 'express';
import { getImage, storeImage } from '../controllers/CandidateImageController';
import { upload } from '../utils/multer';

const router = Router();

router.get('/candidate/image/:candidateNumber', getImage);
router.post('/candidate/image', upload.single('image'), storeImage);

export default router;