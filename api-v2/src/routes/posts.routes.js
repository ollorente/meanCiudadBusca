const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['posts']);

router.get('/', (req, res, next) => {
	db.posts.find((err, posts) => {
		if (err) return next(err);
		res.json(posts);
	});
});

router.get('/:id', (req, res, next) => {
	db.posts.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, post) => {
		if (err) return next(err);
		res.json(post);
	});
});

router.post('/', (req, res, next) => {
	const post = req.body;
	if (!post.title) {
		res.status(400).json({
			'error': 'Bad Data'
		});
	} else {
		db.posts.save(post, (err, post) => {
			if (err) return next(err);
			res.json(post);
		});
	}
});

router.delete('/:id', (req, res, next) => {
	db.posts.remove({_id: mongojs.ObjectId(req.params.id)}, (err, post) => {
		if (err) return next(err);
		res.json(result);
	});
});

router.put('/:id', (req, res, next) => {
	const post = req.body;
	let updatePost = {};

	if(post.page_id) {
		updatePost.page_id = post.page_id;
	}

	if(post.title) {
		updatePost.title = post.title;
	}

	if(post.page_id) {
		updatePost.page_id = post.page_id;
	}

	if(post.content) {
		updatePost.content = post.content;
	}

	if(post.video) {
		updatePost.video = post.video;
	}

	if(post.image) {
		updatePost.image = post.image;
	}

	if(post.date_publish) {
		updatePost.date_publish = post.date_publish;
	}

	if(post.date_end) {
		updatePost.date_end = post.date_end;
	}

	if(post.status_post_id) {
		updatePost.status_post_id = post.status_post_id;
	}

	if(post.share) {
		updatePost.share = post.share;
	}

	if(post.views) {
		updatePost.views = post.views;
	}

	if(post.active) {
		updatePost.active = post.active;
	}

	if(post.lock) {
		updatePost.lock = post.lock;
	}

	if(!updatePost) {
		res.status(400);
		res.json({'error': 'bad request'});
	} else {
		db.posts.update({_id: mongojs.ObjectId(req.params.id)}, updatePost, {}, (err, post) => {
			if (err) return next(err);
			res.json(post);
		});
	}
});

module.exports = router;