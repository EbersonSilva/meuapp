import { EntityRepository, Repository } from "typeorm";
import { Product } from "../entity/Product";

@EntityRepository(Product)
export class ProductRepositories extends Repository<Product> {}