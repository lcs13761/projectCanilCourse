import { Router } from "express";
import * as PageController from "../controllers/web/pageController";
import * as SearchController from "../controllers/web/searchController";

const router = Router();


router.get('/', PageController.index);
router.get('/dogs',PageController.dogs);
router.get('/cats',PageController.cats);
router.get('/fishes',PageController.fishes);

router.get('/search', SearchController.index);

export default router;