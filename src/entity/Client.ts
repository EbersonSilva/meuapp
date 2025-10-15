import { Entity, PrimaryColumn,Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("clients")
export class Client {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    name!: string;

    @Column()
    cpf!: string;

    @Column()
    email!: string;

    @Column()
    address!: string;

    @Column()
    zipcode!: string;

    @Column()
    number!: string;

    @Column()
    city!: string;

    @Column()
    state!: string;

    @CreateDateColumn()
    created_at!: Date;      

    @UpdateDateColumn()
    updated_at!: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}