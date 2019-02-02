const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['clients']);

router.get('/', (req, res, next) => {
	db.clients.find((err, clients) => {
		if (err) return next(err);
		res.json(clients);
	});
});

router.get('/:id', (req, res, next) => {
	db.clients.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, client) => {
		if (err) return next(err);
		res.json(client);
	});
});

router.post('/', (req, res, next) => {
	const client = req.body;
	if (!client.first_name || !client.last_name || !client.mobile || !client.email) {
		res.status(400).json({
			'error': 'Bad Data'
		});
	} else {
		db.clients.save(client, (err, client) => {
			if (err) return next(err);
			res.json(client);
		});
	}
});

router.delete('/:id', (req, res, next) => {
	db.clients.remove({_id: mongojs.ObjectId(req.params.id)}, (err, client) => {
		if (err) return next(err);
		res.json(result);
	});
});

router.put('/:id', (req, res, next) => {
	const client = req.body;
	let updateClient = {};

	if(client.user_id) {
		updateClient.user_id = client.user_id;
	}

	if(client.first_name) {
		updateClient.first_name = client.first_name;
	}

	if(client.last_name) {
		updateClient.last_name = client.last_name;
	}

	if(client.position) {
		updateClient.position = client.position;
	}

	if(client.country_id) {
		updateClient.country_id = client.country_id;
	}

	if(client.state) {
		updateClient.state = client.state;
	}

	if(client.city) {
		updateClient.city = client.city;
	}

	if(client.address) {
		updateClient.address = client.address;
	}

	if(client.phone) {
		updateClient.phone = client.phone;
	}

	if(client.mobile) {
		updateClient.mobile = client.mobile;
	}

	if(client.web) {
		updateClient.web = client.web;
	}

	if(client.email) {
		updateClient.email = client.email;
	}

	if(client.active) {
		updateClient.active = client.active;
	}

	if(client.lock) {
		updateClient.lock = client.lock;
	}

	if(!updateClient) {
		res.status(400);
		res.json({'error': 'bad request'});
	} else {
		db.clients.update({_id: mongojs.ObjectId(req.params.id)}, updateClient, {}, (err, client) => {
			if (err) return next(err);
			res.json(client);
		});
	}
});

module.exports = router;