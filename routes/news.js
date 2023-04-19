import express from "express";
import { createNews, updateNews, getAllNews, getNews, deleteNews} from "./../controllers/news.js";
import auth from "./../middleware/auth.js";

const router = express.Router();

//get all news
router.get('/', getAllNews);
//get news to display details of this news
router.get('/:id', getNews);
//create news
router.post('/', auth, createNews);
//update news
router.post('/:id', auth, updateNews);
//delete news
router.delete('/:id', auth, deleteNews);

export default router;