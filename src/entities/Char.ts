import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";


@Entity('chars')
export class Char {

    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    voc: string

    @Column()
    residence: string

    @Column()
    sex: string

    @Column()
    last_login: string

    @Column()
    account_status: boolean

    @Column()
    status: boolean

    @Column()
    level: number

    @Column()
    max_lvl_shared: number

    @Column()
    min_lvl_shared: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @Column()
    own: string

    @JoinColumn({name: 'own'})
    @ManyToOne(() => User, {
        onDelete: 'CASCADE',
    })
    user: User

    constructor() {
        if(!this.id) 
            this.id = uuid()
    }

}