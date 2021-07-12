import { EntityRepository, Repository } from "typeorm";
import { Char } from "../entities/Char";

@EntityRepository(Char)
export class CharRepositories extends Repository<Char> {

}