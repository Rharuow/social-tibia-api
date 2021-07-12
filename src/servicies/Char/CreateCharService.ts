
interface ICharsRequest {
    name: string
    voc: string
    residence: string
    sex: string
    last_login: string
    account_status: boolean
    status: boolean
    level: number
    max_level_shared: number
    min_level_shared: number
    own: string
}

export class CreateCharService {

    sexPattern(sex: string): string {
        return sex.includes('male') ? 'M' : 'F'
    }

    vocPattern(voc: string): string {
        return voc.includes('Knight') ? 'ek' : voc.includes('Druid') ? 'ED' : voc.includes('Sorcerer') ? 'ms' : 'rp'
    }

    async execute({name, voc, residence, sex, last_login, account_status, status, level, max_level_shared, min_level_shared, own}: ICharsRequest) {

        

    }
}