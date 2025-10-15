import { EntityRepository, Repository } from "typeorm";
import { Client } from "../entity/Client";

@EntityRepository(Client)
export class ClientRepositories extends Repository<Client> {}