const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['status_posts']);

router.get('/', (req, res, next) => {
	db.status_posts.find((err, status_posts) => {
		if (err) return next(err);
		res.json(status_posts);
	});
});

router.get('/:id', (req, res, next) => {
	db.status_posts.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, status_post) => {
		if (err) return next(err);
		res.json(status_post);
	});
});

router.post('/', (req, res, next) => {
	const status_post = req.body;
	if (!status_post.name) {
		res.status(400).json({
			'error': 'Bad Data'
		});
	} else {
		db.status_posts.save(status_post, (err, status_post) => {
			if (err) return next(err);
			res.json(status_post);
		});
	}
});

router.delete('/:id', (req, res, next) => {
	db.status_posts.remove({_id: mongojs.ObjectId(req.params.id)}, (err, status_post) => {
		if (err) return next(err);
		res.json(result);
	});
});

router.put('/:id', (req, res, next) => {
	const status_post = req.body;
	let updateStatusPost = {};
	
	if(status_post.name) {
		updateStatusPost.name = status_post.name;
	}

	if(status_post.lactive) {
		updateStatusPost.active = status_post.active;
	}

	if(!updateStatusPost) {
		res.status(400);
		res.json({'error': 'bad request'});
	} else {
		db.status_posts.update({_id: mongojs.ObjectId(req.params.id)}, updateStatusPost, {}, (err, status_post) => {
			if (err) return next(err);
			res.json(status_post);
		});
	}
});

module.exports = router;