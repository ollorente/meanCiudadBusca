const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['banner_tracks']);

router.get('/', (req, res, next) => {
	db.banner_tracks.find((err, banner_tracks) => {
		if (err) return next(err);
		res.json(banner_tracks);
	});
});

router.get('/:id', (req, res, next) => {
	db.banner_tracks.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, banner_track) => {
		if (err) return next(err);
		res.json(banner_track);
	});
});

router.post('/', (req, res, next) => {
	const banner_track = req.body;
	if (!banner_track.banner_id) {
		res.status(400).json({
			'error': 'Bad Data'
		});
	} else {
		db.banner_tracks.save(banner_track, (err, banner_track) => {
			if (err) return next(err);
			res.json(banner_track);
		});
	}
});

router.delete('/:id', (req, res, next) => {
	db.banner_tracks.remove({_id: mongojs.ObjectId(req.params.id)}, (err, banner_track) => {
		if (err) return next(err);
		res.json(result);
	});
});

router.put('/:id', (req, res, next) => {
	const banner_track = req.body;
	let updateBannerTrack = {};

	if(banner_track.banner_id) {
		updateBannerTrack.banner_id = banner_track.banner_id;
	}

	if(banner_track.type_track) {
		updateBannerTrack.type_track = banner_track.type_track;
	}

	if(banner_track.ip) {
		updateBannerTrack.ip = banner_track.ip;
	}

	if(banner_track.link) {
		updateBannerTrack.link = banner_track.link;
	}

	if(!updateBannerTrack) {
		res.status(400);
		res.json({'error': 'bad request'});
	} else {
		db.banner_tracks.update({_id: mongojs.ObjectId(req.params.id)}, updateBannerTrack, {}, (err, banner_track) => {
			if (err) return next(err);
			res.json(banner_track);
		});
	}
});

module.exports = router;