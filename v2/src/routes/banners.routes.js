const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['banners']);

router.get('/', (req, res, next) => {
	db.banners.find((err, banners) => {
		if (err) return next(err);
		res.json(banners);
	});
});

router.get('/:id', (req, res, next) => {
	db.banners.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, banner) => {
		if (err) return next(err);
		res.json(banner);
	});
});

router.post('/', (req, res, next) => {
	const banner = req.body;
	if (!banner.name || !banner.width || !banner.height || !banner.click_url) {
		res.status(400).json({
			'error': 'Bad Data'
		});
	} else {
		db.banners.save(banner, (err, banner) => {
			if (err) return next(err);
			res.json(banner);
		});
	}
});

router.delete('/:id', (req, res, next) => {
	db.banners.remove({_id: mongojs.ObjectId(req.params.id)}, (err, banner) => {
		if (err) return next(err);
		res.json(result);
	});
});

router.put('/:id', (req, res, next) => {
	const banner = req.body;
	let updateBanner = {};

	if(banner.client_id) {
		updateBanner.client_id = banner.client_id;
	}

	if(banner.name) {
		updateBanner.name = banner.name;
	}

	if(banner.description) {
		updateBanner.description = banner.description;
	}

	if(banner.width) {
		updateBanner.width = banner.width;
	}

	if(banner.height) {
		updateBanner.height = banner.height;
	}

	if(banner.click_url) {
		updateBanner.click_url = banner.click_url;
	}

	if(banner.imp_total) {
		updateBanner.imp_total = banner.imp_total;
	}

	if(banner.imp_made) {
		updateBanner.imp_made = banner.imp_made;
	}

	if(banner.clicks_total) {
		updateBanner.clicks_total = banner.clicks_total;
	}

	if(banner.clicks_made) {
		updateBanner.clicks_made = banner.clicks_made;
	}

	if(banner.sticky) {
		updateBanner.sticky = banner.sticky;
	}

	if(banner.metakey) {
		updateBanner.metakey = banner.metakey;
	}

	if(banner.own_prefix) {
		updateBanner.own_prefix = banner.own_prefix;
	}

	if(banner.type_purchase) {
		updateBanner.type_purchase = banner.type_purchase;
	}

	if(banner.publish_up) {
		updateBanner.publish_up = banner.publish_up;
	}

	if(banner.publish_down) {
		updateBanner.publish_down = banner.publish_down;
	}

	if(banner.active) {
		updateBanner.active = banner.active;
	}

	if(banner.lock) {
		updateBanner.lock = banner.lock;
	}

	if(!updateBanner) {
		res.status(400);
		res.json({'error': 'bad request'});
	} else {
		db.banners.update({_id: mongojs.ObjectId(req.params.id)}, updateBanner, {}, (err, banner) => {
			if (err) return next(err);
			res.json(banner);
		});
	}
});

module.exports = router;