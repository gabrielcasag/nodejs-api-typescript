import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): string {
    const nameAlreadyExists = this.categoriesRepository.findByName(name);

    if (nameAlreadyExists) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });

    return '';
  }
}

export { CreateCategoryService };
