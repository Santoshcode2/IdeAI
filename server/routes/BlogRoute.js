
import express from 'express'
import { addBlog, addComment, deleteblogById, generateContent, getAllBlogs,getBlogById, getBlogComments, togglePublish } from '../controllers/BlogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const blogRouter = express.Router();

blogRouter.post("/add",upload.single('image'),auth, addBlog);
blogRouter.get("/all",getAllBlogs);
blogRouter.post('/delete',auth,deleteblogById);
blogRouter.post('/toggle-publish',auth,togglePublish);

blogRouter.post('/add-comment',addComment);
blogRouter.post('/comments',getBlogComments);

blogRouter.post('/generate', auth, generateContent);

blogRouter.get('/:blogId',getBlogById);   


export default  blogRouter;
