import {Router} from 'express';
import * as videoCtrl from '../controllers/video.controller';

const router = Router();

router.get('/videos', videoCtrl.getVideos);
router.post('/videos', videoCtrl.createVideo);
router.get('/videos/:id', videoCtrl.getVideo);
router.delete('/videos/:id', videoCtrl.deleteVideo);
router.put('/videos/:id', videoCtrl.updateVideo);

export default router;