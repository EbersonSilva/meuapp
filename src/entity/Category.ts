import { PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, Entity} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("categories")
export class Category {
    @PrimaryColumn("uuid")
    id!: string;

    @Column()
    name!: string;

    @Column()
    description!: string;

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