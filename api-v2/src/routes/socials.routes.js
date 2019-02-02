const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['socials']);

router.get('/', (req, res, next) => {
	db.socials.find((err, socials) => {
		if (err) return next(err);
		res.json(socials);
	});
});

router.get('/:id', (req, res, next) => {
	db.socials.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, social) => {
		if (err) return next(err);
		res.json(social);
	});
});

router.post('/', (req, res, next) => {
	const social = req.body;
	if (!social.link) {
		res.status(400).json({
			'error': 'Bad Data'
		});
	} else {
		db.socials.save(social, (err, social) => {
			if (err) return next(err);
			res.json(social);
		});
	}
});

router.delete('/:id', (req, res, next) => {
	db.socials.remove({_id: mongojs.ObjectId(req.params.id)}, (err, social) => {
		if (err) return next(err);
		res.json(result);
	});
});

router.put('/:id', (req, res, next) => {
	const social = req.body;
	let updateSocial = {};

	if(social.link) {
		updateSocial.link = social.link;
	}

	if(social.socialnetwork_id) {
		updateSocial.socialnetwork_id = social.socialnetwork_id;
	}

	if(social.page_id) {
		updateSocial.page_id = social.page_id;
	}

	if(social.active) {
		updateSocial.active = social.active;
	}

	if(social.lock) {
		updateSocial.lock = social.lock;
	}

	if(!updateSocial) {
		res.status(400);
		res.json({'error': 'bad request'});
	} else {
		db.socials.update({_id: mongojs.ObjectId(req.params.id)}, updateSocial, {}, (err, social) => {
			if (err) return next(err);
			res.json(social);
		});
	}
});

module.exports = router;