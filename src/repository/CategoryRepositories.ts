import { EntityRepository, Repository} from "typeorm";
import { Category } from "../entity/Category";

@EntityRepository(Category)
export class CategoryRepositories extends Repository<Category> {}