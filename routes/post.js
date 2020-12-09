const Router=require('express')
const {
    getPostDetail,
    getAllUserPosts,
    allPosts,
    createPost,
    updatePost,
    deletePost
}=require('../controllers/post')

const {
    catchErrs,
    isAuth
}=require('../middlewares/auth')

const router=Router()

//Create Post
router.post('/create', isAuth, catchErrs(createPost))

//Update Post
router.put('/edit/:postId', isAuth, catchErrs(updatePost))

//List All posts
router.get('/allPosts', isAuth, catchErrs(allPosts))

//List All Users posts
router.get('/allUserPosts', isAuth, catchErrs(getAllUserPosts))

//Post Details
router.get('/detail/:postId', isAuth, catchErrs(getPostDetail))

//Delete Post
router.get('/delete/:postId', isAuth, catchErrs(deletePost))

module.exports=router


