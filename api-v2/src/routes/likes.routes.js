const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['likes']);

router.get('/', (req, res, next) => {
	db.likes.find((err, likes) => {
		if (err) return next(err);
		res.json(likes);
	});
});

router.get('/:id', (req, res, next) => {
	db.likes.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, like) => {
		if (err) return next(err);
		res.json(like);
	});
});

router.post('/', (req, res, next) => {
	const like = req.body;
	if (!like.post) {
		res.status(400).json({
			'error': 'Bad Data'
		});
	} else {
		db.likes.save(like, (err, like) => {
			if (err) return next(err);
			res.json(like);
		});
	}
});

router.delete('/:id', (req, res, next) => {
	db.likes.remove({_id: mongojs.ObjectId(req.params.id)}, (err, like) => {
		if (err) return next(err);
		res.json(result);
	});
});

router.put('/:id', (req, res, next) => {
	const like = req.body;
	let updateLike = {};

	if(like.post_id) {
		updateLike.post_id = like.post_id;
	}

	if(like.user_id) {
		updateLike.user_id = like.user_id;
	}

	if(!updateLike) {
		res.status(400);
		res.json({'error': 'bad request'});
	} else {
		db.likes.update({_id: mongojs.ObjectId(req.params.id)}, updateLike, {}, (err, like) => {
			if (err) return next(err);
			res.json(like);
		});
	}
});

module.exports = router;