import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepo = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepo);

  createCategoryService.execute({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get('/', (req, res) => {
  const categories = categoriesRepo.getAll();

  if (categories.length === 0) {
    return res.status(404).send();
  }

  return res.status(200).json(categories);
});

export { categoriesRoutes };
