import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepo = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const nameAlreadyExists = categoriesRepo.findByName(name);

  if (nameAlreadyExists) {
    res.status(409).send({
      message: 'Category with the same name already exists',
    });
  }

  categoriesRepo.create({ name, description });

  res.status(201).send();
});

categoriesRoutes.get('/', (req, res) => {
  const categories = categoriesRepo.getAll();

  if (categories.length === 0) {
    res.status(404).send();
  }

  res.status(200).json(categories);
});

export { categoriesRoutes };
