
import { getCustomRepository } from 'typeorm';

import { CharRepositories } from '../../repositories/CharRepositories';
import { UserRepositories } from '../../repositories/UserRepositories';

interface ICharsRequest {
    name: string
    voc: string
    residence: string
    sex: string
    last_login: string
    account_status: string
    status: string
    level: number
    max_lvl_shared: number
    min_lvl_shared: number
    own: string
}

export class CreateCharService {

    sexPattern(sex: string): string {
        return sex.includes('male') ? 'M' : 'F'
    }

    vocPattern(voc: string): string {
        return voc.includes('Knight') ? 'ek' : voc.includes('Druid') ? 'ED' : voc.includes('Sorcerer') ? 'ms' : 'rp'
    }

    statusPattern(status: string): boolean {
        return status.includes("offline") ? false : true
    }
    
    accountStatusPattern(accountStatus: string): boolean {
        return accountStatus.includes("Free") ? false : true
    }

    async execute({name, voc, residence, sex, last_login, account_status, status, level, max_lvl_shared, min_lvl_shared, own}: ICharsRequest) {
        const charRepositories = getCustomRepository(CharRepositories)

        const userRepositories = getCustomRepository(UserRepositories)

        const userExists = await userRepositories.findOne(own)

        if(!userExists) throw new Error("user doens't exists")

        const char = charRepositories.create({
            name,
            voc: this.vocPattern(voc),
            residence,
            sex: this.sexPattern(sex),
            last_login,
            account_status: this.accountStatusPattern(account_status),
            status: this.statusPattern(status),
            level,
            max_lvl_shared,
            min_lvl_shared,
            own
        })

        await charRepositories.save(char)

        return char

    }
}