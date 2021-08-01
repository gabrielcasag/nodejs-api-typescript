import { Category } from '../models/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANSE: ICategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  static getInstance(): ICategoriesRepository {
    if (!CategoriesRepository.INSTANSE) {
      CategoriesRepository.INSTANSE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANSE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category(name, description, new Date());

    this.categories.push(category);
  }

  getAll(): Category[] | [] {
    return this.categories;
  }

  findByName(name: string): Category {
    return this.categories.find((category) => category.name === name);
  }
}

export { CategoriesRepository };
