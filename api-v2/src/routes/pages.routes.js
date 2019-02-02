const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['pages']);

router.get('/', (req, res, next) => {
	db.pages.find((err, pages) => {
		if (err) return next(err);
		res.json(pages);
	});
});

router.get('/:id', (req, res, next) => {
	db.pages.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, page) => {
		if (err) return next(err);
		res.json(page);
	});
});

router.post('/', (req, res, next) => {
	const page = req.body;
	if (!page.name || !page.slug) {
		res.status(400).json({
			'error': 'Bad Data'
		});
	} else {
		db.pages.save(page, (err, page) => {
			if (err) return next(err);
			res.json(page);
		});
	}
});

router.delete('/:id', (req, res, next) => {
	db.pages.remove({_id: mongojs.ObjectId(req.params.id)}, (err, page) => {
		if (err) return next(err);
		res.json(result);
	});
});

router.put('/:id', (req, res, next) => {
	const page = req.body;
	let updatePage = {};

	if(page.name) {
		updatePage.name = page.name;
	}

	if(page.slug) {
		updatePage.slug = page.slug;
	}

	if(page.role_id) {
		updatePage.role_id = page.role_id;
	}

	if(page.user_id) {
		updatePage.user_id = page.user_id;
	}

	if(page.country_id) {
		updatePage.country_id = page.country_id;
	}

	if(page.state) {
		updatePage.state = page.state;
	}

	if(page.city) {
		updatePage.city = page.city;
	}

	if(page.address) {
		updatePage.address = page.address;
	}

	if(page.phone) {
		updatePage.phone = page.phone;
	}

	if(page.mobile) {
		updatePage.mobile = page.mobile;
	}

	if(page.web) {
		updatePage.web = page.web;
	}

	if(page.active) {
		updatePage.active = page.active;
	}

	if(page.lock) {
		updatePage.lock = page.lock;
	}

	if(!updatePage) {
		res.status(400);
		res.json({'error': 'bad request'});
	} else {
		db.pages.update({_id: mongojs.ObjectId(req.params.id)}, updatePage, {}, (err, page) => {
			if (err) return next(err);
			res.json(page);
		});
	}
});

module.exports = router;