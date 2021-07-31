import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post('/', (req, res) => {
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  const { name, description } = req.body;

  createSpecificationService.execute({ name, description });

  return res.status(201).send();
});

specificationRoutes.get('/', (req, res) => {
  const specifications = specificationsRepository.getAll();

  return res.status(200).send(specifications);
});

export { specificationRoutes };
