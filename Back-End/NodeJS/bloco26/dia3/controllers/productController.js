const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const products = await ProductModel.getAll();
	
		return res.status(200).send(products);
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const product = await ProductModel.getById(req.params.id);

		if (!product) {
			return res.status(404).end();
		}

		return res.status(200).send(product);
	} catch (err) {
		next(err);
	}
  
});

router.post('/', async (req, res) => {
	try {
		const { name, brand } = req.body;

		if (!name || !brand) {
      return res.status(400).send({ message: 'must inform name and brand' });
    }

  	const newProduct = await ProductModel.add(name, brand);

  	return res.status(201).send(newProduct);
	} catch (err) {
		next(err);
	}
  
});

router.delete('/:id', async (req, res) => {
	try {
		const product = await ProductModel.getById(req.params.id);

		if (!product) {
      return res.status(404).end();
    }

		await ProductModel.exclude(req.params.id);

  	return res.status(204).end();
	} catch (err) {
		next(err);
	}
  
});

router.put('/:id', async (req, res) => {
	try {
		const { name, brand } = req.body;

		if (!name || !brand) {
      return res.status(400).send({ message: 'must inform name and brand' });
    }

		const product = await ProductModel.getById(req.params.id);

		if (!product) {
      return res.status(404).end();
    }

		await ProductModel.update(req.params.id, name, brand);

		return res.status(200).end();
	} catch (err) {
		next(err);
	}
  
});

module.exports = router;