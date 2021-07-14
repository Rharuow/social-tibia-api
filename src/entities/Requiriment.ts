import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Char } from "./Char";

@Entity("requiriments")
export class Requiriment {
    
    @PrimaryColumn()
    readonly id: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @Column()
    charId: string
    
    @JoinColumn({name: 'charId'})
    @OneToMany(() => Char, char => char.voc, {
        onDelete: 'CASCADE',
    })
    chars: Char[]

    constructor() {
        if(!this.id) this.id = uuid()
    }
    
}