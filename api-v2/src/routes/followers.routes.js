const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['followers']);

router.get('/', (req, res, next) => {
	db.followers.find((err, followers) => {
		if (err) return next(err);
		res.json(followers);
	});
});

router.get('/:id', (req, res, next) => {
	db.followers.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, follower) => {
		if (err) return next(err);
		res.json(follower);
	});
});

router.post('/', (req, res, next) => {
	const follower = req.body;
	if (!follower.page) {
		res.status(400).json({
			'error': 'Bad Data'
		});
	} else {
		db.followers.save(follower, (err, follower) => {
			if (err) return next(err);
			res.json(follower);
		});
	}
});

router.delete('/:id', (req, res, next) => {
	db.followers.remove({_id: mongojs.ObjectId(req.params.id)}, (err, follower) => {
		if (err) return next(err);
		res.json(result);
	});
});

router.put('/:id', (req, res, next) => {
	const follower = req.body;
	let updateFollower = {};

	if(follower.page_id) {
		updateFollower.page_id = follower.page_id;
	}

	if(follower.user_id) {
		updateFollower.user_id = follower.user_id;
	}

	if(!updateFollower) {
		res.status(400);
		res.json({'error': 'bad request'});
	} else {
		db.followers.update({_id: mongojs.ObjectId(req.params.id)}, updateFollower, {}, (err, follower) => {
			if (err) return next(err);
			res.json(follower);
		});
	}
});

module.exports = router;