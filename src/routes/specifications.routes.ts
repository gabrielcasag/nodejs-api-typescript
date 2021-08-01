import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { getAllSpecificationsController } from '../modules/cars/useCases/getAllSpecifications';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  createSpecificationController.handle(request, response);
});

specificationRoutes.get('/', (request, response) => {
  getAllSpecificationsController.handle(request, response);
});

export { specificationRoutes };
