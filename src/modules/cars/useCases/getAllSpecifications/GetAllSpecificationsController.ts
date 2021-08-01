import { Request, Response } from 'express';

import { GetAllSpecificationsUseCase } from './GetAllSpecificationsUseCase';

class GetAllSpecificationsController {
  constructor(
    private getAllSpecificationsUseCase: GetAllSpecificationsUseCase
  ) {}

  handle(request: Request, response: Response): Response {
    const specification = this.getAllSpecificationsUseCase.execute();

    return response.json(specification);
  }
}

export { GetAllSpecificationsController };
