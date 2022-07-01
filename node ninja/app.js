const express = require('express');
const mongoose = require('mongoose');
const app = express();  // express app
const blogRoutes = require('./routes/blogRoutes')
app.set('view engine', 'ejs'); // view engine
app.use(express.static('public')); // static file (middlewear)
app.use(express.urlencoded({ extended: true })); // middleware for post req and form

// MongoDB connection URI

// const dbURI = 'mongodb+srv://atikk007:test1234@netninja.ja6hgic.mongodb.net/?retryWrites=true&w=majority';

// const dbURI = 'mongodb+srv://atikk007:test1234@nodetuts.ja6hgic.mongodb.net/note-tuts?retryWrites=true&w=majority';

const dbURI = 'mongodb+srv://atikk007:test1234@nodetuts.ja6hgic.mongodb.net/note-tuts?retryWrites=true&w=majority';

mongoose.connect(dbURI)
  .then((result) => {
    app.listen(3000);
    console.log("Connected to database")
  })
  .catch((err) => {
    console.log(err)
  });


/* app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

app.use((req, res, next) => {
  console.log('in the next middleware');
  next();
}); */

// app.use(morgan('dev'));

/* app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
}); */

app.get('/', (req, res) => {

  res.redirect('/blogs');

  /*   const blogs = [
    { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
  ];
  res.render('index', { title: 'Home', blogs }); */
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog router import

app.use('/blogs', blogRoutes); // scoped to blogs, now path will be like - /blogs/usergivenpath i.e. all bath in blogRoutes  will automatically began with blogs/

/* if we have url which don't start with blog in blogRoutes and we want to use them then we can keep it non scoped 
app.use(blogRoutes) like this 
*/

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
