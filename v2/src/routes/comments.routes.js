const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['comments']);

router.get('/', (req, res, next) => {
	db.comments.find((err, comments) => {
		if (err) return next(err);
		res.json(comments);
	});
});

router.get('/:id', (req, res, next) => {
	db.comments.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, comment) => {
		if (err) return next(err);
		res.json(comment);
	});
});

router.post('/', (req, res, next) => {
	const comment = req.body;
	if (!comment.content) {
		res.status(400).json({
			'error': 'Bad Data'
		});
	} else {
		db.comments.save(comment, (err, comment) => {
			if (err) return next(err);
			res.json(comment);
		});
	}
});

router.delete('/:id', (req, res, next) => {
	db.comments.remove({_id: mongojs.ObjectId(req.params.id)}, (err, comment) => {
		if (err) return next(err);
		res.json(result);
	});
});

router.put('/:id', (req, res, next) => {
	const comment = req.body;
	let updateComment = {};

	if(comment.content) {
		updateComment.content = comment.content;
	}

	if(comment.post_id) {
		updateComment.post_id = comment.post_id;
	}

	if(comment.user_id) {
		updateComment.user_id = comment.user_id;
	}

	if(comment.active) {
		updateComment.active = comment.active;
	}

	if(comment.lock) {
		updateComment.lock = comment.lock;
	}

	if(!updateComment) {
		res.status(400);
		res.json({'error': 'bad request'});
	} else {
		db.comments.update({_id: mongojs.ObjectId(req.params.id)}, updateComment, {}, (err, comment) => {
			if (err) return next(err);
			res.json(comment);
		});
	}
});

module.exports = router;