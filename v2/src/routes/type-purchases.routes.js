const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['type_purchases']);

router.get('/', (req, res, next) => {
	db.type_purchases.find((err, type_purchases) => {
		if (err) return next(err);
		res.json(type_purchases);
	});
});

router.get('/:id', (req, res, next) => {
	db.type_purchases.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, type_purchase) => {
		if (err) return next(err);
		res.json(type_purchase);
	});
});

router.post('/', (req, res, next) => {
	const type_purchase = req.body;
	if (!type_purchase.name) {
		res.status(400).json({
			'error': 'Bad Data'
		});
	} else {
		db.type_purchases.save(type_purchase, (err, type_purchase) => {
			if (err) return next(err);
			res.json(type_purchase);
		});
	}
});

router.delete('/:id', (req, res, next) => {
	db.type_purchases.remove({_id: mongojs.ObjectId(req.params.id)}, (err, type_purchase) => {
		if (err) return next(err);
		res.json(result);
	});
});

router.put('/:id', (req, res, next) => {
	const type_purchase = req.body;
	let updateTypePurchase = {};

	if(type_purchase.name) {
		updateTypePurchase.name = type_purchase.name;
	}

	if(type_purchase.active) {
		updateTypePurchase.active = type_purchase.active;
	}

	if(!updateTypePurchase) {
		res.status(400);
		res.json({'error': 'bad request'});
	} else {
		db.type_purchases.update({_id: mongojs.ObjectId(req.params.id)}, updateTypePurchase, {}, (err, type_purchase) => {
			if (err) return next(err);
			res.json(type_purchase);
		});
	}
});

module.exports = router;