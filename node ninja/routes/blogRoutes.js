const express = require('express')
const Blog = require('../models/blog')
const router = express.Router();


router.get('/', (req, res) => {

    Blog.find()
        .then((result) => {

            res.render('Index', { title: 'All Blogs', blogs: result })
        }).catch((err) => {

        });


})

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});


// Since we have scoped app.use('/blogs',blogRoutes) that is why only urls which begans with /blogs will work. we can make this kind of url work also by not scoping anything in app.use(blogRoutes) like this 
/* router.get('/all-blogs', (req, res) => {

    Blog.find()
        .then((result) => res.send(result))
        .catch((error) => console.log(error))

}); */

// Custom data adding without form -

/* router.get('/add-blog', (req, res) => {

    const blog = new Blog({

        title: "About my new blog 2",
        snippet: "Snippet of my new blog 2",
        body: "Body of my new blog 2"
    });

    blog.save().then((result) => {
        res.send(result);
    }).catch((error) => {
        console.log(error)
    });

}) */

// POST request - form data posting to server

router.post('/', (req, res) => {

    // console.log(req.body); gives form content using middleware

    const blog = new Blog(req.body)

    blog.save().then((result) => res.redirect('/blogs'))
        .catch((error) => console.log(error));


})

// Get 
router.get('/:id', (req, res) => {

    const id = req.params.id;
    // console.log(id)

    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: 'Blog Details' });
        }).catch(err => console.log(err))

})

module.exports = router;