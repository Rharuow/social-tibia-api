import { EntityRepository, Repository } from "typeorm";
import { Requiriment } from "../entities/Requiriment";

@EntityRepository(Requiriment)
export class RequirimentRepositories extends Repository<Requiriment>{}