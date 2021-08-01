import { Specification } from '../../models/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

class GetAllSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] | [] {
    return this.specificationsRepository.getAll();
  }
}

export { GetAllSpecificationsUseCase };
