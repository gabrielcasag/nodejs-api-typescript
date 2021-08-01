import { Specification } from '../../models/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTANSE: ISpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  static getInstance(): ISpecificationsRepository {
    if (!SpecificationsRepository.INSTANSE) {
      SpecificationsRepository.INSTANSE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANSE;
  }

  findByName(name: string): Specification {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }

  getAll(): Specification[] {
    return this.specifications;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification(name, description, new Date());

    this.specifications.push(specification);
  }
}

export { SpecificationsRepository };
