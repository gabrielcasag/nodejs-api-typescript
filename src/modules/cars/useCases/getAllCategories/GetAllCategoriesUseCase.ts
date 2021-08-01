import { Category } from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class GetAllCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] | [] {
    return this.categoriesRepository.getAll();
  }
}

export { GetAllCategoriesUseCase };
