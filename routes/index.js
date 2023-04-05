import express from 'express'
import userRouter from './users.js'
import authorRouter from './authors.js'
import categoriesRouter from './categories.js'
import donationsRouter from './donations.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth',userRouter)
router.use('/authors',authorRouter)
router.use('/categories',categoriesRouter)
router.use('/donate',donationsRouter)

export default router