const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const indexRoutes = require('./routes/index.routes');
const bannerTracksRoutes = require('./routes/banner-tracks.routes');
const bannersRoutes = require('./routes/banners.routes');
const clientsRoutes = require('./routes/clients.routes');
const commentsRoutes = require('./routes/comments.routes');
const countriesRoutes = require('./routes/countries.routes');
const followersRoutes = require('./routes/followers.routes');
const likesRoutes = require('./routes/likes.routes');
const pagesRoutes = require('./routes/pages.routes');
const postsRoutes = require('./routes/posts.routes');
const rolesRoutes = require('./routes/roles.routes');
const socialnetworksRoutes = require('./routes/socialnetworks.routes');
const socialsRoutes = require('./routes/socials.routes');
const statusPostsRoutes = require('./routes/status-posts.routes');
const typePurchasesRoutes = require('./routes/type-purchases.routes');
const usersRoutes = require('./routes/users.routes');

// settings
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 4100);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(indexRoutes);
app.use('/api/v2/banner-tracks', bannerTracksRoutes);
app.use('/api/v2/banners', bannersRoutes);
app.use('/api/v2/clients', clientsRoutes);
app.use('/api/v2/comments', commentsRoutes);
app.use('/api/v2/countries', countriesRoutes);
app.use('/api/v2/followers', followersRoutes);
app.use('/api/v2/likes', likesRoutes);
app.use('/api/v2/pages', pagesRoutes);
app.use('/api/v2/posts', postsRoutes);
app.use('/api/v2/roles', rolesRoutes);
app.use('/api/v2/socialnetworks', socialnetworksRoutes);
app.use('/api/v2/socials', socialsRoutes);
app.use('/api/v2/status-posts', statusPostsRoutes);
app.use('/api/v2/type-purchases', typePurchasesRoutes);
app.use('/api/v2/users', usersRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'dist')));

// Start server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});